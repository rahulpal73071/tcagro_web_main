import { ReactNode } from "react";

// ── Button variants ──────────────────────────
// "primary"      → dark green, white text
// "secondary"    → outlined dark green
// "white"        → white bg, dark text (for dark sections)
// "ghost-white"  → transparent + white border (for dark sections)

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "white" | "ghost-white";
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  fullWidth?: boolean;
}

export default function Button({
  children,
  href,
  variant = "primary",
  onClick,
  type = "button",
  className = "",
  fullWidth = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide cursor-pointer border-2 transition-all duration-300 ease-in-out no-underline select-none";

  const variants: Record<string, string> = {
    primary:
      "border-transparent hover:-translate-y-0.5 hover:shadow-lg hover:brightness-110",
    secondary:
      "bg-transparent hover:-translate-y-0.5",
    white:
      "bg-white hover:-translate-y-0.5 hover:shadow-lg hover:bg-stone-50",
    "ghost-white":
      "bg-transparent border-white/50 text-white hover:bg-white/10 hover:border-white",
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      background: "var(--green-800)",
      borderColor: "var(--green-800)",
      color: "white",
    },
    secondary: {
      background: "transparent",
      borderColor: "var(--green-800)",
      color: "var(--green-800)",
    },
    white: {
      background: "white",
      borderColor: "white",
      color: "var(--green-800)",
    },
    "ghost-white": {},
  };

  const widthClass = fullWidth ? "w-full" : "";

  const cls = `${base} ${variants[variant]} ${widthClass} ${className}`;

  if (href) {
    return (
      <a href={href} className={cls} style={variantStyles[variant]}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={cls} style={variantStyles[variant]} onClick={onClick}>
      {children}
    </button>
  );
}
