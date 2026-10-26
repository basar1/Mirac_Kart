export function BrandMark({ className = "size-16" }: { className?: string }) {
  return (
    <span
      className={`relative block shrink-0 overflow-hidden rounded-full border border-accent-2 bg-black ${className}`}
    >
      <img
        src="/mirac-mark.png"
        alt=""
        className="pointer-events-none size-full object-contain object-center select-none"
      />
    </span>
  );
}
