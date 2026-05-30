import { ImageIcon } from "lucide-react";

export function ImagePlaceholder({
  label = "Photo TBD",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`w-full h-full bg-neutral-200 flex flex-col items-center justify-center text-neutral-400 ${className}`}
    >
      <ImageIcon size={40} strokeWidth={1.5} />
      <span className="mt-3 text-xs uppercase tracking-widest">{label}</span>
    </div>
  );
}
