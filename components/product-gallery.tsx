"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getProductImages, type Product } from "@/data/products";

type GalleryItem = { type: "image"; src: string; alt: string } | { type: "video"; src: string; poster?: string; title: string };

export function ProductGallery({ product }: { product: Product }) {
  const images = getProductImages(product);
  const media: GalleryItem[] = [
    ...images.map((image) => ({ type: "image" as const, ...image })),
    ...(product.video ? [{ type: "video" as const, ...product.video }] : []),
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = media[activeIndex] ?? media[0];

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (media.length < 2 || reducedMotion.matches) return;

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % media.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [activeIndex, media.length]);

  function showPrevious() {
    setActiveIndex((currentIndex) => (currentIndex - 1 + media.length) % media.length);
  }

  function showNext() {
    setActiveIndex((currentIndex) => (currentIndex + 1) % media.length);
  }

  if (!activeItem) return null;

  return (
    <div className="product-gallery">
      <div className="product-main-image">
        {activeItem.type === "image" ? (
          <Image key={activeItem.src} className="gallery-main-asset" src={activeItem.src} alt={activeItem.alt} fill priority sizes="(max-width: 900px) 92vw, 52vw" />
        ) : (
          <video key={activeItem.src} className="gallery-main-asset" controls playsInline preload="metadata" poster={activeItem.poster ?? images[0]?.src} aria-label={activeItem.title}>
            <source src={activeItem.src} />
            Your browser does not support this product video.
          </video>
        )}
        {media.length > 1 && (
          <div className="gallery-controls">
            <button type="button" className="gallery-control" onClick={showPrevious} aria-label="Show previous product image">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button type="button" className="gallery-control" onClick={showNext} aria-label="Show next product image">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m9 6 6 6-6 6" />
              </svg>
            </button>
          </div>
        )}
      </div>
      {media.length > 1 && (
        <div className="gallery-thumbnails" aria-label={`${product.name} media gallery`}>
          {media.map((item, index) => (
            <button key={item.src} type="button" className={`gallery-thumbnail ${activeIndex === index ? "is-active" : ""}`} onClick={() => setActiveIndex(index)} aria-label={`Show ${item.type === "video" ? item.title : item.alt}`} aria-pressed={activeIndex === index}>
              {item.type === "image" ? <Image src={item.src} alt="" fill sizes="72px" /> : <><Image src={item.poster ?? images[0]?.src ?? ""} alt="" fill sizes="72px" /><span className="video-indicator">Play</span></>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
