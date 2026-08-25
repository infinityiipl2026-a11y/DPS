// src/data/productsData.js
// All product data sourced directly from the manufacturers' official websites:
// - Yintech Technology Co., Ltd. — https://www.yintechctp.com / https://www.yinzhiming.com
// - Sysform Technology Corp. — https://www.sysform.tw
// Images are hotlinked from the manufacturers' own CDNs (sourceUrl on every product
// points back to the exact page the data was taken from, for verification).

export const productCatalog = [
  {
    id: "printing-machines",
    title: "Printing Machines",
    brand: "Yintech",
    eyebrow: "Industrial Digital Printing — Yintech",
    description:
      "High-speed digital inkjet printing systems engineered by Yintech Technology Co., Ltd. Yintech's sales and service network spans 60+ countries, delivering high-speed inkjet rotary digital printing solutions for commercial, packaging and label applications.",
    subcategories: [
      {
        id: "dpm-series",
        title: "Digital Printing Machine (DPM) Series",
        description:
          "High-speed inkjet web-fed digital presses in black-and-white, dual-colour and full-colour configurations, built for commercial and packaging production.",
        products: [
          {
            id: "dpm880",
            name: "DPM880 Wide-Format Digital Printing Machine",
            model: "DPM880",
            brand: "Yintech",
            shortDescription:
              "880mm-wide CMYK duplex inkjet press for high-volume commercial and packaging production.",
            description:
              "The DPM880 is Yintech's wide-format flagship digital press — a CMYK duplex, roll-fed inkjet system built for publishers and commercial printers who need high throughput without sacrificing registration accuracy. It combines a Drop-on-Demand piezoelectric print engine with fully automatic infrared drying and a visual operation interface, and is supplied with a decoiling, dust-removal, temperature control, nozzle-compensation, anti-static and winding system as standard.",
            image: "https://www.yintechctp.com/uploadfile/file/20260210/1770704032809418.jpg",
            gallery: [
              "https://www.yintechctp.com/uploadfile/file/20260210/1770704036375299.jpg",
              "https://www.yintechctp.com/uploadfile/file/20260210/1770704041960075.jpg"
            ],
            features: [
              "CMYK duplex (both-sides) inkjet printing",
              "Speeds up to 200 m/min at 600×1200dpi",
              "±0.05mm CMYK registration, ±0.1mm front-back registration",
              "Fully automatic infrared drying, speed-adjustive",
              "Standard decoiling, dust-removal, anti-static & winding systems",
              "Visual touchscreen operation interface"
            ],
            specifications: [
              { label: "Printing Style", value: "CMYK duplex (both sides)" },
              { label: "Resolution", value: "1200×600dpi / 1200×1200dpi" },
              { label: "Max. Printing Speed", value: "200 m/min (600×1200dpi) / 100 m/min (1200×1200dpi)" },
              { label: "CMYK Registration", value: "±0.05mm" },
              { label: "Front-Back Registration", value: "±0.1mm" },
              { label: "Inkjet Head", value: "Drop-on-Demand piezoelectric nozzle" },
              { label: "Ink Type", value: "Water-based pigment ink" },
              { label: "Drying", value: "Infrared drying, full automatic speed adjustment" },
              { label: "Max. Media Width", value: "880mm" },
              { label: "Max. Printing Width", value: "864mm" },
              { label: "Media Thickness", value: "30–600 g/m²" },
              { label: "Media Type", value: "Digital printing paper, art paper, offset paper, inkjet-coated paper, newsprint" },
              { label: "Max. Roll Diameter", value: "1.4m" },
              { label: "Machine Size", value: "12000 × 3000 × 2000mm" },
              { label: "Weight", value: "12,000 kg" },
              { label: "Power", value: "Mechanical 20KW · Infrared drying 50KW · Control system 10KW" }
            ],
            applications: [
              "High-volume book and publication printing",
              "Packaging and label substrates",
              "Newsprint and transactional printing",
              "Wide-format commercial production runs"
            ],
            brochureUrl: null,
            sourceUrl: "https://www.yintechctp.com/product/109.html"
          },
          {
            id: "kyocera-4color",
            name: "Kyocera Printhead High-Speed Full-Color Rotary Inkjet Digital Printing Machine",
            model: "DPM440CI / DPM560CI / DPM660CI (Kyocera 4-Color)",
            brand: "Yintech",
            shortDescription:
              "32 Kyocera 80K-cycle piezo heads for coated-paper CMYK printing up to 150 m/min at 1200×1200dpi.",
            description:
              "Built around 32 Kyocera 80K-cycle piezoelectric print heads, this press is purpose-designed for coated (art) paper — printing directly onto ordinary coated stock with no pre-coating required. Its 1.5–2PL droplet size delivers fine, fast-drying detail at up to 1200×1200dpi, making it suited to premium commercial colour work.",
            image: "https://www.yintechctp.com/uploadfile/file/20251119/1763536877766456.png",
            gallery: [
              "https://www.yintechctp.com/uploadfile/file/20251119/1763534492311435.jpg",
              "https://www.yintechctp.com/uploadfile/file/20251119/1763534494987845.jpg",
              "https://www.yintechctp.com/uploadfile/file/20251119/1763534496339490.jpg",
              "https://www.yintechctp.com/uploadfile/file/20251119/1763534498431026.jpg"
            ],
            features: [
              "32× Kyocera 80K-cycle piezoelectric print heads",
              "Prints coated / art paper directly, no pre-coat required",
              "1.5–2PL droplet size for fine, fast-drying detail",
              "Speeds up to 150 m/min",
              "±0.05mm CMYK registration",
              "Multiple web-width configurations: 440 / 560 / 660mm"
            ],
            specifications: [
              { label: "Printing Style", value: "CMYK duplex (both sides)" },
              { label: "Resolution", value: "1200×600dpi / 1200×960dpi / 1200×1200dpi" },
              { label: "Max. Printing Speed", value: "Up to 150 m/min (600×1200dpi)" },
              { label: "CMYK Registration", value: "±0.05mm" },
              { label: "Front-Back Registration", value: "±0.1mm" },
              { label: "Inkjet Head", value: "32× Kyocera 80K-cycle Drop-on-Demand piezoelectric" },
              { label: "Ink Type", value: "Water-based pigment ink" },
              { label: "Max. Media Width", value: "440mm / 560mm / 660mm" },
              { label: "Max. Printing Width", value: "432mm / 552mm / 652mm" },
              { label: "Media Thickness", value: "45–165 g/m²" },
              { label: "Media Type", value: "Digital printing paper, art paper, offset paper, inkjet-coated paper" },
              { label: "Max. Roll Diameter", value: "1.27m" },
              { label: "Machine Size", value: "14800 × 4000 × 2000mm" },
              { label: "Weight", value: "13,000 kg" },
              { label: "Power", value: "Mechanical 35KW · Infrared drying 40KW · Control system 8KW" }
            ],
            applications: [
              "Coated / art-paper commercial colour printing",
              "Books, catalogues and direct mail",
              "Premium short-to-medium run colour production"
            ],
            brochureUrl: null,
            sourceUrl: "https://www.yintechctp.com/product/105.html"
          },
          {
            id: "kyocera-mono-dual",
            name: "Kyocera Printhead High-Speed Mono/Dual-Color Digital Printing Machine",
            model: "DPM440K / DPM560K / DPM660K (Kyocera Mono/Dual)",
            brand: "Yintech",
            shortDescription:
              "Kyocera piezoelectric-head press for continuous monochrome or dual-colour production printing.",
            description:
              "Fitted with durable Kyocera Drop-on-Demand piezoelectric heads, this press is engineered for 24-hour production environments where reliability matters as much as speed. It runs in monochrome-duplex or dual-colour-duplex modes and supports direct coated-paper printing.",
            image: "https://www.yintechctp.com/uploadfile/file/20251121/1763707203228141.png",
            features: [
              "Monochrome duplex or dual-colour duplex operation",
              "Kyocera Drop-on-Demand piezoelectric heads, built for 24/7 duty",
              "Speeds up to 150 m/min at 1200×600dpi",
              "Direct coated-paper printing",
              "Infrared drying with automatic speed compensation"
            ],
            specifications: [
              { label: "Printing Style", value: "Monochrome duplex / Dual-colour duplex" },
              { label: "Resolution", value: "1200×600dpi / 1200×960dpi / 1200×1200dpi" },
              { label: "Max. Printing Speed", value: "150 m/min (1200×600dpi) / 80 m/min (1200×1200dpi)" },
              { label: "Front-Back Registration", value: "±0.1mm" },
              { label: "Inkjet Head", value: "Kyocera Drop-on-Demand piezoelectric" },
              { label: "Ink Type", value: "Water-based pigment ink" },
              { label: "Max. Media Width", value: "440mm / 560mm / 660mm" },
              { label: "Max. Printing Width", value: "432mm / 540mm / 648mm" },
              { label: "Media Thickness", value: "45–165 g/m²" },
              { label: "Media Type", value: "Digital printing paper, inkjet-coated paper, newsprint, wallpaper" },
              { label: "Max. Roll Diameter", value: "1.27m" },
              { label: "Machine Size", value: "11000 × 3500 × 2200mm" },
              { label: "Weight", value: "9,500 kg" },
              { label: "Power", value: "Mechanical 35KW · Infrared drying 40KW · Control system 8KW" }
            ],
            applications: [
              "High-volume transactional & book printing",
              "Continuous 24-hour production runs",
              "Newsprint and wallpaper substrates"
            ],
            brochureUrl: null,
            sourceUrl: "https://www.yintechctp.com/product/102.html"
          },
          {
            id: "ricoh-hd",
            name: "Ricoh Printhead High-Speed Rotary Inkjet Digital Printing Machine (HD)",
            model: "DPM440R / DPM560R / DPM660R (Ricoh HD)",
            brand: "Yintech",
            shortDescription:
              "Ricoh Drop-on-Demand piezo-head press for cost-efficient high-speed mono/dual-colour production.",
            description:
              "The Ricoh HD series pairs a Drop-on-Demand piezoelectric printhead with infrared drying and a visual operation interface, aimed at printers who need dependable, high-speed monochrome or dual-colour output at a lower total cost of ownership.",
            image: "https://www.yintechctp.com/uploadfile/file/20251120/1763607454979981.png",
            features: [
              "Monochrome duplex or dual-colour duplex printing",
              "Ricoh Drop-on-Demand piezoelectric printhead",
              "Speeds up to 120 m/min",
              "Infrared drying, automatic speed adjustment",
              "Visual touchscreen operation interface"
            ],
            specifications: [
              { label: "Printing Style", value: "Monochrome duplex / Dual-colour duplex" },
              { label: "Resolution", value: "600×600dpi / 600×1200dpi" },
              { label: "Max. Printing Speed", value: "120 m/min (600×600dpi)" },
              { label: "Front-Back Registration", value: "±0.1mm" },
              { label: "Inkjet Head", value: "Ricoh Drop-on-Demand piezoelectric" },
              { label: "Ink Type", value: "Water-based pigment ink" },
              { label: "Max. Media Width", value: "440mm / 560mm / 660mm" },
              { label: "Max. Printing Width", value: "432mm / 540mm / 648mm" },
              { label: "Media Thickness", value: "45–165 g/m²" },
              { label: "Media Type", value: "Digital printing paper, inkjet-coated paper, newsprint, wallpaper" },
              { label: "Max. Roll Diameter", value: "1.27m" },
              { label: "Machine Size", value: "11000 × 3500 × 2200mm" },
              { label: "Weight", value: "9,500 kg" },
              { label: "Power", value: "Mechanical 25KW · Infrared drying 6KW · Control system 5.5KW" }
            ],
            applications: [
              "Cost-efficient high-speed transactional printing",
              "Books, manuals and directories",
              "Newsprint and wallpaper substrates"
            ],
            brochureUrl: null,
            sourceUrl: "https://www.yintechctp.com/product/100.html"
          },
          {
            id: "epson-rotary",
            name: "Epson Rotary Inkjet Digital Printing Machine (Mini)",
            model: "DPM440E-Mini",
            brand: "Yintech",
            shortDescription:
              "Compact CMYK duplex Epson-head press with a short footprint — supports single-sheet, on-demand reprints.",
            description:
              "A compact, modular CMYK duplex press built around an Epson Drop-on-Demand piezoelectric head. Its short 5.8m footprint suits printers with limited floor space, and it supports printing from a single sheet, making it well suited to urgent reprint jobs.",
            image: "https://www.yintechctp.com/uploadfile/file/20251119/1763543368994313.png",
            gallery: [
              "https://www.yintechctp.com/uploadfile/file/20251212/1765526814125146.jpg",
              "https://www.yintechctp.com/uploadfile/file/20251212/1765526819290998.jpg",
              "https://www.yintechctp.com/uploadfile/file/20251212/1765526825778176.jpg"
            ],
            features: [
              "High-precision printing, supports single-sheet runs",
              "Modular design for small production spaces",
              "CMYK duplex printing at up to 100 m/min",
              "±0.08mm CMYK registration",
              "Environmentally friendly, safe, high-speed production"
            ],
            specifications: [
              { label: "Printing Style", value: "CMYK duplex (both sides)" },
              { label: "Resolution", value: "600×600dpi / 600×1200dpi" },
              { label: "Max. Printing Speed", value: "100 m/min (600×1200dpi)" },
              { label: "CMYK Registration", value: "±0.08mm" },
              { label: "Front-Back Registration", value: "±0.1mm" },
              { label: "Inkjet Head", value: "Epson Drop-on-Demand piezoelectric" },
              { label: "Ink Type", value: "Water-based pigment ink" },
              { label: "Max. Media Width", value: "440mm" },
              { label: "Max. Printing Width", value: "432mm" },
              { label: "Media Thickness", value: "45–165 g/m²" },
              { label: "Max. Roll Diameter", value: "1.27m" },
              { label: "Machine Size", value: "5800 × 3500 × 2200mm" },
              { label: "Weight", value: "5,400 kg" },
              { label: "Power", value: "Mechanical 15KW · Infrared drying 25KW · Control system 5KW" }
            ],
            applications: [
              "Urgent single-sheet / short-run reprints",
              "Small-footprint production environments",
              "On-demand commercial print jobs"
            ],
            brochureUrl: null,
            sourceUrl: "https://www.yintechctp.com/product/94.html"
          },
          {
            id: "epson-economical",
            name: "Epson Printhead Full-Color Rotary Inkjet Digital Printing Machine (Economical)",
            model: "DPM440CI-C / DPM440CI / DPM440CI-S",
            brand: "Yintech",
            shortDescription:
              "Value-focused Epson-head press supporting mono, dual-colour and full-CMYK configurations on one platform.",
            description:
              "An economical, high-precision Epson piezoelectric press built for 24-hour production and direct coated-paper printing. Available in mono, dual-colour and full CMYK configurations on a shared platform, giving printers a lower-cost route into digital colour production.",
            image: "https://www.yintechctp.com/uploadfile/file/20251119/1763541323662016.png",
            gallery: [
              "https://www.yintechctp.com/uploadfile/file/20251119/1763541348261325.jpg",
              "https://www.yintechctp.com/uploadfile/file/20251119/1763541353261166.jpg",
              "https://www.yintechctp.com/uploadfile/file/20251119/1763541357963853.jpg"
            ],
            features: [
              "High-precision Epson Drop-on-Demand piezoelectric heads",
              "Built for 24-hour continuous production",
              "Direct coated-paper printing capability",
              "CMYK duplex or dual-colour duplex modes",
              "Visual operation interface"
            ],
            specifications: [
              { label: "Printing Style", value: "CMYK duplex / Dual-colour duplex" },
              { label: "Resolution", value: "600×600 / 1200×600 / 1200×1200dpi (model-dependent)" },
              { label: "CMYK Registration", value: "±0.08mm" },
              { label: "Front-Back Registration", value: "±0.1mm" },
              { label: "Inkjet Head", value: "Epson Drop-on-Demand piezoelectric" },
              { label: "Ink Type", value: "Water-based pigment ink" },
              { label: "Max. Media Width", value: "440mm" },
              { label: "Max. Printing Width", value: "432mm" },
              { label: "Media Thickness", value: "45–165 g/m²" },
              { label: "Max. Roll Diameter", value: "1.27m" },
              { label: "Machine Size", value: "11000 × 3500 × 2200mm" },
              { label: "Weight", value: "9,750 kg" },
              { label: "Power", value: "Mechanical 20KW · Infrared drying 40KW · Control system 8KW" }
            ],
            applications: [
              "Entry-level digital colour production",
              "Coated-paper commercial printing",
              "24-hour production environments"
            ],
            brochureUrl: null,
            sourceUrl: "https://www.yintechctp.com/product/93.html"
          }
        ]
      },
      {
        id: "digital-label-printer-series",
        title: "Digital Label Printer Series",
        description:
          "Single-pass UV inkjet label presses with in-line finishing units for film and self-adhesive label production.",
        products: [
          {
            id: "digital-label-composite",
            name: "Digital Inkjet Label Press (Composite)",
            model: "DILP330 / DILP220 (Composite)",
            brand: "Yintech",
            shortDescription:
              "Single-pass UV label press with in-line flexo, laminating, die-cutting and foil-stamping units.",
            description:
              "A new-generation industrial UV inkjet label press combining CMYK + white + varnish + Pantone colour capability with in-line flexographic printing, laminating, intermittent die-cutting and foil-stamping modules — enabling coat-print-varnish-stamp production in a single pass.",
            image: "https://www.yintechctp.com/uploadfile/file/20251121/1763694517377240.png",
            gallery: [
              "https://www.yintechctp.com/uploadfile/file/20251121/1763704546271139.jpg",
              "https://www.yintechctp.com/uploadfile/file/20251121/1763704552571090.png",
              "https://www.yintechctp.com/uploadfile/file/20251121/1763704555386238.png",
              "https://www.yintechctp.com/uploadfile/file/20251121/1763704558491122.png"
            ],
            features: [
              "CMYK + white + varnish + Pantone colour options",
              "In-line flexographic printing unit",
              "In-line laminating & intermittent die-cutting units",
              "Foil-stamping unit for premium label finishes",
              "LED UV curing, Drop-on-Demand piezoelectric heads"
            ],
            specifications: [
              { label: "Colour Options", value: "CMYK, white, varnish and Pantone (optional)" },
              { label: "Resolution", value: "600×600dpi / 600×1200dpi" },
              { label: "Max. Printing Speed", value: "DILP330: 60 m/min · DILP220: 30 m/min" },
              { label: "Printing Style", value: "Single side" },
              { label: "Ink Type", value: "UV ink" },
              { label: "Drying", value: "LED UV lamp" },
              { label: "Max. Media Width", value: "DILP330: 350mm · DILP220: 216mm" },
              { label: "Max. Printing Width", value: "DILP330: 325mm · DILP220: 216mm" },
              { label: "Media Thickness", value: "0.02–0.35mm" },
              { label: "Media Type", value: "PET / PVC / PP / PE / BOPP and other mono-film materials" },
              { label: "Max. Roll Diameter", value: "800mm" },
              { label: "Machine Size", value: "4200 × 1660 × 1920mm" },
              { label: "Weight", value: "3,000 kg" },
              { label: "Power", value: "3-phase AC380V, 50–60Hz, max 20KW" }
            ],
            applications: [
              "Self-adhesive & film label production",
              "Premium labels needing foil-stamp / varnish finishing",
              "Short-to-medium run label converting"
            ],
            brochureUrl: null,
            sourceUrl: "https://www.yintechctp.com/product/101.html"
          },
          {
            id: "digital-label-press",
            name: "Digital Inkjet Label Press",
            model: "DILP330 / DILP220",
            brand: "Yintech",
            shortDescription:
              "Single-pass UV inkjet label press for high-resolution film and self-adhesive label printing.",
            description:
              "The base configuration of Yintech's UV inkjet label platform — a new-generation, high-precision industrial printhead system reaching up to 600×1200dpi, with smoother tonal gradation and photo-realistic colour reproduction, built around Drop-on-Demand piezoelectric heads and LED UV curing.",
            image: "https://www.yintechctp.com/uploadfile/file/20251119/1763538837958541.png",
            gallery: [
              "https://www.yintechctp.com/uploadfile/file/20251119/1763538947700510.jpg",
              "https://www.yintechctp.com/uploadfile/file/20251121/1763704613846660.png",
              "https://www.yintechctp.com/uploadfile/file/20251121/1763704617587416.png"
            ],
            features: [
              "Next-generation high-precision industrial printhead",
              "Up to 600×1200dpi resolution",
              "Smooth tonal gradation, photo-realistic colour output",
              "CMYK + white + varnish + Pantone colour options",
              "LED UV curing"
            ],
            specifications: [
              { label: "Colour Options", value: "CMYK, white, varnish and Pantone (optional)" },
              { label: "Resolution", value: "600×600dpi / 600×1200dpi" },
              { label: "Max. Printing Speed", value: "DILP330: 60 m/min · DILP220: 30 m/min" },
              { label: "Printing Style", value: "Single side" },
              { label: "Ink Type", value: "UV ink" },
              { label: "Drying", value: "LED UV lamp" },
              { label: "Max. Media Width", value: "DILP330: 350mm · DILP220: 216mm" },
              { label: "Max. Printing Width", value: "DILP330: 325mm · DILP220: 216mm" },
              { label: "Media Thickness", value: "0.02–0.35mm" },
              { label: "Media Type", value: "PET / PVC / PP / PE / BOPP and other mono-film materials" },
              { label: "Max. Roll Diameter", value: "800mm" },
              { label: "Machine Size", value: "4200 × 1660 × 1920mm" },
              { label: "Weight", value: "3,000 kg" },
              { label: "Power", value: "3-phase AC380V, 50–60Hz, max 20KW" }
            ],
            applications: [
              "Self-adhesive & film label production",
              "High-resolution photo-quality labels",
              "Digital short-run label converting"
            ],
            brochureUrl: null,
            sourceUrl: "https://www.yintechctp.com/product/92.html"
          }
        ]
      },
      {
        id: "plate-making-equipment",
        title: "Plate Making Equipment Series",
        description:
          "Thermal and UV CTP (computer-to-plate) systems for offset and flexographic plate production.",
        products: [
          {
            id: "large-format-ctp",
            name: "Large / Very Large Format CTP (Thermal vs UV)",
            model: "CTP Large / VLF",
            brand: "Yintech",
            shortDescription:
              "Large and very-large format computer-to-plate imaging system, available in thermal or UV configurations.",
            description:
              "Yintech's large and very-large format CTP platform images offset plates directly from digital files in either thermal or UV configurations, supporting full-open and oversized plate formats for publishers and packaging printers. Full technical parameters are published as a spec sheet on the manufacturer's product page.",
            image: "https://www.yintechctp.com/uploadfile/file/20251121/1763712277675219.png",
            gallery: [
              "https://www.yintechctp.com/uploadfile/file/20251121/1763712282159511.jpg",
              "https://www.yintechctp.com/uploadfile/file/20251121/1763712287487499.jpg",
              "https://www.yintechctp.com/uploadfile/file/20251121/1763712290892247.jpg"
            ],
            features: [
              "Thermal or UV imaging configurations",
              "Large / very-large format plate support",
              "Direct-to-plate offset imaging workflow"
            ],
            specifications: [
              { label: "Format", value: "Large / Very-large format (full-open & oversized plates)" },
              { label: "Imaging Technology", value: "Thermal or UV (model-dependent)" },
              { label: "Full Parameters", value: "See manufacturer specification sheet (linked below)" }
            ],
            applications: [
              "Offset newspaper and publication plate production",
              "Packaging plate production"
            ],
            brochureUrl: "https://www.yintechctp.com/uploadfile/image/20251125/1764041815620531.png",
            sourceUrl: "https://www.yintechctp.com/product/103.html"
          },
          {
            id: "flexo-ctp",
            name: "Flexo CTP",
            model: "Flexo CTP",
            brand: "Yintech",
            shortDescription:
              "Direct-to-plate imaging system dedicated to flexographic plate production.",
            description:
              "A complete, reliable and cost-effective computer-to-plate solution built specifically for flexographic printers, giving a one-stop high-definition plate-making workflow. Full technical parameters are published as a spec sheet on the manufacturer's product page.",
            image: "https://www.yintechctp.com/uploadfile/file/20251121/1763710679316280.png",
            gallery: [
              "https://www.yintechctp.com/uploadfile/file/20251120/1763600309791423.jpg",
              "https://www.yintechctp.com/uploadfile/file/20251120/1763600314359390.jpg"
            ],
            features: [
              "Dedicated flexographic plate imaging",
              "One-stop high-definition plate-making workflow",
              "Cost-effective alternative to outsourced plate-making"
            ],
            specifications: [
              { label: "Application", value: "Flexographic (flexo) plate imaging" },
              { label: "Full Parameters", value: "See manufacturer specification sheet (linked below)" }
            ],
            applications: [
              "Flexible packaging plate production",
              "Corrugated and label flexo plates"
            ],
            brochureUrl: "https://www.yintechctp.com/uploadfile/image/20251125/1764041589135889.png",
            sourceUrl: "https://www.yintechctp.com/product/96.html"
          },
          {
            id: "automatic-ctp",
            name: "Automatic CTP (Thermal vs UV)",
            model: "Automatic CTP",
            brand: "Yintech",
            shortDescription:
              "Fully automatic computer-to-plate system with automated plate loading, in thermal or UV configurations.",
            description:
              "Yintech's automatic CTP platform pairs direct laser plate imaging with automated plate handling for higher-throughput prepress departments, offered in both thermal and UV imaging variants. Full technical parameters are published as a spec sheet on the manufacturer's product page.",
            image: "https://www.yintechctp.com/uploadfile/file/20251120/1763598982522813.jpg",
            gallery: [
              "https://www.yintechctp.com/uploadfile/file/20251120/1763599033407616.png",
              "https://www.yintechctp.com/uploadfile/file/20251120/1763599039944861.jpg"
            ],
            features: [
              "Fully automatic plate imaging workflow",
              "Thermal or UV laser configurations",
              "Suited to higher-throughput prepress operations"
            ],
            specifications: [
              { label: "Imaging Technology", value: "Thermal or UV (model-dependent)" },
              { label: "Workflow", value: "Automatic plate loading and imaging" },
              { label: "Full Parameters", value: "See manufacturer specification sheet (linked below)" }
            ],
            applications: [
              "High-throughput commercial offset prepress",
              "Publication and packaging plate production"
            ],
            brochureUrl: "https://www.yintechctp.com/uploadfile/image/20251125/1764041144751416.png",
            sourceUrl: "https://www.yintechctp.com/product/95.html"
          }
        ]
      }
    ]
  },
  // SYSFORM: entire Print Finishing Equipment category commented out to hide it from the showcase (Yintech-only for now).
  // To restore, uncomment this whole block.
  //   {
  //     id: "finishing-equipment",
  //     title: "Print Finishing Equipment",
  //     brand: "Sysform",
  //     eyebrow: "Print Finishing Machinery — Sysform",
  //     description:
  //       "Guillotines, perfect binders, creasers, laminators and label cutters engineered by Sysform Technology Corp., a Taiwan-headquartered manufacturer of print finishing machinery since 2007.",
  //     subcategories: [
  //       {
  //         id: "paper-creasing-machines",
  //         title: "Paper Creasing Machines",
  //         description:
  //           "Manual and digital creasing/perforating machines for flyers, covers and folded print work.",
  //         products: [
  //           {
  //             id: "cp340-digital-creaser",
  //             name: "CP340 Digital Creaser",
  //             model: "CP340",
  //             brand: "Sysform",
  //             shortDescription:
  //               "Digital manual-feed creaser/perforator with 32 programmable memory settings, for flyers, menus and book covers.",
  //             description:
  //               "A digital creasing and perforating system with a manual-feed paper path, suited to flyers, leaflets, menus and book covers. It ships with one set of creasing knives and one set of perforating knives, and stores up to 32 creasing/perforating programs in memory.",
  //             image: "https://www.sysform.tw/Uploads/1773899725.364669bb8fcd5901e4.91630651.jpg",
  //             features: [
  //               "Creasing & perforating in one pass",
  //               "32-program digital memory",
  //               "No Paper / Paper Jammed auto-detection",
  //               "Total counter & batch counter",
  //               "mm / inch switchable display"
  //             ],
  //             specifications: [
  //               { label: "Paper Width", value: "340mm" },
  //               { label: "Mode", value: "Creasing & Perforating" },
  //               { label: "Paper Feed Type", value: "Manual feeding" },
  //               { label: "Speed", value: "2,850 sheets/hr (A4, 1 creasing line)" },
  //               { label: "Paper Thickness", value: "70–400 gsm" },
  //               { label: "Creasing Accuracy", value: "±0.2mm" },
  //               { label: "Memory", value: "32 programs" },
  //               { label: "Paper Size Range", value: "50×90mm – 340mm×3000mm" },
  //               { label: "Creasing Lines / Sheet", value: "Up to 32" },
  //               { label: "Power", value: "110V / 220V" }
  //             ],
  //             applications: [
  //               "Flyers and leaflets",
  //               "Restaurant menus",
  //               "Folded book and brochure covers"
  //             ],
  //             brochureUrl: null,
  //             sourceUrl: "https://www.sysform.tw/index.php/product/index/id/114.html"
  //           },
  //           {
  //             id: "pc360-manual-creaser",
  //             name: "PC-360 Manual Creaser",
  //             model: "PC-360",
  //             brand: "Sysform",
  //             shortDescription:
  //               "Compact steel-tool manual creaser that scores clean lines on coated, uncoated and photocopy stock.",
  //             description:
  //               "A compact, manually-operated creasing machine fitted with durable steel upper and lower creasing tools rather than rubber ones. Steel tooling creases cleanly on coated art paper, tough paper and photocopy paper alike, and needs far less frequent replacement than rubber tooling on thick or hard stock.",
  //             image: "https://www.sysform.tw/Uploads/1547799044.77215c418a04bc8236.60199447.jpg",
  //             features: [
  //               "Durable steel creasing tools (not rubber)",
  //               "Clean creasing on coated, uncoated and copy paper",
  //               "Small footprint, easy to operate and maintain",
  //               "Long tool life on thick/hard stock"
  //             ],
  //             specifications: [
  //               { label: "Paper Width", value: "350mm / 13.78\"" },
  //               { label: "Paper Thickness", value: "Up to 450 gsm" },
  //               { label: "Creasing", value: "Yes" },
  //               { label: "Perforating", value: "No" },
  //               { label: "Dimensions", value: "127 × 383 × 600mm" },
  //               { label: "Weight", value: "4 kg" }
  //             ],
  //             applications: [
  //               "Small print shops and copy centres",
  //               "Business card and cover stock creasing",
  //               "Low-volume finishing work"
  //             ],
  //             brochureUrl: null,
  //             sourceUrl: "https://www.sysform.tw/index.php/product/index/id/57.html"
  //           }
  //         ]
  //       },
  //       {
  //         id: "guillotines",
  //         title: "Guillotines",
  //         description:
  //           "Manual and hydraulic paper cutters for print shops, copy centres and packaging converters.",
  //         products: [
  //           {
  //             id: "520hp-hydraulic-guillotine",
  //             name: "520HP Hydraulic Guillotine",
  //             model: "520HP",
  //             brand: "Sysform",
  //             shortDescription:
  //               "Fully hydraulic programmable guillotine with a big colour touchscreen and 99 stored cutting programs.",
  //             description:
  //               "A fully hydraulic paper cutter built for fast, repeatable production cutting in printing houses and copy centres. It stores 99 programs of 10 steps each on a large colour touchscreen (switchable mm/inch), with adjustable clamp pressure, a foot-pedal pre-clamp, and multiple safety systems including a safety beam and two-handed operation.",
  //             image: "https://www.sysform.tw/Uploads/1555472784.95715cb6a190e9aa61.92068466.png",
  //             features: [
  //               "Fully hydraulic clamp and cutting system",
  //               "Big colour touchscreen, mm/inch switchable",
  //               "99 programs × 10 steps memory",
  //               "Foot pedal pre-clamping with optical cutting-line indicator",
  //               "Safety beam + two-handed operation + blade lockout",
  //               "Electronic hand-wheel backgauge, variable speed"
  //             ],
  //             specifications: [
  //               { label: "Cutting Width", value: "520mm / 20.47\"" },
  //               { label: "Cutting Height", value: "80mm / 3.15\"" },
  //               { label: "Narrow Cut", value: "15mm / 0.59\"" },
  //               { label: "Cutting Depth", value: "580mm / 22.84\"" },
  //               { label: "Dimensions (H×W×D)", value: "1300 × 946 × 1396mm" },
  //               { label: "Power Supply", value: "230V, 50/60Hz, 1PH, 20A" },
  //               { label: "Weight", value: "300 kg" }
  //             ],
  //             applications: [
  //               "Commercial print shops",
  //               "Copy and reprographic centres",
  //               "High-volume production cutting"
  //             ],
  //             brochureUrl: null,
  //             sourceUrl: "https://www.sysform.tw/index.php/product/index/id/49.html"
  //           },
  //           {
  //             id: "430m-manual-guillotine",
  //             name: "430M Manual Guillotine",
  //             model: "430M",
  //             brand: "Sysform",
  //             shortDescription:
  //               "Entry-level manual paper cutter with hand-crank backgauge and full safety guarding.",
  //             description:
  //               "A manually operated guillotine with a hand-crank backgauge, built for smaller print and copy shops. It includes front and rear safety guards that lock automatically while cutting, mandatory two-handed operation, a safety blade-change device, and an optical cutting-line indicator.",
  //             image: "https://www.sysform.tw/Uploads/1547716489.05925c4047890e73e1.12527282.jpg",
  //             features: [
  //               "Manual backgauge with hand crank",
  //               "Front & rear safety guards, auto-locked while cutting",
  //               "Mandatory two-handed operation",
  //               "Optical cutting-line indicator",
  //               "Blade fine-depth adjustable from outside the machine"
  //             ],
  //             specifications: [
  //               { label: "Cutting Width", value: "430mm / 16.93\"" },
  //               { label: "Cutting Height", value: "40mm / 1.57\"" },
  //               { label: "Narrow Cut", value: "40mm / 1.57\"" },
  //               { label: "Cutting Depth", value: "430mm / 16.93\"" },
  //               { label: "Dimensions (H×W×D)", value: "400 × 870 × 800mm" },
  //               { label: "Power Supply", value: "230V / 115V, 50/60Hz" },
  //               { label: "Weight", value: "55 kg" }
  //             ],
  //             applications: [
  //               "Small print shops and offices",
  //               "Business card and stationery cutting",
  //               "Light-duty everyday paper cutting"
  //             ],
  //             brochureUrl: null,
  //             sourceUrl: "https://www.sysform.tw/index.php/product/index/id/1.html"
  //           }
  //         ]
  //       },
  //       {
  //         id: "perfect-binders",
  //         title: "Perfect Binders",
  //         description:
  //           "Automatic slit-glue-bind systems for softcover book, manual and catalogue production.",
  //         products: [
  //           {
  //             id: "50b-perfect-binder",
  //             name: "50B Perfect Binder",
  //             model: "50B",
  //             brand: "Sysform",
  //             shortDescription:
  //               "Automatic slitting-gluing-binding system with side-glue device, running up to 400 books/hour.",
  //             description:
  //               "A fully automatic perfect binder that slits, glues and binds in one pass, controlled by preset recipes. It includes a side-glue device for stronger spine adhesion, a jogger table and paper table for smoother operation, quick pre-heating, and an emergency stop with exhaust fan and safety guarding.",
  //             image: "https://www.sysform.tw/Uploads/1547715263.98125c4042bfef8df1.43963260.jpg",
  //             features: [
  //               "Automatic slit–glue–bind cycle, recipe-controlled",
  //               "Side-glue device for reinforced spine adhesion",
  //               "Jogger table & paper table included",
  //               "30-minute quick pre-heating",
  //               "Emergency stop, exhaust fan and safety guard"
  //             ],
  //             specifications: [
  //               { label: "Max. Book Size (Spine)", value: "340mm / 13.39\" (A4)" },
  //               { label: "Side Glue Device", value: "Yes" },
  //               { label: "Binding Capacity", value: "60mm / 2.36\"" },
  //               { label: "Cycle Speed", value: "400 books/hour" },
  //               { label: "Cover Thickness", value: "70–300 gsm" },
  //               { label: "Slitting Method", value: "Mill cutter + comb cutter" },
  //               { label: "Pre-heating Time", value: "30 minutes" },
  //               { label: "Wattage", value: "1,100W" },
  //               { label: "Dimensions (W×D×H)", value: "1180 × 520 × 950mm" },
  //               { label: "Power Supply", value: "110V / 220V" },
  //               { label: "Weight", value: "190 kg" }
  //             ],
  //             applications: [
  //               "Softcover book binding",
  //               "Manuals and catalogues",
  //               "Photo book and yearbook production"
  //             ],
  //             brochureUrl: null,
  //             sourceUrl: "https://www.sysform.tw/index.php/product/index/id/44.html"
  //           },
  //           {
  //             id: "60d-perfect-binder",
  //             name: "60D Perfect Binder",
  //             model: "60D",
  //             brand: "Sysform",
  //             shortDescription:
  //               "Higher-capacity perfect binder with adjustable spine shape and touchscreen control, up to 480 books/hour.",
  //             description:
  //               "A larger-format perfect binder offering an adjustable spine shape, adjustable clamp height, and touch-panel control at a higher cycle speed than the 50B. It runs a two-speed choice with jogger table, paper table, safety cover and exhaust fan for continuous production.",
  //             image: "https://www.sysform.tw/Uploads/1774258667.677369c109eba55a86.55273691.jpg",
  //             features: [
  //               "Adjustable spine shape & clamp height",
  //               "Touchscreen panel control",
  //               "Two-speed operation",
  //               "Jogger table, paper table & safety cover included",
  //               "Side-glue device for reinforced spine adhesion"
  //             ],
  //             specifications: [
  //               { label: "Max. Book Size (Spine)", value: "435mm / 17.13\" (A3)" },
  //               { label: "Side Glue Device", value: "Yes" },
  //               { label: "Binding Capacity", value: "60mm / 2.36\"" },
  //               { label: "Cycle Speed", value: "480 books/hour" },
  //               { label: "Cover Thickness", value: "70–350 gsm" },
  //               { label: "Slitting Method", value: "Mill cutter + comb cutter" },
  //               { label: "Pre-heating Time", value: "30 minutes" },
  //               { label: "Wattage", value: "2,800W" },
  //               { label: "Dimensions (W×D×H)", value: "1600 × 530 × 950mm" },
  //               { label: "Power Supply", value: "110V / 220V" },
  //               { label: "Weight", value: "250 kg" }
  //             ],
  //             applications: [
  //               "Higher-volume softcover book binding",
  //               "A3-spine manuals and catalogues",
  //               "Commercial bindery production runs"
  //             ],
  //             brochureUrl: null,
  //             sourceUrl: "https://www.sysform.tw/index.php/product/index/id/151.html"
  //           }
  //         ]
  //       },
  //       {
  //         id: "laminators",
  //         title: "Laminators",
  //         description:
  //           "Hot and cold roll laminators for photos, posters, documents and commercial print protection.",
  //         products: [
  //           {
  //             id: "auto-350-laminator",
  //             name: "AUTO-350 Fully Automatic Laminator",
  //             model: "AUTO-350",
  //             brand: "Sysform",
  //             shortDescription:
  //               "Fully automatic roll laminator with auto feed, auto cutting and electronic anti-curling control.",
  //             description:
  //               "A fully automatic hot-and-cold roll laminator with auto feeding, auto cutting, a large-diameter steel roller and an electronically settable anti-curling device, plus edge slitting for a clean finished edge.",
  //             image: "https://www.sysform.tw/Uploads/1547868396.42075c4298ec66b402.61194448.jpg",
  //             features: [
  //               "Fully automatic feeding and cutting",
  //               "Big steel roller for even heat/pressure transfer",
  //               "Electronically settable anti-curling device",
  //               "Edge slitting for a clean finished edge",
  //               "Runs both hot and cold laminating film"
  //             ],
  //             specifications: [
  //               { label: "Laminating Width", value: "350mm" },
  //               { label: "Loading Capacity", value: "50mm" },
  //               { label: "Core Size", value: "1\" & 3\"" },
  //               { label: "Speed", value: "0–5 m/min, adjustable" },
  //               { label: "Temperature Range", value: "0–160°C" },
  //               { label: "Paper Thickness", value: "Up to 7mm" },
  //               { label: "Dimensions", value: "1510 × 680 × 1200mm" },
  //               { label: "Weight", value: "200 kg" },
  //               { label: "Films Available", value: "Glossy, Matt" }
  //             ],
  //             applications: [
  //               "Poster and signage lamination",
  //               "High-volume document lamination",
  //               "Print-shop laminating services"
  //             ],
  //             brochureUrl: null,
  //             sourceUrl: "https://www.sysform.tw/index.php/product/index/id/88.html"
  //           },
  //           {
  //             id: "lm-360n-laminator",
  //             name: "LM-360N Roll Laminator",
  //             model: "LM-360N",
  //             brand: "Sysform",
  //             shortDescription:
  //               "Tabletop hot & cold roll laminator for schools, offices, copy centres and print shops.",
  //             description:
  //               "A tabletop hot-and-cold roll laminating machine designed for professional use in schools, offices, copy centres and graphic-print shops — suited to laminating photos, pictures, documents, inkjet prints and posters.",
  //             image: "https://www.sysform.tw/Uploads/1768793467.8965696da57bdae095.17338020.jpg",
  //             features: [
  //               "Runs both hot and cold laminating film",
  //               "Anti-curling device",
  //               "3,000m film loading capacity",
  //               "Adjustable operating speed",
  //               "Optional floor stand available"
  //             ],
  //             specifications: [
  //               { label: "Max. Laminating Width", value: "360mm" },
  //               { label: "Paper Thickness", value: "125–350 gsm" },
  //               { label: "Core Size", value: "1\" & 3\"" },
  //               { label: "Operating Speed", value: "Up to 10 m/min, adjustable" },
  //               { label: "Laminating Temperature", value: "90–110°C" },
  //               { label: "Total Power", value: "1,150W" },
  //               { label: "Anti-curling Device", value: "Yes" },
  //               { label: "Film Loading Capacity", value: "3,000 metres" },
  //               { label: "Machine Size (W×D×H)", value: "56 × 43 × 40cm" }
  //             ],
  //             applications: [
  //               "Schools and offices",
  //               "Copy centres",
  //               "Photo, poster and document lamination"
  //             ],
  //             brochureUrl: null,
  //             sourceUrl: "https://www.sysform.tw/index.php/product/index/id/80.html"
  //           }
  //         ]
  //       },
  //       {
  //         id: "label-cutters",
  //         title: "Label Cutters",
  //         description:
  //           "Auto-feed digital contour cutters for die-cutting self-adhesive labels and stickers.",
  //         products: [
  //           {
  //             id: "sf-350-label-cutter",
  //             name: "SF-350 Label Cutter",
  //             model: "SF-350",
  //             brand: "Sysform",
  //             shortDescription:
  //               "Auto-feed digital label cutter with QR-code positioning and CorelDRAW/AI workflow support.",
  //             description:
  //               "An auto-feeding label cutter driven by a step-motor system with a 4.3\" touch LCD, supporting USB, USB-disk, Ethernet and Wi-Fi connectivity. It uses HD-camera / circle-mark / L-mark positioning and QR-code functionality for accurate contour cutting from Adobe Illustrator or CorelDRAW files.",
  //             image: "https://www.sysform.tw/Uploads/1774321515.798569c1ff6bc2f2e5.19926968.jpg",
  //             features: [
  //               "Auto-feeding, step-motor drive system",
  //               "4.3\" touch LCD control panel",
  //               "USB / USB-disk / Ethernet / Wi-Fi connectivity",
  //               "HD camera / circle-mark / L-mark positioning",
  //               "QR-code function; supports Illustrator & CorelDRAW"
  //             ],
  //             specifications: [
  //               { label: "Machine Type", value: "Auto-feeding label cutter" },
  //               { label: "Max. Feeding Width", value: "350mm" },
  //               { label: "Max. Cutting Width", value: "320mm" },
  //               { label: "Max. Cutting Speed", value: "800mm/s" },
  //               { label: "Max. Cutting Thickness", value: "80–400g / 1mm" },
  //               { label: "Drive", value: "Step motor system" },
  //               { label: "Number of Tools", value: "1" },
  //               { label: "Accuracy", value: "±0.05mm" },
  //               { label: "Knife Force", value: "50g–800g" },
  //               { label: "Power", value: "110V–240V, 50/60Hz" },
  //               { label: "Software", value: "Illustrator, CorelDRAW (Windows)" }
  //             ],
  //             applications: [
  //               "Self-adhesive sticker & label die-cutting",
  //               "Short-run label converting",
  //               "In-house label production for print shops"
  //             ],
  //             brochureUrl: null,
  //             sourceUrl: "https://www.sysform.tw/index.php/product/index/id/161.html"
  //           },
  //           {
  //             id: "lc-350-pro-label-cutter",
  //             name: "LC-350 Pro / LC-350 Pro Max Label Cutter",
  //             model: "LC-350 Pro / LC-350 Pro Max",
  //             brand: "Sysform",
  //             shortDescription:
  //               "Servo-driven auto-feed label cutter, up to twice the cutting speed of the SF-350, with dual-tool Pro Max option.",
  //             description:
  //               "The higher-performance sibling of the SF-350, driven by a servo-motor system for cutting speeds up to 1500mm/s. The Pro Max variant adds a second tool station for combined cutting and creasing/kiss-cutting passes, while retaining the same camera-based registration and QR-code workflow.",
  //             image: "https://www.sysform.tw/Uploads/1774324254.128269c20a1e1f4fb0.49739694.jpg",
  //             features: [
  //               "Servo motor drive — up to 1500mm/s cutting speed",
  //               "Pro Max adds a second tool station",
  //               "4.3\" touch LCD control panel",
  //               "USB / USB-disk / Ethernet / Wi-Fi connectivity",
  //               "HD camera / circle-mark / L-mark positioning + QR-code"
  //             ],
  //             specifications: [
  //               { label: "Machine Type", value: "Auto-feeding label cutter" },
  //               { label: "Max. Feeding Width", value: "350mm" },
  //               { label: "Max. Cutting Width", value: "320mm" },
  //               { label: "Max. Cutting Speed", value: "1,500mm/s" },
  //               { label: "Max. Cutting Thickness", value: "80–400g / 1mm" },
  //               { label: "Drive", value: "Servo motor system" },
  //               { label: "Number of Tools", value: "1 (Pro) / 2 (Pro Max)" },
  //               { label: "Accuracy", value: "±0.05mm" },
  //               { label: "Knife Force", value: "50g–800g" },
  //               { label: "Power", value: "110V–240V, 50/60Hz" },
  //               { label: "Software", value: "Illustrator, CorelDRAW (Windows)" }
  //             ],
  //             applications: [
  //               "High-speed label & sticker die-cutting",
  //               "Combined cut + crease label finishing (Pro Max)",
  //               "Production-volume label converting"
  //             ],
  //             brochureUrl: null,
  //             sourceUrl: "https://www.sysform.tw/index.php/product/index/id/163.html"
  //           }
  //         ]
  //       }
  //     ]
  //   }
];

// Flat helper — every product with its category/subcategory context attached,
// used for related-product lookups and search.
export const allProducts = productCatalog.flatMap((category) =>
  category.subcategories.flatMap((subcategory) =>
    subcategory.products.map((product) => ({
      ...product,
      categoryId: category.id,
      categoryName: category.title,
      subcategoryId: subcategory.id,
      subcategoryName: subcategory.title
    }))
  )
);
