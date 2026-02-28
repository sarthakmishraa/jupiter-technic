export interface Product {
  title: string;
  icon: string;
  colorGradient: string;
  borderColor: string;
  shadowColor: string;
  description: string;
  applications: string[];
  industries: string[];
  bulkAvailable: boolean;
}

export interface Offering {
  icon: string;
  title: string;
  description: string;
  colorGradient: string;
  shadowColor: string;
}

export const OFFERINGS: Offering[] = [
  {
    icon: "◈",
    title: "Sheet Metal Components",
    description:
      "Precision-cut and formed sheet metal parts for diverse industrial applications, available in custom specifications and bulk quantities.",
    colorGradient: "from-blue-500 to-cyan-500",
    shadowColor: "shadow-blue-500/20",
  },
  {
    icon: "⚙",
    title: "Industrial Tools",
    description:
      "A comprehensive range of industrial-grade tools designed for heavy-duty manufacturing operations and maintenance workflows.",
    colorGradient: "from-amber-500 to-orange-500",
    shadowColor: "shadow-amber-500/20",
  },
  {
    icon: "⛭",
    title: "Mechanical Spares",
    description:
      "High-quality mechanical spare parts ensuring minimal downtime and consistent performance for your production lines.",
    colorGradient: "from-emerald-500 to-teal-500",
    shadowColor: "shadow-emerald-500/20",
  },
];

export const PRODUCTS: Product[] = [
  {
    title: "Sheet Metal Components",
    icon: "◈",
    colorGradient: "from-blue-500 to-cyan-600",
    borderColor: "border-blue-500/20",
    shadowColor: "shadow-blue-500/20",
    description:
      "Precision sheet metal components manufactured to exact specifications. Our range covers flat, formed, and assembled sheet metal parts used across automotive, electrical, HVAC, and general engineering industries.",
    applications: [
      "Enclosures & Housings",
      "Brackets & Mounting Plates",
      "Custom Fabricated Parts",
      "Ducting & Ventilation Parts",
    ],
    industries: [
      "Automotive",
      "Electrical & Electronics",
      "HVAC & Ventilation",
      "General Engineering",
    ],
    bulkAvailable: true,
  },
  {
    title: "Industrial Tools",
    icon: "⚙",
    colorGradient: "from-amber-500 to-orange-600",
    borderColor: "border-amber-500/20",
    shadowColor: "shadow-amber-500/20",
    description:
      "A comprehensive catalogue of industrial-grade hand tools, power tools, cutting tools, and measuring instruments — sourced from reliable manufacturers and designed for heavy-duty production environments.",
    applications: [
      "Machining & Cutting Operations",
      "Assembly Line Support",
      "Maintenance & Repair",
      "Quality Inspection",
    ],
    industries: [
      "Manufacturing Plants",
      "Machine Shops",
      "Maintenance Departments",
      "Tool Rooms",
    ],
    bulkAvailable: true,
  },
  {
    title: "Mechanical Spares",
    icon: "⛭",
    colorGradient: "from-emerald-500 to-teal-600",
    borderColor: "border-emerald-500/20",
    shadowColor: "shadow-emerald-500/20",
    description:
      "Quality-tested mechanical spare parts including bearings, bushings, couplings, gears, shafts, and fasteners. We keep your production lines running with parts that meet OEM specifications.",
    applications: [
      "Machine Overhaul & Repair",
      "Preventive Maintenance Programs",
      "Production Line Upgrades",
      "Equipment Refurbishment",
    ],
    industries: [
      "Heavy Engineering",
      "Textile Machinery",
      "Packaging Equipment",
      "Process Industries",
    ],
    bulkAvailable: true,
  },
];
