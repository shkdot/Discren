export interface WorkItem {
  id: string;
  title: string;
  category: 'Plastisol Printing' | 'Water-Based Printing' | 'Discharge Printing' | 'High-Density Printing' | 'Puff Printing' | 'Metallic / Foil Printing' | 'Glow / Reflective Printing';
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

/** One gallery card per printing method, paired with its matching production image. */
export const workData: WorkItem[] = [
  {
    id: 'plastisol-print',
    title: 'Plastisol Screen Print',
    category: 'Plastisol Printing',
    technique: 'Multi-Colour Plastisol Screen Print',
    fabric: 'Heavyweight Cotton T-Shirt',
    description: 'A vivid, opaque screen print built for sharp artwork, reliable colour and long-wearing bulk apparel production.',
    format: 'Finished Garment',
    image: '/images/home-plastisole.webp',
    details: {
      inkType: 'High-Opacity Plastisol',
      placement: 'Front Chest Print',
      orderType: 'Bulk Production Run',
      finish: 'Durable Matte Ink Layer',
    },
  },
  {
    id: 'water-based-print',
    title: 'Water-Based Soft-Hand Print',
    category: 'Water-Based Printing',
    technique: 'Water-Based Pigment Print',
    fabric: 'Combed Cotton Jersey',
    description: 'Lightweight artwork absorbed into the fabric for a breathable, soft-touch result suited to premium apparel.',
    format: 'Finished T-Shirt',
    image: '/images/home-water-based.webp',
    details: {
      inkType: 'Water-Based Pigment Ink',
      placement: 'Full Front Graphic',
      orderType: 'Brand Collection Run',
      finish: 'Ultra-Soft Hand Feel',
    },
  },
  {
    id: 'discharge-print',
    title: 'Discharge Print on Dark Cotton',
    category: 'Discharge Printing',
    technique: 'Discharge & Water-Based Print',
    fabric: 'Reactive-Dyed Cotton',
    description: 'A soft dark-garment print that removes the base dye before adding fresh colour, avoiding a heavy ink feel.',
    format: 'Dark Apparel Panel',
    image: '/images/home-discharge.webp',
    details: {
      inkType: 'Discharge Base & Pigment',
      placement: 'Oversized Front Print',
      orderType: 'Streetwear Production',
      finish: 'Soft, Low-Weight Print',
    },
  },
  {
    id: 'high-density-print',
    title: 'High-Density 3D Emblem',
    category: 'High-Density Printing',
    technique: 'High-Density Silicone Print',
    fabric: 'Dense Pique Cotton',
    description: 'Structured dimensional artwork with crisp square edges, designed to give logos a precise elevated profile.',
    format: 'Polo Chest Panel',
    image: '/images/home-hd.webp',
    details: {
      inkType: 'High-Density Silicone Ink',
      placement: 'Left Chest Emblem',
      orderType: 'B2B Production',
      finish: 'Crisp Square-Edge Relief',
    },
  },
  {
    id: 'puff-print',
    title: 'Tactile Puff Print Graphic',
    category: 'Puff Printing',
    technique: 'Expanding Puff Print',
    fabric: 'Heavy Fleece Hoodie',
    description: 'Bold typography and graphics with a rounded 3D surface created through controlled heat expansion.',
    format: 'Hoodie Panel',
    image: '/images/home-puff.webp',
    details: {
      inkType: 'Puff Additive Plastisol',
      placement: 'Centre Chest Graphic',
      orderType: 'Brand Collection Run',
      finish: 'Raised Matte Surface',
    },
  },
  {
    id: 'metallic-foil-print',
    title: 'Metallic Foil Accent Print',
    category: 'Metallic / Foil Printing',
    technique: 'Metallic Ink & Foil Transfer',
    fabric: 'Cotton Blend Apparel',
    description: 'Reflective metallic detailing that gives logos and limited-edition graphics a high-lustre premium finish.',
    format: 'Statement Graphic',
    image: '/images/home-metallic-foil.webp',
    details: {
      inkType: 'Metallic Ink / Heat Foil',
      placement: 'Chest Logo Accent',
      orderType: 'Limited Collection',
      finish: 'Reflective High-Lustre',
    },
  },
  {
    id: 'glow-reflective-print',
    title: 'Glow & Reflective Graphic',
    category: 'Glow / Reflective Printing',
    technique: 'Photo-Luminescent / Reflective Print',
    fabric: 'Technical Cotton Blend',
    description: 'A photo-active print treatment that glows after charging in light or flashes when hit by direct illumination.',
    format: 'Techwear Graphic',
    image: '/images/home-glow-in-the-dark.webp',
    details: {
      inkType: 'Glow Pigment / Glass-Bead Ink',
      placement: 'Back & Sleeve Detail',
      orderType: 'Specialty Production',
      finish: 'Photo-Active Surface',
    },
  },
];
