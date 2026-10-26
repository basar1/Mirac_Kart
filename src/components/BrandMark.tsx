export function BrandMark({ className = "size-16" }: { className?: string }) {
  return (
    <span
      className={`relative block shrink-0 overflow-hidden rounded-full border border-accent-2 bg-black ${className}`}
    >
      <img
        src="/miracicon.png"
        alt=""
        className="pointer-events-none absolute h-full max-w-none select-none"
        style={{ width: "177.78%", left: "-44.72%", top: "2.1%" }}
      />
    </span>
  );
}
