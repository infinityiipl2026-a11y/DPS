// src/data/brands.js

import yintechLogo from "../assets/logos/yintech.png";
import sysformLogo from "../assets/logos/sysform.png";

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

  {
    id: "sysform",
    name: "Sysform",
    logo: sysformLogo,
    website: "https://www.sysform.tw/",
    description:
      "Sysform is a professional manufacturer of print finishing equipment including creasing machines, guillotines, laminators, perfect binders and label cutters.",
    categories: [
      "Paper Creasing",
      "Guillotines",
      "Perfect Binders",
      "Laminators",
      "Label Cutters",
    ],
  },
];