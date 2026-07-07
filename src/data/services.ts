import { PenTool, Instagram, Target, Monitor, Video, Store, LucideIcon } from 'lucide-react';

export interface ServiceData {
  slug: string;
  title: string;
  subtitle: string;
  heroTitle: string;
  description: string;
  category: string;
  icon: LucideIcon;
  heroImage: string;
  overview: string;
  benefits: string[];
  deliverables: string[];
  portfolio: { title: string; image: string; category: string }[];
  process: { step: string; title: string; description: string }[];
  packages: { name: string; price: string; features: string[] }[];
  faq: { question: string; answer: string }[];
  seo: { title: string; description: string };
  color: string;
}

export const servicesData: Record<string, ServiceData> = {
  'brand-identity': {
    slug: 'brand-identity',
    title: 'Brand Identity',
    subtitle: 'STRATEGY & DESIGN',
    heroTitle: 'Build a Memorable Brand',
    description: 'Build memorable brands with premium logo design, visual identity, brand strategy, and complete brand systems.',
    category: 'Design',
    icon: PenTool,
    color: '#2563FF',
    heroImage: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200&auto=format&fit=crop',
    overview: 'A strong brand identity is more than just a logo. We create comprehensive visual systems that communicate your values, resonate with your target audience, and differentiate you from the competition.',
    benefits: [
      'Establish trust and credibility instantly.',
      'Differentiate your business in a crowded market.',
      'Ensure consistency across all touchpoints.',
      'Attract your ideal customers effortlessly.'
    ],
    deliverables: [
      'Logo Design & Variations',
      'Color Palette & Typography',
      'Brand Guidelines Document',
      'Social Media Kit',
      'Stationery & Business Cards'
    ],
    portfolio: [
      { title: 'TechNova Identity', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80', category: 'Tech' },
      { title: 'Lumina Skincare', image: 'https://images.unsplash.com/photo-1620612196025-a1c1d88a2e58?w=600&q=80', category: 'Beauty' }
    ],
    process: [
      { step: '01', title: 'Discovery & Strategy', description: 'Understanding your business, target audience, and market positioning.' },
      { step: '02', title: 'Concept Creation', description: 'Developing initial logo concepts and visual directions.' },
      { step: '03', title: 'Refinement', description: 'Selecting the best concept and refining it based on feedback.' },
      { step: '04', title: 'System Build', description: 'Creating the full visual identity system and guidelines.' }
    ],
    packages: [
      { name: 'Startup', price: '$2,500', features: ['Primary Logo', 'Color Palette', 'Typography', 'Basic Guidelines'] },
      { name: 'Pro', price: '$5,000', features: ['Everything in Startup', 'Logo Variations', 'Social Media Kit', 'Stationery Design'] }
    ],
    faq: [
      { question: 'How long does the branding process take?', answer: 'Typically 4-6 weeks depending on the package and revisions.' },
      { question: 'Do I get source files?', answer: 'Yes, we provide all final assets in vector formats.' }
    ],
    seo: { title: 'Premium Brand Identity Services | Your Agency', description: 'Elevate your business with our premium brand identity design services.' }
  },
  'social-media-management': {
    slug: 'social-media-management',
    title: 'Social Media Management',
    subtitle: 'ORGANIC GROWTH',
    heroTitle: 'Dominate Your Social Presence',
    description: 'Premium content strategy, content creation, account management, and consistent brand growth across every platform.',
    category: 'Marketing',
    icon: Instagram,
    color: '#A855F7',
    heroImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop',
    overview: 'Engage your audience and build a loyal community with strategic, high-quality social media content tailored to your brand voice.',
    benefits: [
      'Increase brand awareness organically.',
      'Build a loyal and engaged community.',
      'Drive traffic to your website.',
      'Improve customer satisfaction through social listening.'
    ],
    deliverables: [
      'Custom Content Strategy',
      'Content Calendar & Planning',
      'High-Quality Graphics & Copy',
      'Community Management',
      'Monthly Analytics Reports'
    ],
    portfolio: [
      { title: 'Fitness App Launch', image: 'https://images.unsplash.com/photo-1558507652-2d9626c4e67a?w=600&q=80', category: 'Health' },
      { title: 'Cafe Organic Growth', image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80', category: 'Food & Beverage' }
    ],
    process: [
      { step: '01', title: 'Audit & Strategy', description: 'Reviewing current presence and developing a tailored strategy.' },
      { step: '02', title: 'Content Creation', description: 'Designing graphics, writing copy, and planning the calendar.' },
      { step: '03', title: 'Publishing & Engagement', description: 'Scheduling posts and interacting with your community.' },
      { step: '04', title: 'Analysis & Optimization', description: 'Reviewing performance data to refine our approach.' }
    ],
    packages: [
      { name: 'Essential', price: '$1,200/mo', features: ['12 Posts per Month', 'Basic Community Management', 'Monthly Report'] },
      { name: 'Growth', price: '$2,500/mo', features: ['20 Posts per Month', 'Stories & Reels', 'Proactive Engagement', 'Strategy Calls'] }
    ],
    faq: [
      { question: 'Which platforms do you manage?', answer: 'We specialize in Instagram, LinkedIn, TikTok, and Facebook.' },
      { question: 'Do you create videos/reels?', answer: 'Yes, short-form video is included in our Growth and Scale packages.' }
    ],
    seo: { title: 'Social Media Management Services | Your Agency', description: 'Grow your brand online with expert social media management.' }
  },
  'performance-marketing': {
    slug: 'performance-marketing',
    title: 'Performance Marketing',
    subtitle: 'PAID MARKETING',
    heroTitle: 'Data-Driven ROI & Growth',
    description: 'ROI-driven Meta Ads and Google Ads campaigns that generate qualified leads, sales, and measurable business growth.',
    category: 'Advertising',
    icon: Target,
    color: '#A855F7',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    overview: 'Stop guessing with your ad spend. We create targeted, data-driven ad campaigns designed to maximize ROI and scale your revenue predictably.',
    benefits: [
      'Immediate visibility and traffic.',
      'Highly targeted audience reach.',
      'Measurable return on investment.',
      'Scalable growth strategies.'
    ],
    deliverables: [
      'Campaign Strategy & Setup',
      'Ad Copy & Creative Production',
      'Audience Targeting & Retargeting',
      'A/B Testing & Optimization',
      'Custom Dashboard & Reporting'
    ],
    portfolio: [
      { title: 'E-commerce Scaling', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80', category: 'Retail' },
      { title: 'B2B Lead Gen', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80', category: 'SaaS' }
    ],
    process: [
      { step: '01', title: 'Research & Strategy', description: 'Analyzing competitors and defining the target audience.' },
      { step: '02', title: 'Funnel Build', description: 'Setting up landing pages, tracking, and ad creatives.' },
      { step: '03', title: 'Launch & Test', description: 'Deploying initial campaigns to gather data and find winners.' },
      { step: '04', title: 'Scale & Optimize', description: 'Increasing budget on winning ads while cutting underperformers.' }
    ],
    packages: [
      { name: 'Starter Ads', price: '$1,500/mo', features: ['Single Platform (Meta or Google)', 'Up to $5k Ad Spend Management', 'Monthly Reporting'] },
      { name: 'Scale Ads', price: '$3,000/mo', features: ['Multi-Platform', 'Advanced Retargeting', 'Custom Landing Pages', 'Weekly Reporting'] }
    ],
    faq: [
      { question: 'What is a good starting ad budget?', answer: 'We recommend at least $1,500/month in ad spend to gather meaningful data.' },
      { question: 'How quickly will I see results?', answer: 'While some campaigns generate immediate results, optimization typically takes 2-4 weeks.' }
    ],
    seo: { title: 'Performance Marketing Agency | Your Agency', description: 'Maximize your ROI with expert Google and Meta Ads management.' }
  },
  'website-development': {
    slug: 'website-development',
    title: 'Website Design & Development',
    subtitle: 'FULLSTACK WEB',
    heroTitle: 'High-Converting Web Experiences',
    description: 'Modern websites designed to convert visitors into customers with premium UI, fast performance, and responsive experiences.',
    category: 'Development',
    icon: Monitor,
    color: '#00D9FF',
    heroImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    overview: 'Your website is your digital storefront. We build lightning-fast, aesthetically stunning websites focused on user experience and conversion optimization.',
    benefits: [
      'Leave a lasting first impression.',
      'Improve conversion rates and sales.',
      'Rank higher on search engines (SEO).',
      'Provide a seamless mobile experience.'
    ],
    deliverables: [
      'Custom UI/UX Design',
      'Responsive Web Development',
      'CMS Integration',
      'Speed Optimization',
      'Basic On-Page SEO'
    ],
    portfolio: [
      { title: 'Fintech Platform', image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=600&q=80', category: 'Finance' },
      { title: 'Luxury Real Estate', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80', category: 'Real Estate' }
    ],
    process: [
      { step: '01', title: 'Wireframing', description: 'Mapping out the user journey and site structure.' },
      { step: '02', title: 'UI Design', description: 'Creating high-fidelity mockups of the final design.' },
      { step: '03', title: 'Development', description: 'Coding the site using modern frameworks.' },
      { step: '04', title: 'Testing & Launch', description: 'Ensuring cross-browser compatibility and speed.' }
    ],
    packages: [
      { name: 'Landing Page', price: '$2,000', features: ['Single Page Design', 'Lead Capture Form', 'Mobile Responsive', 'Fast Hosting'] },
      { name: 'Corporate Site', price: '$5,000', features: ['Up to 10 Pages', 'CMS Setup', 'Advanced Animations', 'SEO Optimized'] }
    ],
    faq: [
      { question: 'What platforms do you use?', answer: 'We specialize in React, Next.js, and modern headless CMS solutions.' },
      { question: 'Will I be able to edit the content?', answer: 'Yes, we integrate easy-to-use content management systems.' }
    ],
    seo: { title: 'Custom Web Design & Development | Your Agency', description: 'Get a premium, high-converting website for your business.' }
  },
  'video-graphics': {
    slug: 'video-graphics',
    title: 'Creative Content',
    subtitle: 'VIDEO & GRAPHICS',
    heroTitle: 'Visuals That Stop the Scroll',
    description: 'High-quality graphics, reels, videos, ad creatives, motion graphics, and storytelling that elevates your brand.',
    category: 'Creative',
    icon: Video,
    color: '#FF2D8D',
    heroImage: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1200&auto=format&fit=crop',
    overview: 'In a visual-first world, your content needs to stand out. Our creative team produces high-end video and graphic assets that capture attention and tell your story effectively.',
    benefits: [
      'Higher engagement rates on social media.',
      'Better performance for paid ad campaigns.',
      'Professional brand perception.',
      'Complex ideas explained simply.'
    ],
    deliverables: [
      'Short-Form Video (Reels/TikTok)',
      'Motion Graphics & Animation',
      'Ad Creatives & Banners',
      'Brand Photography',
      'Infographics & Pitch Decks'
    ],
    portfolio: [
      { title: 'App Promo Video', image: 'https://images.unsplash.com/photo-1574717024453-354056fad6b0?w=600&q=80', category: 'Tech' },
      { title: 'Product Launch Graphics', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80', category: 'E-commerce' }
    ],
    process: [
      { step: '01', title: 'Creative Brief', description: 'Defining the goals, tone, and format of the content.' },
      { step: '02', title: 'Storyboarding', description: 'Planning the visual narrative before production.' },
      { step: '03', title: 'Production', description: 'Filming, animating, or designing the assets.' },
      { step: '04', title: 'Post-Production', description: 'Editing, color grading, and final delivery.' }
    ],
    packages: [
      { name: 'Social Pack', price: '$1,500', features: ['4 Short-form Videos', '10 Static Graphics', 'Custom Templates'] },
      { name: 'Campaign Pack', price: '$4,000', features: ['1 Brand Anthem Video', 'Ad Variations', 'Motion Graphics Support'] }
    ],
    faq: [
      { question: 'Do you offer on-location shoots?', answer: 'Yes, we offer on-location production services depending on your region.' },
      { question: 'Can you edit existing footage?', answer: 'Absolutely. We can take your raw footage and turn it into polished content.' }
    ],
    seo: { title: 'Creative Video & Graphic Design | Your Agency', description: 'Engaging video production and graphic design services.' }
  },
  'google-business-profile': {
    slug: 'google-business-profile',
    title: 'Google Business Profile',
    subtitle: 'LOCAL SEARCH SEO',
    heroTitle: 'Dominate Local Search',
    description: 'Optimize your Google presence with complete GBP setup, local SEO, review management, and profile optimization.',
    category: 'SEO',
    icon: Store,
    color: '#3B82F6',
    heroImage: 'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1200&auto=format&fit=crop',
    overview: 'Ensure customers find you when they search locally. We optimize your Google Business Profile to rank higher in the Maps pack and drive foot traffic or local leads.',
    benefits: [
      'Appear at the top of local search results.',
      'Increase trust with managed reviews.',
      'Drive more calls and website visits.',
      'Stand out from local competitors.'
    ],
    deliverables: [
      'Profile Setup & Verification',
      'Keyword Optimization',
      'Review Management Strategy',
      'Weekly Post Updates',
      'Local Citations Building'
    ],
    portfolio: [
      { title: 'Local Dental Clinic', image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80', category: 'Healthcare' },
      { title: 'Boutique Restaurant', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80', category: 'Hospitality' }
    ],
    process: [
      { step: '01', title: 'Audit', description: 'Evaluating your current local presence and competitors.' },
      { step: '02', title: 'Optimization', description: 'Updating categories, descriptions, and media.' },
      { step: '03', title: 'Citation Building', description: 'Ensuring your business info is consistent across the web.' },
      { step: '04', title: 'Ongoing Management', description: 'Posting updates and managing customer reviews.' }
    ],
    packages: [
      { name: 'Setup & Optimize', price: '$500', features: ['Full Profile Audit', 'Keyword Optimization', 'Photo Uploads', '1-Month Strategy'] },
      { name: 'Ongoing Local SEO', price: '$800/mo', features: ['Weekly Posts', 'Review Responses', 'Citation Building', 'Monthly Reports'] }
    ],
    faq: [
      { question: 'Why is Google Business Profile important?', answer: 'It is the primary way local customers find and contact your business on Google Search and Maps.' },
      { question: 'Can you help remove negative reviews?', answer: 'We cannot remove legitimate reviews, but we provide strategies to mitigate them and generate positive ones.' }
    ],
    seo: { title: 'Google Business Profile Optimization | Your Agency', description: 'Rank higher in local search with our GBP management services.' }
  }
};
