
import MobileImage3 from "../images/davion.png";
import MobileImage4 from "../images/image-3.png";
import MobileImage2 from "../images/image-2.png";
import MobileImage1 from "../images/image-1.png";
import MobileImage5 from "../images/image-5.png";
import MobileImage6 from "../images/image-6.jpg";
import MobileImage7 from "../images/image-7.webp";
import MobileImage8 from "../images/image8.jpg";

export const projectsData = [
  {
    id: 1,
    title: "Shop With Davion",
    category: "Ecommerce PWA Application",
    img: MobileImage3,
    description:
      "Shop With Davion is a Progressive Web App for a fashion e-commerce brand. Built with Laravel and Vue.js, it offers offline capability and real-time admin management.",
    role: "Full Stack Developer",
    duration: "1 month",
    technologies: ["Laravel", "Vue.js", "PWA", "MySQL", "Tailwind CSS"],
    features: [
      "Offline shopping capability with service workers",
      "Real-time inventory management dashboard",
      "Secure payment integration with Stripe",
      "Responsive design for all devices",
      "Push notifications for order updates",
    ],
    link: "https://shopwithdavion.com",
  },
  {
  "id": 2,
  "title": "MovieAI – AI Movie Recommendation Platform",
  "category": "Web Application",
  "img": MobileImage1,
  "description": "An AI-powered web application that lets users discover movies by describing their mood or preferences in natural language, using advanced vector search and NLP techniques.",
  "role": "Front-End & Back-End Developer",
  "duration": "2 weeks",
  "technologies": ["Next.js", "TypeScript", "Node.js", "MongoDB", "Vector DB"],
  "features": [
    "Natural-language movie search: users describe what they’re in the mood for and get instant recommendations",
    "AI-powered matching using vector search and NLP to align user intent with film metadata",
    "Browsing across a vast movie library spanning genres, eras, and styles",
    "Responsive web interface built with modern React/Next.js architecture",
    "Contact & feedback system embedded for user support and business inquiries"
  ],
  "link": "https://movie-recommendation-nextjs.vercel.app/"
},

{
  "id": 3,
  "title": "Esse Mobility – Green Mobility Platform",
  "category": "Sustainable Mobility & EV Services",
  "img": MobileImage4,
  "description": "A solar-powered, all-electric mobility ecosystem offering ride-hailing, leasing and charging infrastructure services to accelerate sustainable urban transport.",
  "role": "Full-Stack Developer",
  "duration": "6 months",
  "technologies": ["Laravel", "Vue.js", "MySQL", "AWS", "REST API"],
  "features": [
    "100 % solar-powered vehicle fleet (Green Wheels) enabling ride-hailing with no surge pricing, no service denials, and zero emissions", 
    "Leasing programme (Esse Guarantee) where car owners buy solar-powered electric vehicles and lease them for fixed returns over 5-years", 
    "Deployment of Solar Charge Stations with zero installation cost, low maintenance and partner-earning model for hosts", 
    "In-car advertisement network (Esse Media) leveraging captive ride-share audience with geo-targeted, interactive displays and real-time analytics", 
    "Dashboard and analytics system for fleet performance, leasing returns, charging station status and advertiser engagement"
  ],
  "link": "https://essemobility.com/"
},
{
  "id": 4,
  "title": "Enugu State Polytechnic – ESPoly Skill-Based Education",
  "category": "Educational Institution & Programme Management",
  "img": MobileImage2,
  "description": "A premier polytechnic in Enugu State focused on practical skill-based training and technology-driven education across science, agriculture and technology fields.",
  "role": "Full-Stack Developer / Educational Platform Lead",
  "duration": "3 months",
  "technologies": ["Laravel", "Vue.js", "MySQL", "REST API", "AWS"],
  "features": [
    "Modern lecture halls with audio-visual tools for effective teaching and learning",
    "ICT Centre with high-speed internet and modern computer systems to enhance digital literacy",
    "Entrepreneurship Development Centre focused on skill acquisition and business development training",
    "Comprehensive programmes including National Diplomas and Higher National Diplomas in technology and agriculture",
    "Online portal for admissions, programme details, and institutional news and resources"
  ],
  "link": "https://espoly.edu.ng/"
},
{
  "id": 5,
  "title": "Mike & Mike Partners – Architectural Consulting & Design-Build Firm",
  "category": "Architecture & Construction Services",
  "img": MobileImage5,
  "description": "A full-service architectural consulting firm delivering innovative design-build solutions focused on high-quality craftsmanship and client-centric project delivery.",
  "role": "Front-end Developer / Web Architect",
  "duration": "1 month",
  "technologies": ["Next.js", "GraphQL", "Headless CMS", "AWS S3", "Figma"],
  "features": [
    "Custom-built project portfolio showcasing architectural design, construction management and consulting services", 
    "Responsive design adapting across desktop, tablet and mobile for user-friendly browsing of services and past work", 
    "Interactive case-studies section with image galleries, project summaries and client testimonials", 
    "CMS integration allowing non-technical staff to update service descriptions, team bios and project data", 
    "Optimised for performance and SEO with modern JAMstack architecture and cloud-based asset delivery"
  ],
  "link": "https://mikeandmikepartners.com/"
},{
  "id": 6,
  "title": " Student ID Card Request System",
  "category": "Student ID Card Request System",
  "img": MobileImage6,
  "description": "This is a Laravel-based web application built for Lexa University to automate student ID card requests and issuance. The system allows students to log in with their matric number, submit ID card requests, upload photos, and track request status. Administrators can review requests, approve or reject them, generate ID cards with QR codes, and manage records efficiently.",
  "role": "Full-Stack Developer",
  "duration": "1 month",
  "technologies": ["Laravel", "Vue.js", "MySQL", "REST API"],
  "features": [
    "Secure login using Matric Number + password.", 
    "Submit ID card request (biodata auto-filled from records).", 
    "Upload a passport photo.", 
    "Track request status (Pending → Approved/Rejected → Printed).", 
    "Get notified when ID card is ready for collection.", 
    "Request for reprint in case of loss/damage.",
    "Login using Email + password.",
    "Dashboard with statistics (total requests, approved, rejected, printed).",
    "Review, approve, or reject student requests.",
    "Generate ID cards with embedded QR codes.",
    "Print or export ID cards as PDF.",
    "Manage student records and reprint requests.",
    "Audit log for login and request activities."
  ],
  "link": "https://github.com/odafe32/Computerized-IDCARD"
}
,{
  "id": 7,
  "title": " CAMS – Child Abuse Management System",
  "category": "Child Abuse Management System",
  "img": MobileImage7,
  "description": "CAMS (Child Abuse Management System) is a web-based platform built with Laravel that enables streamlined reporting, management, and tracking of child abuse cases.It connects Admins, Social Workers, and Police Officers in a centralized system to ensure child protection cases are properly documented, investigated, and resolved.",
  "role": "Full-Stack Developer",
  "duration": "1 month",
  "technologies": ["Laravel", "Vue.js", "MySQL", "REST API"],
  "features": [
    " Role-based Access (Admin, Social Worker, Police Officer).",
" Case Management: Report, update, and track cases.",
" Child Information: Record child details, medical conditions, and school data.",
" Offender Details: Capture suspected offender information.",
" Reporter Information: Record guardian/teacher/community member who reports.",
" Assignment System: Social Workers can assign Police Officers to cases.",
" Case Dashboard & Reports for monitoring and decision-making.",
" Search & Filters for quick access to cases."
  ],
  "link": "https://github.com/odafe32/child-abuse-management-system"
}
,{
  "id": 8,
  "title": " Cornerstone Christian Centre",
  "category": "coming soon ",
  "img": MobileImage8,
  "description": "coming soon",
  "duration": "",
  "technologies": ["Laravel", "ReactJS", "MySQL", "REST API", "Tailwind CSS", "AWS", "TypeScript", "Drive Api"],
  "features": [
    "",

  ],
  "link": ""
}


];
