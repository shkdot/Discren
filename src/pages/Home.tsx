import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { CapabilityCarousel } from '../components/CapabilityCarousel';
import { TickerBand } from '../components/TickerBand';
import { FAQItem } from '../components/FAQItem';
import { CTASection } from '../components/CTASection';
import { capabilitiesData } from '../data/capabilitiesData';
import { processData } from '../data/processData';
import { faqData } from '../data/faqData';
import { workData } from '../data/workData';
import { ArrowRight } from 'lucide-react';
import Timeline from '../components/ui/timeline';

/** Continuous capability marquee content under the hero. */
const tickerItems = [
  'Plastisol Printing',
  'Water-Based Printing',
  'Discharge Printing',
  'High-Density HD',
  '3D Puff Printing',
  'Metallic & Foil',
  'Glow & Reflective',
  'Cut Panel Printing',
  'Finished Garments',
  'Bulk Production',
  'Jogeshwari West, Mumbai',
];

const expertiseStages = [
  { num: '01', title: 'Method selection', text: 'We match the print approach to the garment, artwork and result you want to achieve.', tags: ['Garment base', 'Artwork detail', 'Print finish'] },
  { num: '02', title: 'Practical advice', text: 'You get a clear view of what each printing route is likely to produce before the job enters production.', tags: ['Clear options', 'Expected result', 'Production fit'] },
  { num: '03', title: 'Sampling', text: 'Where a fabric or finish needs confidence, a paid sample can be reviewed before a bulk production run.', tags: ['Sample review', 'Fabric test', 'Bulk-ready'] },
  { num: '04', title: 'Process adjustment', text: 'If a result needs refining, we revisit the production variables and adjust the approach with purpose.', tags: ['Review', 'Refine', 'Repeat'] },
];

