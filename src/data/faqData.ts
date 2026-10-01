export interface FAQItemData {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Capabilities & Fabric" | "Orders & Quantities" | "Sampling & Process" | "Location & Contact";
}

export const faqData: FAQItemData[] = [
  {
    id: "faq-1",
    question: "What type of customers does DISCREN work with?",
    answer: "DISCREN is a dedicated B2B apparel printing partner. We work primarily with clothing brands, garment manufacturers, apparel businesses, independent label owners, and businesses requiring bulk garment printing job-work.",
    category: "General"
  },
  {
    id: "faq-2",
    question: "What order quantities do you handle?",
    answer: "Our minimum order quantity (MOQ) starts at approximately 50 pieces. We handle small batch brand production runs through to bulk order quantities up to 1,000+ pieces.",
    category: "Orders & Quantities"
  },
  {
    id: "faq-3",
    question: "Which printing methods do you offer?",
    answer: "We specialize in Screen Printing (plastisol, water-based, discharge), DTF (Direct-to-Film) Printing, 3D Puff Printing, High-Density silicone prints, Cut Panel Printing (unstitched fabric), and Finished Garment Printing.",
    category: "Capabilities & Fabric"
  },
  {
    id: "faq-4",
    question: "Can you recommend the appropriate printing method for my design?",
    answer: "Yes. If you are unsure which method is best suited for your artwork and fabric, our team reviews your design, fabric composition, and target finish to recommend the optimal printing approach.",
    category: "Sampling & Process"
  },
  {
    id: "faq-5",
    question: "Can you print on different fabric compositions?",
    answer: "Yes. We regularly print on 100% cotton, French terry, fleece, cotton-poly blends, pique knit, and polyester blends. Different fabrics require specific ink formulations and flash temperatures which we adjust accordingly.",
    category: "Capabilities & Fabric"
  },
  {
    id: "faq-6",
    question: "Do you provide physical samples before bulk production?",
    answer: "Yes. Paid sampling is available so you can inspect the actual print, feel, color accuracy, and wash durability on your garment or fabric panel before approving full bulk production.",
    category: "Sampling & Process"
  },
  {
    id: "faq-7",
    question: "Can you test print on a new or specialized fabric?",
    answer: "Yes. If you are working with an uncommon fabric blend or new mill swatch, we can conduct sample tests to observe ink adhesion, cure behavior, and color fastness before proceeding.",
    category: "Sampling & Process"
  },
  {
    id: "faq-8",
    question: "Do customers provide the garments or cut panels?",
    answer: "Yes. As a specialized B2B printing job-work partner, clients and clothing manufacturers typically supply their blank garments or unstitched cut panels to our factory unit in Mumbai.",
    category: "General"
  },
  {
    id: "faq-9",
    question: "Can you handle high-volume bulk production runs?",
    answer: "Yes. Under suitable production conditions and artwork preparation, our facility handles bulk production runs with capacity up to 1,000+ pieces per batch.",
    category: "Orders & Quantities"
  },
  {
    id: "faq-10",
    question: "Where is DISCREN located?",
    answer: "DISCREN is located in Jogeshwari West, Mumbai, Maharashtra, India — situated conveniently for garment hubs and clothing manufacturers across Mumbai.",
    category: "Location & Contact"
  },
  {
    id: "faq-11",
    question: "How can I request a quote or discuss my requirement?",
    answer: "You can submit an inquiry through our website form on the Contact page, or reach out via WhatsApp / Email with your artwork, garment type, estimated quantity, and target delivery timeframe.",
    category: "Location & Contact"
  }
];
