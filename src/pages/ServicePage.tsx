import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { servicesData } from '../data/services';
import Header from '../components/Header';
import FooterSection from '../components/FooterSection';
import ServiceHero from '../components/ServiceHero';
import ProblemSolutionSection from '../components/ProblemSolutionSection';
import ServiceOverview from '../components/ServiceOverview';
import Benefits from '../components/Benefits';
import Deliverables from '../components/Deliverables';
import ProcessTimeline from '../components/ProcessTimeline';
import PortfolioGallery from '../components/PortfolioGallery';
import PricingSection from '../components/PricingSection';
import ServiceFAQSection from '../components/ServiceFAQSection';
import CtaSection from '../components/CtaSection';
import BackgroundGlows from '../components/BackgroundGlows';
import BackToTop from '../components/BackToTop';
import CursorGlow from '../components/CursorGlow';

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug || !servicesData[slug]) {
    return <Navigate to="/" replace />;
  }

  const service = servicesData[slug];

  useEffect(() => {
    document.title = service.seo.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', service.seo.description);
    }
  }, [service]);

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col font-sans overflow-x-hidden">
      <BackgroundGlows />
      <Header />
      
      <main className="flex-1 relative z-10">
        <ServiceHero service={service} />
        <ProblemSolutionSection service={service} />
        <ServiceOverview service={service} />
        <Benefits service={service} />
        <Deliverables service={service} />
        <ProcessTimeline service={service} />
        <PortfolioGallery service={service} />
        <PricingSection />
        <ServiceFAQSection service={service} />
        <CtaSection />
      </main>

      <FooterSection />
      <BackToTop />
      <CursorGlow />
    </div>
  );
}
