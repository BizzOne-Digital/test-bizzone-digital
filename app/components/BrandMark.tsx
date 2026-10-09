export default function BrandMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" focusable="false">
      <rect x="10" y="2" width="12" height="12" rx="3" transform="rotate(45 16 8)" fill="#b56bff" />
      <rect x="2" y="10" width="12" height="12" rx="3" transform="rotate(45 8 16)" fill="#8c00ff" />
      <rect x="18" y="10" width="12" height="12" rx="3" transform="rotate(45 24 16)" fill="#a23dff" />
      <rect x="10" y="18" width="12" height="12" rx="3" transform="rotate(45 16 24)" fill="#7200d1" />
    </svg>
  );
}
