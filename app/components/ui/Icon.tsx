// Maps an icon name string (stored in data.ts) to the actual Lucide component.
// Add more entries as you add services/features.

import {
  GraduationCap,
  ShoppingBag,
  FlaskConical,
  Microscope,
  Sprout,
  Leaf,
  Users,
  BadgeCheck,
  LucideProps,
} from "lucide-react";

const ICON_MAP: Record<string, React.FC<LucideProps>> = {
  GraduationCap,
  ShoppingBag,
  FlaskConical,
  Microscope,
  Sprout,
  Leaf,
  Users,
  BadgeCheck,
};

interface IconProps extends LucideProps {
  name: string;
}

export default function Icon({ name, ...props }: IconProps) {
  const Component = ICON_MAP[name] ?? Leaf;
  return <Component {...props} />;
}
