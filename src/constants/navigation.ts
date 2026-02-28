export interface NavItem {
  id: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "products", label: "Products" },
  { id: "why-us", label: "Why Choose Us" },
  { id: "contact", label: "Contact" },
];

export const SECTION_IDS = NAV_ITEMS.map((item) => item.id);
