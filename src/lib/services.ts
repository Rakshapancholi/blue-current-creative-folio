import digital from "@/assets/digital.jpg";
import serviceSocial from "@/assets/service-social.jpg";
import serviceSeo from "@/assets/service-seo.jpg";
import servicePaid from "@/assets/service-paid.jpg";
import serviceContent from "@/assets/service-content.jpg";
import workAllison from "@/assets/work/allison-homes.png.asset.json";

export const services = [
  { slug: "social-media-organic-marketing", title: "Social Media & Organic Marketing", line: "Build an online presence people want to engage with.", image: serviceSocial, alt: "Filming social video content on a phone gimbal", items: ["Social media management", "Content planning and creation", "Community management", "TikTok", "LinkedIn ghostwriting", "Email marketing"], cta: "Explore social media services" },
  { slug: "seo", title: "Search Engine Optimisation", line: "Help the right people discover your business.", image: serviceSeo, alt: "Marketer reviewing search performance data", items: ["SEO", "Local and international SEO", "Ecommerce SEO", "Technical and on-page SEO", "Link building and digital PR"], cta: "Explore SEO" },
  { slug: "paid-advertising", title: "Paid Advertising", line: "Put your business in front of the right audience.", image: servicePaid, alt: "Team reviewing ad campaign dashboards", items: ["Google Ads", "Meta Ads", "Amazon Ads", "LinkedIn Ads", "PPC management"], cta: "Explore paid advertising" },
  { slug: "website-app-development", title: "Website & App Development", line: "Create digital experiences that work as well as they look.", image: digital, alt: "Website design shown on laptop and phone", items: ["Website design and development", "WordPress and Wix", "UI/UX design", "App design and development", "Website maintenance and migration"], cta: "Explore web services" },
  { slug: "branding-design", title: "Branding & Design", line: "Give your brand a recognisable visual identity.", image: workAllison.url, alt: "Brand identity work", items: ["Logo design", "Brand identity", "Graphic design", "Social media graphics", "Email design"], cta: "Explore design services" },
  { slug: "content-creation", title: "Content Creation", line: "Give your brand something worth looking at.", image: serviceContent, alt: "Photographer on a product photoshoot set", items: ["Photography", "Videography", "Copywriting", "Blog content"], cta: "Explore content creation" },
];
