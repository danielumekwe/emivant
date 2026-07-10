export default function StarRating({ value }: { value: number }) {
  return (
    <div className="flex gap-0.5 text-gold" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => {
        const fill = Math.max(0, Math.min(1, value - i));
        return (
          <span key={i} className="relative inline-block h-4 w-4">
            <StarOutline className="absolute inset-0 text-muted" />
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <StarOutline filled />
            </span>
          </span>
        );
      })}
    </div>
  );
}

function StarOutline({
  filled,
  className,
}: {
  filled?: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={className}
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5Z" />
    </svg>
  );
}
