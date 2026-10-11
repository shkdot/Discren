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
    id: "plastisol-printing",
    num: "01",
    title: "Plastisol Printing",
    shortDesc: "Industry-standard durable screen printing for vivid colors, solid opacity, and long-lasting prints.",
    fullDesc: "Plastisol printing is the benchmark for commercial bulk apparel job-work. Formulated with high-grade PVC resin suspended in plasticizer, it cures under controlled flash heat to deliver intense color opacity, exceptional wash fastness, and sharp vector graphics.",
    useCases: [
      "Bulk streetwear & merchandise production (50 to 1,000+ pcs)",
      "High-contrast solid color graphics & brand logos",
      "Heavyweight cotton t-shirts, hoodies, and fleece",
      "Multi-color vector artwork requiring consistent Pantone matching"
    ],
    considerations: [
      "Requires screen exposure preparation per color channel",
      "Creates a slight tactile ink layer on the garment surface",
      "Ideal cost-per-unit ratio for medium to large production runs"
    ],
    suitableFabrics: ["100% Cotton", "Cotton-Poly Blends", "Fleece", "French Terry"],
    image: "/images/home-plastisole.webp",
    badge: "Core Classic"
  },
  {
    id: "water-based-printing",
    num: "02",
    title: "Water-Based Printing",
    shortDesc: "Ultra-soft hand-feel printing where ink absorbs into fabric for lightweight, breathable apparel.",
    fullDesc: "Water-based printing uses water-soluble pigments that penetrate directly into fabric fibers rather than sitting on top. This results in a virtually weightless, ultra-soft print finish with maximum breathability, perfect for high-end retail clothing lines.",
    useCases: [
      "Soft-touch fashion t-shirts & oversized streetwear",
      "Large-area front and back panel prints",
      "Lightweight summer garments & activewear knits",
      "Vintage, muted, or washed aesthetic brand designs"
    ],
    considerations: [
      "Performs best on light-colored natural fibers",
      "Requires careful flash curing to prevent moisture evaporation issues",
      "Yields a smooth zero-ink feel after first wash"
    ],
    suitableFabrics: ["100% Combed Cotton", "Organic Cotton", "Bamboo Knits", "Rayon Blends"],
    image: "/images/home-water-based.webp",
    badge: "Soft Hand-Feel"
  },
  {
    id: "discharge-printing",
    num: "03",
    title: "Discharge Printing",
    shortDesc: "Specialized ink system that removes dark fabric dye to create vibrant prints with zero ink weight.",
    fullDesc: "Discharge printing combines a discharge agent with water-based pigments to bleach away reactive dyes in dark 100% cotton garments while replacing them with fresh color pigments. The result is a vibrant, soft print without stiff ink buildup.",
    useCases: [
      "Dark charcoal, black, and navy cotton apparel",
      "Oversized back graphics on heavyweight hoodies",
      "High-end streetwear brands requiring no heavy print feel",
      "Full-front panel prints prior to garment assembly"
    ],
    considerations: [
      "Requires 100% cotton reactive-dyed fabric for optimal discharge reaction",
      "Fabrics containing synthetic fibers may produce slightly muted tones",
      "Cured prints become soft and weightless after initial wash"
    ],
    suitableFabrics: ["100% Reactive-Dyed Cotton", "Heavyweight Cotton Knits"],
    image: "/images/home-discharge.webp",
    badge: "Zero-Feel on Dark"
  },
  {
    id: "high-density",
    num: "04",
    title: "High-Density (HD) Printing",
    shortDesc: "Pronounced 3D dimensional printing with sharp 90-degree square edges for elevated structural relief.",
    fullDesc: "High-density (HD) printing applies specialized thick silicone or HD plastisol inks through thick high-gauge capillary stencils over multi-pass print cycles. This creates crisp, elevated 3D logos with sharp 90-degree square edges.",
    useCases: [
      "Luxury apparel & high-end streetwear chest emblems",
      "Geometric brand typography & architectural logos",
      "Structured sleeve badges & back collar accents",
      "Premium garment collections requiring heavy 3D presence"
    ],
    considerations: [
      "Produces sharp square vertical edges unlike rounded puff print",
      "Requires specialized screen preparation and multi-pass curing",
      "Best suited for solid vector shapes rather than thin gradients"
    ],
    suitableFabrics: ["Heavy Cotton", "Pique Cotton", "Dense Fleece", "Sweatshirt Knits"],
    image: "/images/home-hd.webp",
    badge: "3D Relief"
  },
  {
    id: "puff-printing",
    num: "05",
    title: "Puff Printing",
    shortDesc: "Raised 3D tactile foam print effect expanding under heat curing for bold typography & emblems.",
    fullDesc: "Puff printing utilizes specialized heat-expanding micro-foam additives mixed into plastisol ink. Under oven curing, the print swells upward into a smooth, rounded 3D raised surface that adds tactile warmth and dimension to garment graphics.",
    useCases: [
      "Streetwear hoodies, crewnecks & oversized tees",
      "Bold typographic brand logos and arch lettering",
      "Tactile chest logos & statement back graphic accents",
      "Vintage 90s style puffed apparel prints"
    ],
    considerations: [
      "Works best with bold, clean linework and thick graphic shapes",
      "Hairline details may expand together during heat swelling",
      "Requires precise temperature curing for uniform elevation"
    ],
    suitableFabrics: ["Heavy Cotton", "French Terry", "Fleece", "Sweatshirt Knit"],
    image: "/images/home-puff.webp",
    badge: "Specialty 3D"
  },
  {
    id: "metallic-foil-printing",
    num: "06",
    title: "Metallic / Foil Printing",
    shortDesc: "High-luster metallic inks and foil transfer applications delivering reflective metallic accents.",
    fullDesc: "Metallic and foil printing uses ultra-fine metallic flake inks (gold, silver, bronze, gunmetal) or heat-applied reflective foils to add intense mirror-like shine and metallic luster to brand artwork.",
    useCases: [
      "Luxury fashion labels & limited-edition drops",
      "Gold, silver, or bronze chest logos & crests",
      "Event merchandise & statement streetwear graphics",
      "High-luster trim details & brand signature accents"
    ],
    considerations: [
      "Foil transfer requires a clear adhesive base print and heat press bonding",
      "Gentle washing recommended to maintain maximum metallic reflection",
      "Adds premium reflective appeal to dark apparel"
    ],
    suitableFabrics: ["Cotton", "Cotton-Poly Blends", "Fleece", "Blends"],
    image: "/images/home-metallic-foil.webp",
    badge: "High-Luster"
  },
  {
    id: "reflective-glow-printing",
    num: "07",
    title: "Glow in the Dark / Reflective",
    shortDesc: "Photo-luminescent and high-visibility glass-bead reflective inks that glow or flash under light.",
    fullDesc: "Reflective and glow-in-the-dark printing incorporates photo-luminescent phosphors that absorb light and glow in darkness, or micro-glass bead reflective compounds that illuminate brilliantly when hit by direct headlight or flash camera light.",
    useCases: [
      "High-visibility streetwear & techwear collections",
      "Glow-in-the-dark graphic prints & nighttime events",
      "Flash-reflective chest, sleeve, and back branding",
      "Safety-inspired apparel & active nightwear"
    ],
    considerations: [
      "Photo-luminescent inks charge under ambient light to emit green/blue glow",
      "Reflective inks bounce direct light beams back to the camera or viewer",
      "Requires precise mesh selection to allow glass beads or glow particles to pass"
    ],
    suitableFabrics: ["Cotton", "Polyester", "Fleece", "Technical Blends"],
    image: "/images/home-glow-in-the-dark.webp",
    badge: "Photo-Active"
  }
];
