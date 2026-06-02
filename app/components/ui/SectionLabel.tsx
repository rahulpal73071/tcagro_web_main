// Small uppercase label shown above each section heading.
// e.g. "Who We Are" above "About Us"

interface SectionLabelProps {
  text: string;
  light?: boolean; // true = lighter colour for dark backgrounds
  center?: boolean;
}

export default function SectionLabel({ text, light = false, center = false }: SectionLabelProps) {
  return (
    <div
      className={`flex items-center gap-2.5 text-xs font-semibold tracking-[0.18em] uppercase mb-3 ${center ? "justify-center" : ""}`}
      style={{ color: light ? "var(--green-300)" : "var(--earth-500)" }}
    >
      {/* Short horizontal rule */}
      <span
        className="block w-7 h-0.5 rounded flex-shrink-0"
        style={{ background: light ? "var(--green-300)" : "var(--earth-500)" }}
      />
      {text}
    </div>
  );
}
