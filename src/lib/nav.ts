export interface NavItem {
  number: string;
  label: string;
  href: string;
}

export const primaryNav: NavItem[] = [
  { number: "01", label: "Work", href: "/work" },
  { number: "02", label: "Services", href: "/services" },
  { number: "03", label: "Pricing", href: "/pricing" },
  { number: "04", label: "Process", href: "/process" },
  { number: "05", label: "About", href: "/about" },
  { number: "06", label: "Resources", href: "/resources" },
];

export const ctaLabel = "Start a Project";
export const ctaHref = "/contact";
