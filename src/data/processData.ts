export interface ProcessStepItem {
  num: string;
  title: string;
  shortDesc: string;
  detailDesc: string;
  clientTask: string;
  discrenTask: string;
}

export const processData: ProcessStepItem[] = [
  {
    num: "01",
    title: "Requirement & Consultation",
    shortDesc: "Share artwork, garment details, quantity and specific print requirements.",
    detailDesc: "The process begins when you share your vector artwork, target garment specifications (or panel details), order quantity, and intended visual effect.",
    clientTask: "Provide vector artwork file (AI, EPS, PDF, or high-res PNG), garment type, count, and target deadline.",
    discrenTask: "Review artwork feasibility, evaluate fabric compatibility, and recommend optimal printing techniques."
  },
  {
    num: "02",
    title: "Artwork & Garment Review",
    shortDesc: "Technical assessment of artwork resolution, color separation, and fabric behavior.",
    detailDesc: "We inspect your artwork for print scale, screen separation viability, linework thickness, and fabric texture interaction to prevent issues prior to production.",
    clientTask: "Confirm placement dimensions, color pantone codes (if any), and garment sizing breakdown.",
    discrenTask: "Perform digital film separation, check line thickness tolerances, and prepare film positives or print files."
  },
  {
    num: "03",
    title: "Method & Ink Selection",
    shortDesc: "Choosing the right printing approach based on fabric, artwork, and intended result.",
    detailDesc: "Whether your job requires soft-hand water-based ink, plastisol for vibrant opacity, puff additives for 3D elevation, or high-density screens, we select the right ink system.",
    clientTask: "Approve selected ink technique and sample cost/timeline.",
    discrenTask: "Mix ink formulations, prepare mesh screens or transfers, and set up press equipment."
  },
  {
    num: "04",
    title: "Sample & Testing",
    shortDesc: "Paid sample production and testing for client review before bulk production.",
    detailDesc: "When required or requested, a paid sample piece is printed and cured. This allows you to inspect print feel, color accuracy, and wash durability prior to mass production.",
    clientTask: "Review physical sample or high-resolution sample photos/video for approval.",
    discrenTask: "Execute sample run, perform wash/cure checks, and adjust ink formula or press pressure if needed."
  },
  {
    num: "05",
    title: "Bulk Production",
    shortDesc: "Executing bulk printing according to approved sample standards.",
    detailDesc: "Once the sample is signed off, bulk production proceeds on our printing tables/platens with disciplined registration, squeegee pressure, and temperature-controlled flash curing.",
    clientTask: "Pay order advance according to commercial terms.",
    discrenTask: "Run bulk printing with batch consistency, monitoring ink opacity, positioning, and registration."
  },
  {
    num: "06",
    title: "Quality Check",
    shortDesc: "Continuous inspection during production to maintain visual and tactile consistency.",
    detailDesc: "Every printed batch undergoes visual inspection to verify print alignment, ink curing completion, edge sharpness, and cleanliness before packing.",
    clientTask: "Coordinate delivery or pickup preferences.",
    discrenTask: "Inspect cured prints, check for stray ink marks, count finished pieces, and pack systematically."
  },
  {
    num: "07",
    title: "Handover & Dispatch",
    shortDesc: "Complete order handover, transport coordination, or factory collection.",
    detailDesc: "Your printed garments or cut panels are packed securely in client lots, ready for dispatch or pickup from our unit in Jogeshwari West, Mumbai.",
    clientTask: "Clear balance payment and collect shipment or receive delivery dispatch.",
    discrenTask: "Final package count verification, dispatch coordination, and handover documentation."
  }
];
