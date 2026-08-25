// ============================================================================
// MACHINE & PRODUCT DATA
// Used across Home, Products and Brands pages
// ============================================================================

// Category Images
import digitalPrinting from "../assets/categories/digital-printing.jpg";
import labelPrinting from "../assets/categories/label-printing.jpg";
import plateMaking from "../assets/categories/plate-making.jpg";
// SYSFORM: these category images are only used by the Sysform entries below, which are commented out.
// import paperCreasing from "../assets/categories/paper-creasing.jpg";
// import guillotine from "../assets/categories/guillotine.jpg";
// import perfectBinder from "../assets/categories/perfect-binder.jpg";
// import laminator from "../assets/categories/laminator.jpg";
// import labelCutter from "../assets/categories/label-cutter.jpg";

// ============================================================================
// MACHINE CATEGORIES
// ============================================================================

export const machineCategories = [
  {
    id: "printing-machines",
    name: "Printing Machines",
    image: digitalPrinting,
    categoryId: "printing-machines",
    subcategoryId: "dpm-series",
  },
  {
    id: "digital-label-printers",
    name: "Digital Label Printers",
    image: labelPrinting,
    categoryId: "printing-machines",
    subcategoryId: "digital-label-printer-series",
  },
  {
    id: "plate-making-equipment",
    name: "Plate Making Equipment",
    image: plateMaking,
    categoryId: "printing-machines",
    subcategoryId: "plate-making-equipment",
  },
  // SYSFORM: finishing-equipment categories commented out to hide this brand from the showcase.
  // {
  //   id: "paper-creasing",
  //   name: "Paper Creasing Machines",
  //   image: paperCreasing,
  //   categoryId: "finishing-equipment",
  //   subcategoryId: "paper-creasing-machines",
  // },
  // {
  //   id: "guillotines",
  //   name: "Guillotines",
  //   image: guillotine,
  //   categoryId: "finishing-equipment",
  //   subcategoryId: "guillotines",
  // },
  // {
  //   id: "perfect-binders",
  //   name: "Perfect Binders",
  //   image: perfectBinder,
  //   categoryId: "finishing-equipment",
  //   subcategoryId: "perfect-binders",
  // },
  // {
  //   id: "laminators",
  //   name: "Laminators",
  //   image: laminator,
  //   categoryId: "finishing-equipment",
  //   subcategoryId: "laminators",
  // },
  // {
  //   id: "label-cutters",
  //   name: "Label Cutters",
  //   image: labelCutter,
  //   categoryId: "finishing-equipment",
  //   subcategoryId: "label-cutters",
  // },
];

// ============================================================================
// PRODUCT GROUPS
// ============================================================================

export const productGroups = [
  {
    id: "printing-machines",
    title: "Printing Machines",

    description:
      "Advanced industrial printing machines from Yintech for commercial, packaging and label printing applications.",

    items: [
      "Digital Printing Machine (DPM) Series",
      "Digital Label Printer Series",
      "Plate Making Equipment Series",
    ],
  },

  // SYSFORM: print finishing equipment group commented out to hide this brand from the showcase.
  // {
  //   id: "print-finishing-equipment",
  //   title: "Print Finishing Equipment",
  //
  //   description:
  //     "Professional post-press finishing equipment from Sysform for cutting, creasing, binding and laminating.",
  //
  //   items: [
  //     "Paper Creasing Machines",
  //     "Guillotines",
  //     "Perfect Binders",
  //     "Laminators",
  //     "Label Cutters",
  //   ],
  // },
];

// ============================================================================
// FEATURED MACHINES
// ============================================================================

export const featuredMachines = [
  {
    id: "dpm-series",
    name: "Digital Printing Machine (DPM) Series",
    brand: "Yintech",
    category: "Printing Machines",
    description:
      "Industrial digital printing machines designed for commercial and production printing applications.",
    image: digitalPrinting,
    categoryId: "printing-machines",
    subcategoryId: "dpm-series",
  },

  {
    id: "digital-label-printer",
    name: "Digital Label Printer Series",
    brand: "Yintech",
    category: "Printing Machines",
    description:
      "Professional digital label printing systems for high-quality labels and flexible packaging.",
    image: labelPrinting,
    categoryId: "printing-machines",
    subcategoryId: "digital-label-printer-series",
  },

  {
    id: "plate-making",
    name: "Plate Making Equipment Series",
    brand: "Yintech",
    category: "Printing Machines",
    description:
      "Advanced CTP and plate making equipment for precision prepress production.",
    image: plateMaking,
    categoryId: "printing-machines",
    subcategoryId: "plate-making-equipment",
  },

  // SYSFORM: featured machines below commented out to hide this brand from the showcase.
  // {
  //   id: "paper-creasing",
  //   name: "Paper Creasing Machine",
  //   brand: "Sysform",
  //   category: "Print Finishing Equipment",
  //   description:
  //     "High-precision paper creasing machines for commercial printing and packaging applications.",
  //   image: paperCreasing,
  //   categoryId: "finishing-equipment",
  //   subcategoryId: "paper-creasing-machines",
  // },
  //
  // {
  //   id: "guillotine",
  //   name: "Hydraulic Guillotine",
  //   brand: "Sysform",
  //   category: "Print Finishing Equipment",
  //   description:
  //     "Heavy-duty guillotines delivering accurate and efficient paper cutting.",
  //   image: guillotine,
  //   categoryId: "finishing-equipment",
  //   subcategoryId: "guillotines",
  // },
  //
  // {
  //   id: "perfect-binder",
  //   name: "Perfect Binder",
  //   brand: "Sysform",
  //   category: "Print Finishing Equipment",
  //   description:
  //     "Professional perfect binding systems for books, manuals and catalogues.",
  //   image: perfectBinder,
  //   categoryId: "finishing-equipment",
  //   subcategoryId: "perfect-binders",
  // },
  //
  // {
  //   id: "laminator",
  //   name: "Automatic Laminator",
  //   brand: "Sysform",
  //   category: "Print Finishing Equipment",
  //   description:
  //     "Automatic laminating machines providing premium print finishing and protection.",
  //   image: laminator,
  //   categoryId: "finishing-equipment",
  //   subcategoryId: "laminators",
  // },
  //
  // {
  //   id: "label-cutter",
  //   name: "Label Cutter",
  //   brand: "Sysform",
  //   category: "Print Finishing Equipment",
  //   description:
  //     "Precision label cutting solutions for professional label production.",
  //   image: labelCutter,
  //   categoryId: "finishing-equipment",
  //   subcategoryId: "label-cutters",
  // },
];