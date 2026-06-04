// Logo — used in Header and Footer.
// Replace the SVG icon with your actual logo image when ready.

interface LogoProps {
  dark?: boolean; // true = light text for dark backgrounds
  size?: "sm" | "md" | "lg";
}

export default function Logo({ dark = false, size = "md" }: LogoProps) {
  const iconSize = size === "sm" ? "w-8 h-8" : size === "lg" ? "w-12 h-12" : "w-10 h-10";
  const nameSize = size === "sm" ? "text-base" : size === "lg" ? "text-xl" : "text-lg";

  return (
    <a href="#hero" className="flex items-center gap-3 no-underline group">
      {/* Green square icon with leaf/plant SVG */}
      <div
        className={`${iconSize} rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105`}
        style={{ background: dark ? "rgba(255,255,255,0.15)" : "var(--green-800)" }}
      >
        <img src="/images/logo.png" alt="" />
      </div>

      {/* Text stack */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-display font-semibold ${nameSize} leading-tight`}
          style={{ color: dark ? "white" : "var(--green-800)" }}
        >
          Tiera & Cielo Agro
        </span>
        <span
          className="text-xs font-semibold tracking-widest uppercase mt-0.5"
          style={{ color: dark ? "rgba(255,255,255,0.55)" : "var(--earth-500)" }}
        >
          Seed to Sell we have all
        </span>
      </div>
    </a>
  );
}
