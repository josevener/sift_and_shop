export function getDailyIndex(length: number) {
  if (length < 1) return 0;

  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Manila",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const value = (part: Intl.DateTimeFormatPartTypes) => Number(parts.find((item) => item.type === part)?.value);
  const dayNumber = Math.floor(Date.UTC(value("year"), value("month") - 1, value("day")) / 86_400_000);
  return dayNumber % length;
}

export function subscribeToDailyRotation(onStoreChange: () => void) {
  // Keep an already-open storefront current after midnight without polling any server.
  const intervalId = window.setInterval(onStoreChange, 60_000);
  return () => window.clearInterval(intervalId);
}
