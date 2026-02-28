export const COMPANY = {
  name: "Jupiter Technic",
  shortName: "JT",
  tagline: "Engineering · Supply",
  established: 2017,
  location: "Dombivli, Maharashtra, India",
  email: "info@jupitertechnic.com",
  phone: "+91 XXXXX XXXXX",
  businessType: "Supplier & Trader",
  industry: "Mechanical Engineering / Industrial Manufacturing",

  hours: {
    weekdays: { days: "Monday – Saturday", time: "9:00 AM – 7:00 PM" },
    weekend: { days: "Sunday", time: "Closed" },
  },

  stats: [
    { label: "Years in Business", value: "8+" },
    { label: "Products Supplied", value: "500+" },
    { label: "Clients Served", value: "200+" },
    { label: "On-Time Delivery", value: "98%" },
  ],

  mission:
    "To deliver quality-assured mechanical products and industrial supplies with technical reliability, ensuring our clients' operations run without interruption.",
  vision:
    "To become the most trusted industrial supply partner in Western India, known for engineering knowledge, product quality, and supply dependability.",

  highlights: [
    "Established in 2017 in Dombivli, Maharashtra",
    "Supplier & Trader in Mechanical Engineering",
    "Serving manufacturing & industrial sectors",
    "B2B focused with bulk supply capability",
  ],
} as const;
