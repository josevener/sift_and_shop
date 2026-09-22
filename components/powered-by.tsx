import { siteConfig } from "@/data/site";

type PoweredByProps = {
  className?: string;
};

// Reuse this component wherever the Zentrix Solutions attribution is needed.
// Update its wording or destination centrally in data/site.ts.
export function PoweredBy({ className }: PoweredByProps) {
  return (
    <a
      className={`powered-by ${className ?? ""}`.trim()}
      href={siteConfig.poweredBy.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Powered by ${siteConfig.poweredBy.label}`}
    >
      <span>Powered by</span>
      <strong>{siteConfig.poweredBy.label}</strong>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 17 17 7M9 7h8v8" />
      </svg>
    </a>
  );
}
