export interface CapabilityItem {
  id: string;
  num: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  useCases: string[];
  considerations: string[];
  suitableFabrics: string[];
  image: string;
  badge?: string;
}

export const capabilitiesData: CapabilityItem[] = [
  {
    id: "screen-printing",
    num: "01",
    title: "Screen Printing",
    shortDesc: "Experience across different screen-printing requirements for apparel production.",
    fullDesc: "Screen printing remains the industry standard for bulk apparel production. We offer plastisol, water-based, and discharge screen printing tailored to fabric composition, vibrancy requirements, and garment durability.",
    useCases: [
      "Bulk apparel runs (50 to 1,000+ pieces)",
      "Brand merchandise & streetwear collections",
      "Heavyweight cotton t-shirts & hoodies",
      "Vector artwork with solid color separation"
    ],
    considerations: [
      "Requires screen preparation per color in the design",
      "Most cost-effective for medium to large production quantities",
      "Fabric type influences ink formulation selection"
    ],
    suitableFabrics: ["100% Cotton", "Cotton-Poly Blends", "Fleece", "French Terry"],
    image: "/images/screen_print.webp",
    badge: "Core Service"
  },
  {
    id: "dtf-printing",
    num: "02",
    title: "DTF Printing",
    shortDesc: "A flexible printing option for designs and production requirements that call for it.",
    fullDesc: "Direct-to-Film (DTF) printing enables full-color detail, smooth gradients, and fine photographic elements without full screen setup fees. Ideal for multi-color complex graphics across varied placement points.",
    useCases: [
      "Multi-color artwork with photorealistic details & gradients",
      "Intricate sleeve, neck label, and pocket prints",
      "Smaller batch sampling and short-run production",
      "Synthetic or technical fabric blends"
    ],
    considerations: [
      "Film transfer finish provides clean edge definition",
      "Heat press application conditions must match fabric tolerance",
      "Excellent for artwork with numerous color transitions"
    ],
    suitableFabrics: ["Cotton", "Polyester", "Nylon Blends", "Canvas"],
    image: "/images/screen_print.webp",
    badge: "Flexible"
  },
  {
    id: "puff-printing",
    num: "03",
    title: "Puff Printing",
    shortDesc: "A raised, dimensional effect for designs that need more visual and tactile presence.",
    fullDesc: "Puff printing utilizes specialized foaming ink additives that expand under heat curing to create a soft, 3D raised print effect. Adds distinct tactile texture and visual depth to brand typography and logos.",
    useCases: [
      "Streetwear hoodies & oversized tees",
      "Bold typographic logos and brand emblems",
      "Statement chest prints & back graphic accents",
      "Tactile brand signature details"
    ],
    considerations: [
      "Works best with bold, thick linework and graphic shapes",
      "Very fine hairline details may fuse during heat expansion",
      "Requires precise cure timing to ensure consistent elevation"
    ],
    suitableFabrics: ["Heavy Cotton", "French Terry", "Fleece", "Sweatshirt Knit"],
    image: "/images/puff_print.webp",
    badge: "Specialty Finish"
  },
  {
    id: "high-density",
    num: "04",
    title: "High-Density",
    shortDesc: "A pronounced dimensional finish for designs requiring additional depth and structure.",
    fullDesc: "High-density printing applies multiple layers of specialized thick ink through high-gauge stencils to build clean, sharp, square-edged 3D dimensional prints with distinct structural relief.",
    useCases: [
      "Luxury apparel & high-end streetwear branding",
      "Structured geometric logos & typography",
      "Chest emblems and sleeve badges",
      "Premium garment collections requiring elevated finishes"
    ],
    considerations: [
      "Produces sharp 90-degree crisp raised edges unlike rounded puff print",
      "Requires specialized screen preparation and multi-pass curing",
      "Best suited for solid graphic elements rather than thin gradients"
    ],
    suitableFabrics: ["Heavy Cotton", "Pique Cotton", "Dense Fleece", "Blend Knits"],
    image: "/images/high_density.webp",
    badge: "3D Relief"
  },
  {
    id: "cut-panel-printing",
    num: "05",
    title: "Cut Panel Printing",
    shortDesc: "Individual garment panels printed before stitching and garment assembly.",
    fullDesc: "Cut panel printing involves printing directly onto flat cut pieces of fabric before they are stitched into finished garments. This allows edge-to-edge prints, seam-spanning graphics, and precise layout alignment without distortion.",
    useCases: [
      "Over-the-seam prints & wide back graphics",
      "Full-front panel graphics",
      "Sleeve and shoulder panel prints",
      "Garment manufacturer job-work prior to assembly"
    ],
    considerations: [
      "Panels must be flat, unstitched, and cut accurately",
      "Facilitates seamless printing near pocket edges and armholes",
      "Enables higher production throughput on flat printing tables"
    ],
    suitableFabrics: ["All Cut Knit Fabric Panels", "Woven Panels", "Denim Panels"],
    image: "/images/cut_panel.webp",
    badge: "Garment Job-Work"
  },
  {
    id: "finished-garments",
    num: "06",
    title: "Finished Garments",
    shortDesc: "Printing directly on ready-made garments, including finished T-shirts and apparel.",
    fullDesc: "Printing on pre-stitched, finished clothing items such as ready tees, hoodies, and sweatshirts. We utilize specialized platens and positioning jigs to ensure clean placement across varied garment sizes.",
    useCases: [
      "Ready-made blank t-shirts & oversized tees",
      "Finished hoodies, sweatshirts & zip jackets",
      "Tote bags and fabric accessories",
      "Restocking active clothing line runs"
    ],
    considerations: [
      "Garments must be laid flat without bulk around seams",
      "Platen size determines maximum print dimensions on stitched garments",
      "Proper garment pallet loading ensures registration consistency"
    ],
    suitableFabrics: ["Finished Cotton Tees", "Finished Hoodies", "Blank Sweatshirts"],
    image: "/images/home-hero-image.webp",
    badge: "Ready-Made"
  }
];
