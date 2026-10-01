export interface WorkItem {
  id: string;
  title: string;
  category: "Screen Printing" | "Puff & High-Density" | "Cut Panel" | "Finished Garments" | "Brand Apparel";
  technique: string;
  fabric: string;
  description: string;
  format: string;
  image: string;
  details: {
    inkType: string;
    placement: string;
    orderType: string;
    finish: string;
  };
}

export const workData: WorkItem[] = [
  {
    id: "work-1",
    title: "Heavyweight Cotton Screen Print",
    category: "Screen Printing",
    technique: "Multi-color Screen Print",
    fabric: "240 GSM French Terry Cotton",
    description: "Crisp white & dark charcoal vector print on heavyweight street clothing fabric with soft-hand finish.",
    format: "Finished T-Shirt",
    image: "/images/screen_print.png",
    details: {
      inkType: "Water-based & Plastisol Blend",
      placement: "Chest & Upper Back",
      orderType: "Bulk Production Run",
      finish: "Matte Soft-Hand"
    }
  },
  {
    id: "work-2",
    title: "Tactile 3D Puff Print Graphic",
    category: "Puff & High-Density",
    technique: "Puff Printing",
    fabric: "380 GSM Heavy Fleece Hoodie",
    description: "Elevated 3D puff print lettering with uniform foam expansion and smooth tactile surface finish.",
    format: "Hoodie Panel",
    image: "/images/puff_print.png",
    details: {
      inkType: "Expanding Puff Additive Plastisol",
      placement: "Center Chest",
      orderType: "Brand Collection Run",
      finish: "3D Raised Matte"
    }
  },
  {
    id: "work-3",
    title: "High-Density Dimensional Emblem",
    category: "Puff & High-Density",
    technique: "High-Density Silicone Print",
    fabric: "280 GSM Pique Cotton",
    description: "Sharp, 90-degree square-edged high-density print delivering structural relief and premium depth.",
    format: "Polo Chest Panel",
    image: "/images/high_density.png",
    details: {
      inkType: "High-Density Silicone Ink",
      placement: "Left Chest Emblem",
      orderType: "B2B Production",
      finish: "Crisp Square Edge 3D"
    }
  },
  {
    id: "work-4",
    title: "Unstitched Cut Panel Printing",
    category: "Cut Panel",
    technique: "Large Format Screen Print",
    fabric: "Cut Cotton Jersey Panels",
    description: "Edge-to-edge printing executed on unstitched cut fabric panels prior to garment assembly.",
    format: "Unstitched Cut Panels",
    image: "/images/cut_panel.png",
    details: {
      inkType: "Discharge / Plastisol",
      placement: "Full Front Panel",
      orderType: "Garment Job-Work",
      finish: "Flat Seam-Spanning Print"
    }
  },
  {
    id: "work-5",
    title: "Finished Hoodie Graphic Placement",
    category: "Finished Garments",
    technique: "Plastisol & Puff Hybrid",
    fabric: "Finished Oversized Hoodie",
    description: "Direct printing on ready-made fleece hoodies utilizing specialized platens for sleeve & hood prints.",
    format: "Finished Garment",
    image: "/images/home-hero-image.png",
    details: {
      inkType: "Hybrid Ink System",
      placement: "Back & Sleeve Accent",
      orderType: "Apparel Business Run",
      finish: "Textured Multi-Depth"
    }
  },
  {
    id: "work-6",
    title: "Streetwear Label Typography",
    category: "Brand Apparel",
    technique: "Screen Print & Heat Transfer",
    fabric: "100% Combed Organic Cotton",
    description: "Minimalist typography and interior neck brand label printing executed for apparel brand collection.",
    format: "Finished Apparel",
    image: "/images/screen_print.png",
    details: {
      inkType: "Tagless Soft Ink",
      placement: "Inner Neck & Left Chest",
      orderType: "Repeat Production Run",
      finish: "Ultra Soft Zero-Feel"
    }
  }
];
