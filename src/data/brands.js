// src/data/brands.js

import yintechLogo from "../assets/logos/yintech.png";
// SYSFORM: brand temporarily hidden from the site (Yintech-only showcase). Logo import kept for when it's re-enabled.
// import sysformLogo from "../assets/logos/sysform.png";

export const brands = [
  {
    id: "yintech",
    name: "Yintech",
    logo: yintechLogo,
    website: "https://www.yinzhiming.com/",
    description:
      "Yintech is a leading manufacturer of digital printing machinery including Digital Printing Machine (DPM) Series, Digital Label Printer Series and Plate Making Equipment.",
    categories: [
      "Digital Printing Machines",
      "Digital Label Printers",
      "Plate Making Equipment",
    ],
  },

  // SYSFORM: commented out to hide this brand from the site. Restore by uncommenting.
  // {
  //   id: "sysform",
  //   name: "Sysform",
  //   logo: sysformLogo,
  //   website: "https://www.sysform.tw/",
  //   description:
  //     "Sysform is a professional manufacturer of print finishing equipment including creasing machines, guillotines, laminators, perfect binders and label cutters.",
  //   categories: [
  //     "Paper Creasing",
  //     "Guillotines",
  //     "Perfect Binders",
  //     "Laminators",
  //     "Label Cutters",
  //   ],
  // },
];