export const Home: React.FC = () => {
  const selectedFaqs = faqData.slice(0, 6);
  const featuredWork = workData.slice(0, 6);
  const [activeExpertiseStage, setActiveExpertiseStage] = useState(0);
  const expertiseStage = expertiseStages[activeExpertiseStage];


  const homeSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'DISCREN Specialized Apparel Printing Capabilities',
      description: 'The 7 specialized apparel printing techniques engineered by DISCREN for clothing brands in Mumbai.',
      itemListElement: capabilitiesData.map((cap, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: cap.title,
        description: cap.shortDesc,
        url: typeof window !== 'undefined' ? `${window.location.origin}/capabilities#${cap.id}` : `/capabilities#${cap.id}`,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: selectedFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <>
      <SEO 
        title="DISCREN — B2B Apparel Printing & Garment Job-Work in Mumbai"
        description="Premium B2B apparel printing for fashion brands, streetwear labels, and garment manufacturers in Jogeshwari West, Mumbai. 14+ years experience in Plastisol, Water-Based, Discharge, High-Density HD, 3D Puff, Metallic Foil, and Reflective Printing."
        keywords="B2B apparel printing Mumbai, garment printing Jogeshwari West, screen printing job work Mumbai, plastisol printing, puff print hoodie, high density silicone print, discharge printing cotton, cut panel printing Mumbai, bulk t-shirt printing factory"
        schema={homeSchema}
      />

      {/* Hero Section - Viewport-Fitted Desktop View (No Scrolling Required) */}
      <section className="relative bg-[#181715] text-white min-h-[calc(100vh-76px)] flex items-center py-10 lg:py-0 overflow-hidden border-b border-[#292722]">
        
        {/* Background Image positioned to highlight the right side */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/home-hero-image.webp" 
            alt="DISCREN Apparel Printing Factory Production" 
            className="w-full h-full object-cover object-right scale-105 transition-transform duration-1000 opacity-70 lg:opacity-90"
          />
          {/* Subtle gradient overlay ensuring crisp text contrast on left while leaving right side highlighted */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#181715] via-[#181715]/90 to-transparent lg:via-[#181715]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181715] via-transparent to-transparent opacity-80" />
        </div>

        {/* Hero Content */}
        <div className="container-custom relative z-10 my-auto py-4">
          <div className="max-w-[820px]">
            <div className="text-[11px] md:text-[12px] tracking-[0.15em] font-extrabold text-[#e37b4f] uppercase mb-4 md:mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#e37b4f] animate-pulse"></span>
              <span>B2B APPAREL PRINTING · JOGESHWARI WEST, MUMBAI</span>
            </div>

            <h1 className="text-[clamp(36px,5.2vw,70px)] leading-[0.95] tracking-[-0.06em] font-extrabold text-white mb-4 md:mb-6">
              Printing Built Around the <span className="text-[#e37b4f] underline decoration-[#e37b4f]/30 underline-offset-8">Garment.</span>
            </h1>

            <p className="max-w-[640px] text-[16px] md:text-[19px] leading-[1.45] text-[#d1ccc4] mb-6 md:mb-8 font-normal">
              We help clothing brands and garment businesses turn their designs into production-ready prints — choosing the right printing approach for the garment, the artwork and the result you want to achieve.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 mb-8 md:mb-10">
              <Button to="/contact" variant="white" className="px-7 py-3 shadow-lg text-[13px] md:text-[14px] min-h-[46px] md:min-h-[50px]">
                Discuss Your Requirement
              </Button>
              <Button to="/work" variant="secondary" className="px-7 py-3 border-white text-white hover:bg-white/10 text-[13px] md:text-[14px] min-h-[46px] md:min-h-[50px]">
                View Our Work
              </Button>
            </div>

            {/* Hero Meta Badges */}
            <div className="pt-4 md:pt-5 border-t border-white/15 flex flex-wrap gap-x-7 gap-y-2 text-[#d1ccc4] text-[12px] md:text-[13px] font-semibold">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#e37b4f]"></span>
                <span>14+ years of printing experience</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#e37b4f]"></span>
                <span>MOQ from ~50 pieces</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#e37b4f]"></span>
                <span>Bulk orders up to 1,000+ pieces</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capability Ticker — breaks the hero/cream transition and adds motion */}
      <TickerBand items={tickerItems} />

      {/* 01 / EXPERTISE — editorial split layout inspired by the reference */}
      <section className="py-20 md:py-28 bg-[#fbfaf6] overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[0.88fr_1.12fr] gap-12 lg:gap-20 items-center">
            <div className="max-w-[470px] lg:pl-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d9d2c6] bg-white px-4 py-2 text-[10px] uppercase tracking-[0.14em] font-extrabold text-[#756d63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e37b4f]" />
                01 / Expertise
              </div>
              <h2 className="mt-7 text-[clamp(38px,5vw,62px)] leading-[0.98] tracking-[-0.065em] font-extrabold text-[#181715]">
                More than printing. <span className="text-[#c85d2f]">The right approach.</span>
              </h2>
              <p className="mt-6 text-[16px] md:text-[18px] leading-relaxed text-[#6e6a63] max-w-[440px]">
                Every garment and design has its own requirements. We consider the fabric, artwork and intended finish before recommending the way forward.
              </p>
              <Link to="/process" className="inline-flex items-center gap-2 mt-8 pb-1 border-b border-[#c85d2f] text-[13px] uppercase tracking-[0.1em] font-extrabold text-[#181715] hover:text-[#c85d2f] transition-colors">
                <span>Explore our process</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="flex items-center gap-4 mt-12 pt-6 border-t border-[#d9d2c6]">
                <span className="text-[42px] leading-none tracking-[-0.07em] font-extrabold text-[#c85d2f]">14+</span>
                <span className="text-[11px] uppercase tracking-[0.15em] leading-relaxed font-extrabold text-[#6e6a63]">Years applying the right<br />print to the right garment</span>
              </div>
            </div>

            <div className="relative rounded-[30px] border border-[#d9d2c6] bg-[#f4f0e8] p-4 md:p-6 shadow-[0_28px_65px_rgba(45,39,30,0.10)] overflow-hidden">
              <div aria-hidden="true" className="absolute inset-0 opacity-50 [background-image:linear-gradient(#d9d2c655_1px,transparent_1px),linear-gradient(90deg,#d9d2c655_1px,transparent_1px)] [background-size:28px_28px]" />
              <div className="relative rounded-[22px] border border-[#d9d2c6] bg-[#fbfaf6] overflow-hidden">
                <div className="flex items-center justify-between border-b border-[#d9d2c6] px-5 py-4">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] font-extrabold text-[#5f5951]"><span className="w-2 h-2 rounded-full bg-[#e37b4f]" /> Production decision desk</div>
                  <span className="text-[10px] font-extrabold text-[#8a837a]">01—04</span>
                </div>

                <div className="grid md:grid-cols-[0.78fr_1.22fr] min-h-[430px]">
                  <div className="border-b md:border-b-0 md:border-r border-[#d9d2c6] p-3">
                    {expertiseStages.map((stage, index) => (
                      <button key={stage.num} type="button" onClick={() => setActiveExpertiseStage(index)} aria-current={activeExpertiseStage === index} className={`w-full flex items-center gap-3 rounded-[12px] px-3 py-3.5 text-left transition-colors ${activeExpertiseStage === index ? 'bg-[#181715] text-white' : 'text-[#625e57] hover:bg-[#e7dfd2]'}`}>
                        <span className={`text-[10px] font-extrabold tracking-[0.13em] ${activeExpertiseStage === index ? 'text-[#e37b4f]' : 'text-[#a39b90]'}`}>{stage.num}</span>
                        <span className="text-[13px] font-extrabold tracking-[-0.02em]">{stage.title}</span>
                      </button>
                    ))}
                  </div>

                  <div className="p-6 md:p-8 flex flex-col justify-between bg-[radial-gradient(circle_at_88%_8%,#f1ddc955,transparent_38%)]">
                    <div>
                      <span className="text-[11px] uppercase tracking-[0.16em] font-extrabold text-[#c85d2f]">Stage {expertiseStage.num}</span>
                      <h3 className="mt-4 text-[clamp(30px,3.2vw,42px)] leading-[0.98] tracking-[-0.055em] font-extrabold text-[#181715]">{expertiseStage.title}</h3>
                      <p className="mt-5 max-w-[390px] text-[15px] md:text-[16px] leading-relaxed text-[#6e6a63]">{expertiseStage.text}</p>
                    </div>
                    <div className="mt-9">
                      <div className="h-px bg-[#d9d2c6] mb-4" />
                      <div className="flex flex-wrap gap-2">
                        {expertiseStage.tags.map((tag) => <span key={tag} className="rounded-full border border-[#d9d2c6] bg-white px-3 py-1.5 text-[10px] uppercase tracking-[0.1em] font-extrabold text-[#625e57]">{tag}</span>)}
                      </div>
                      <div className="mt-7 flex items-center gap-3 text-[11px] uppercase tracking-[0.12em] font-extrabold text-[#625e57]"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e37b4f] text-white">✓</span> Checked before production</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 / CAPABILITIES — warm paper band with image-led cards */}
      <section className="py-20 md:py-24 lg:min-h-[calc(100vh-76px)] lg:flex lg:items-center lg:py-8 bg-[#f4f0e8] border-y border-[#d9d2c6]">
        <div className="container-custom">
          <CapabilityCarousel items={capabilitiesData} />
        </div>
      </section>

      {/* 03 / BULK PRODUCTION — capacity dashboard */}
      <section className="bg-[#e7dfd2] border-y border-[#c9c0b2] overflow-hidden">
        <div className="container-custom py-20 md:py-28">
          <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-12 lg:gap-20 items-center">
            <div className="max-w-[460px]">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#c9c0b2] bg-[#f4f0e8] px-4 py-2 text-[10px] uppercase tracking-[0.14em] font-extrabold text-[#756d63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c85d2f]" />
                03 / Bulk production
              </div>
              <h2 className="mt-7 text-[clamp(38px,4.8vw,58px)] leading-[0.98] tracking-[-0.065em] font-extrabold text-[#181715]">
                Built for the run you have in mind.
              </h2>
              <p className="mt-6 text-[16px] md:text-[18px] leading-relaxed text-[#5f5951]">
                Start with a focused garment run or scale into bulk production. We help set practical expectations around quantity, timing and the production conditions of your order.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 mt-8 pb-1 border-b border-[#c85d2f] text-[13px] uppercase tracking-[0.1em] font-extrabold text-[#181715] hover:text-[#c85d2f] transition-colors">
                <span>Discuss your production run</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="relative rounded-[30px] border border-[#c9c0b2] bg-[#fbfaf6] p-5 md:p-7 shadow-[0_24px_55px_rgba(77,61,43,0.10)]">
              <div aria-hidden="true" className="absolute top-0 right-0 h-36 w-36 rounded-bl-[100px] bg-[#ead8ca]" />
              <div className="relative flex items-start justify-between gap-5 pb-6 border-b border-[#d9d2c6]">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] font-extrabold text-[#756d63]">Production capacity</p>
                  <div className="mt-2 flex items-baseline gap-3"><span className="text-[clamp(54px,7vw,82px)] leading-none tracking-[-0.08em] font-extrabold text-[#181715]">1,000+</span><span className="text-[11px] uppercase tracking-[0.13em] font-extrabold text-[#756d63]">Pieces<br />per bulk run</span></div>
                </div>
                <span className="rounded-full bg-[#181715] px-3 py-2 text-[10px] uppercase tracking-[0.13em] font-extrabold text-white">Scale ready</span>
              </div>

              <div className="relative py-8 md:py-10">
                <div className="flex items-end gap-2 h-28 md:h-32" aria-label="Order volume scale from 50 to 1000 plus pieces">
                  {[18, 30, 46, 64, 82, 100].map((height, index) => (
                    <div key={height} className="flex-1 rounded-t-[10px] bg-[#ead8ca] overflow-hidden flex items-end">
                      <div className={`w-full rounded-t-[10px] ${index === 5 ? 'bg-[#c85d2f]' : 'bg-[#d9bca7]'}`} style={{ height: `${height}%` }} />
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex justify-between text-[10px] uppercase tracking-[0.12em] font-extrabold text-[#756d63]"><span>~50 MOQ</span><span>250</span><span>500</span><span>1,000+</span></div>
              </div>

              <div className="grid sm:grid-cols-3 gap-px rounded-[18px] overflow-hidden border border-[#d9d2c6] bg-[#d9d2c6]">
                {[
                  { value: '~50+', label: 'Approx. starting MOQ' },
                  { value: '3 days*', label: '1,000-piece capacity under suitable conditions' },
                  { value: '2–4 wks', label: 'Typical production turnaround' },
                ].map((stat) => (
                  <div key={stat.value} className="bg-[#f4f0e8] p-5">
                    <strong className="block text-[24px] leading-none tracking-[-0.05em] font-extrabold text-[#181715]">{stat.value}</strong>
                    <span className="block mt-2 text-[11px] leading-snug font-medium text-[#6e6a63]">{stat.label}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-[11px] leading-relaxed text-[#756d63]">*Capacity and turnaround depend on the production conditions, artwork and requirements of each order.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 04 / PROCESS — Horizontal sticky-scroll timeline */}
      <section className="bg-[#fbfaf6] border-t border-[#d9d2c6]">
        {/* Header sits above the sticky scroll zone in normal flow */}
        <div className="container-custom pt-20 md:pt-28 pb-10 md:pb-14">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c85d2f]">04 / PROCESS</p>
            <h2 className="mt-4 text-[clamp(30px,4.2vw,46px)] leading-[1.08] tracking-[-0.03em] font-extrabold text-[#181715]">
              What you get at each stage
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-[#6e6a63] max-w-[560px] mx-auto">
              Scroll through the production journey — each milestone shows exactly what happens and what our team handles.
            </p>
          </div>
        </div>

        <Timeline
          title="Production Journey"
          periodLabel="Stage 01 – 07"
          backgroundColor="#fbfaf6"
          textColor="#181715"
          mutedTextColor="#6e6a63"
          activeColor="#c85d2f"
          imageUrl="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80"
          imageAlt="DISCREN screen printing studio — garments on the press table"
          duration={1.4}
          topItems={[
            { id: "stage-01", year: "Stage 01", month: "January", content: "Requirement & Consultation — share artwork, garment details, quantity and print requirements." },
            { id: "stage-02", year: "Stage 02", month: "March", content: "Artwork & Garment Review — technical assessment of artwork, colour separation and fabric behaviour." },
            { id: "stage-03", year: "Stage 03", month: "May", content: "Method & Ink Selection — choosing the right printing approach for your garment, artwork and result." },
            { id: "stage-04", year: "Stage 04", month: "July", content: "Sample & Testing — paid sample production for client review before bulk production begins." },
          ]}
          bottomItems={[
            { id: "stage-05", year: "Stage 05", month: "February", content: "Bulk Production — executing bulk printing to approved sample standards with batch consistency." },
            { id: "stage-06", year: "Stage 06", month: "April", content: "Quality Check — continuous inspection during production to maintain visual and tactile consistency." },
            { id: "stage-07", year: "Stage 07", month: "June", content: "Handover & Dispatch — complete order handover, transport coordination or factory collection." },
          ]}
        />
      </section>

      {/* 05 / OUR WORK — editorial dark gallery */}
      <section className="relative py-20 md:py-28 bg-[#1b1a18] text-white overflow-hidden">
        <div aria-hidden="true" className="absolute -right-5 top-[28%] text-[clamp(90px,17vw,250px)] leading-none tracking-[-0.1em] font-extrabold text-white/[0.025] whitespace-nowrap select-none">
          PRINT / PRODUCE
        </div>
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading
              dark
              kicker="05 / OUR WORK"
              title="Work That Speaks for Itself."
              lead="A visual selection of printing work across different techniques, garment formats and production requirements."
              className="mb-0"
            />
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-[14px] font-extrabold text-[#e37b4f] hover:text-white transition-colors shrink-0"
            >
              <span>View Portfolio Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative grid lg:grid-cols-12 gap-4 lg:gap-5">
            <Link to="/work" className="group relative lg:col-span-7 min-h-[420px] lg:min-h-[575px] overflow-hidden rounded-[28px] border border-white/10 bg-[#242220]">
              <img src={featuredWork[0].image} alt={featuredWork[0].title} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-80 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181715] via-[#181715]/25 to-transparent" />
              <div className="absolute top-5 left-5 flex items-center gap-2 rounded-full border border-white/20 bg-[#181715]/55 backdrop-blur-md px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] font-extrabold text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e37b4f]" /> Featured production
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 lg:p-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur text-[10px] uppercase tracking-[0.12em] font-extrabold text-[#f4f0e8]">{featuredWork[0].technique}</span>
                  <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur text-[10px] uppercase tracking-[0.12em] font-extrabold text-[#f4f0e8]">{featuredWork[0].fabric}</span>
                </div>
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <h3 className="text-[clamp(26px,3.3vw,44px)] leading-[0.98] tracking-[-0.055em] font-extrabold text-white">{featuredWork[0].title}</h3>
                    <p className="hidden md:block max-w-[520px] mt-3 text-[14px] leading-relaxed text-[#d5d0c8]">{featuredWork[0].description}</p>
                  </div>
                  <span className="w-12 h-12 rounded-full bg-[#e37b4f] grid place-items-center shrink-0 text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"><ArrowRight className="w-5 h-5" /></span>
                </div>
              </div>
            </Link>

            <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-5">
              {featuredWork.slice(1, 3).map((work, index) => (
                <Link key={work.id} to="/work" className="group relative min-h-[240px] lg:min-h-0 lg:h-[278px] overflow-hidden rounded-[24px] border border-white/10 bg-[#242220]">
                  <img src={work.image} alt={work.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181715] via-[#181715]/20 to-transparent" />
                  <div className="absolute top-5 right-5 text-[10px] font-extrabold tracking-[0.14em] text-[#e37b4f]">0{index + 2}</div>
                  <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6">
                    <span className="text-[10px] uppercase tracking-[0.13em] font-extrabold text-[#e37b4f]">{work.technique}</span>
                    <h3 className="mt-1 text-[20px] lg:text-[23px] leading-tight tracking-[-0.04em] font-extrabold text-white">{work.title}</h3>
                  </div>
                </Link>
              ))}
            </div>

            <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-5 mt-1">
              {featuredWork.slice(3).map((work, index) => (
                <Link key={work.id} to="/work" className="group flex items-center gap-4 overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.04] p-3 hover:border-[#e37b4f]/70 hover:bg-white/[0.07] transition-colors">
                  <img src={work.image} alt="" loading="lazy" className="w-20 h-20 md:w-24 md:h-24 rounded-[12px] object-cover opacity-75 group-hover:opacity-100 transition-opacity" />
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase tracking-[0.13em] font-extrabold text-[#e37b4f]">0{index + 4} / {work.format}</span>
                    <h3 className="mt-1 text-[16px] leading-tight tracking-[-0.03em] font-extrabold text-white">{work.title}</h3>
                    <p className="mt-1 text-[12px] text-[#a9a49b] truncate">{work.fabric}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 06 / WORKING TOGETHER — cream, sticky heading beside stacked spec panels */}
      <section className="py-20 md:py-28 bg-[#f4f0e8]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                kicker="06 / WORKING TOGETHER"
                title="Straightforward Printing for Apparel Businesses."
                lead="Practical information, clear expectations and a process designed around bulk apparel production."
              />
              <Button to="/contact" variant="primary" className="gap-2">
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="space-y-4">
              {/* Production Details — light panel */}
              <div className="bg-[#fbfaf6] border border-[#d9d2c6] rounded-[22px] p-7 md:p-9">
                <h3 className="text-[22px] tracking-[-0.04em] font-extrabold text-[#181715] mb-5">
                  Production Details
                </h3>
                <div className="text-[14px]">
                  {[
                    ['MOQ', 'Approx. 50 pieces'],
                    ['Mixed sizes', 'Yes, when properly sorted'],
                    ['Sampling', 'Paid sampling available'],
                    ['Pricing', 'Can reduce with quantity'],
                    ['Turnaround', 'Approx. 2–4 weeks'],
                  ].map(([label, value]) => (
                    <div key={label} className="py-3 border-t border-[#d9d2c6] flex justify-between gap-6">
                      <span className="font-semibold text-[#181715]">{label}</span>
                      <span className="text-[#6e6a63] text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Commercial Terms — inverted panel, keeps the two panels visually distinct */}
              <div className="bg-[#1b1a18] text-white rounded-[22px] p-7 md:p-9">
                <h3 className="text-[22px] tracking-[-0.04em] font-extrabold mb-5">
                  Commercial Terms
                </h3>
                <div className="text-[14px]">
                  {[
                    ['Payment', '50% advance'],
                    ['Balance', '50% before dispatch'],
                    ['Location', 'Jogeshwari West, Mumbai'],
                    ['Transport', 'Varies by customer/order'],
                    ['Bulk capacity', 'Up to 1,000+ pieces'],
                  ].map(([label, value]) => (
                    <div key={label} className="py-3 border-t border-white/10 flex justify-between gap-6">
                      <span className="font-semibold text-white">{label}</span>
                      <span className="text-[#a9a49b] text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — sand band, two-column with a sticky heading */}
      <section className="py-20 md:py-28 bg-[#e7dfd2] border-t border-[#c9c0b2]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-10 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <div className="text-[11px] tracking-[0.14em] uppercase text-[#c85d2f] font-extrabold mb-3">
                FAQ
              </div>
              <h2 className="text-[clamp(30px,4.2vw,46px)] leading-[1.02] tracking-[-0.055em] font-extrabold text-[#181715] mb-5 max-w-[420px]">
                Frequently Asked Questions
              </h2>
              <p className="text-[16px] text-[#5f5951] leading-relaxed max-w-[400px] mb-6">
                The questions apparel businesses ask us most often about quantities, methods and sampling.
              </p>
              <Link
                to="/faq"
                className="inline-flex items-center gap-2 text-[14px] font-extrabold text-[#181715] hover:text-[#c85d2f] transition-colors"
              >
                <span>View All Questions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Accordion on a raised paper panel */}
            <div className="bg-[#fbfaf6] border border-[#c9c0b2] rounded-[22px] px-6 md:px-8">
              {selectedFaqs.map((faq, idx) => (
                <FAQItem key={faq.id} item={faq} defaultOpen={idx === 0} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <CTASection />
    </>
  );
};
