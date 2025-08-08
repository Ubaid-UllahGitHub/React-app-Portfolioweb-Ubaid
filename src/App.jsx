import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import necessary router components
import Navbar from './components/navbar';
import MainContent from './components/main';
import AboutServices from './components/aboutservices';
import PortfolioSection from './components/Portfolio';
import ContactFormSection from './components/contactform';
import ContactDetails from './components/contactdetails';
import NavbarExperience from './components/navbarexperience';
import MyExperience from './components/myexperience';
import Portfolioprojects from './components/projects';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

const projects = {
  roofapp: {
    title: "Roof Inspection App",
    subtitle: "Streamlined reporting tool for professional roof inspectors. Built",
    stack: "Built with React, MUI, AWS S3, and PDF generator with user authentication.",
    stack1: "Technologies: React, MUI, AWS S3, PDF generator, User Authentication",
    imagesrc: "/image/projectroof.png", // Replace with your actual image path
    imagealt: "Roof Inspection App Screenshot",
    description: `
      I developed a powerful and user-friendly <strong>Roof Inspection Web Application</strong> tailored for professional inspectors. This app enables efficient capture of <strong>client details</strong>, <strong>roof images</strong>, and <strong>inspection observations</strong>. It supports evaluation of roofing materials such as <strong>shingles, metal, tile, and wood shakes</strong>—covering issues like wind or hail damage, structural concerns, and granule loss.
      <br/><br/>
      Inspectors can upload high-resolution photos with notes, record detailed findings, and automatically generate branded <strong>PDF reports</strong> for clients. The responsive interface ensures smooth use from desktop or tablet, improving both <strong>speed and accuracy</strong>. The app saves time, eliminates paperwork, and enhances client trust through <strong>clear, professional documentation</strong>.
    `,
    links: [
      {
        text: "Live Preview",
        href: "http://roof-deployment.s3-website.us-east-2.amazonaws.com/", // Replace with actual link
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
            <path d="M240-120v-480q0-100 70-170t170-70q100 0 170 70t70 170v168l64-64 56 56-160 160-160-160 56-56 64 64v-168q0-66-47-113t-113-47q-66 0-113 47t-47 113v480h-80Z" />
          </svg>
        )
      }
    ]
  },
  foriio: {
    title: "Foriio Portfolio Builder",
    subtitle: "Create your portfolio in minutes — a must-have tool for all types of creators.",
    stack: "Contributed to frontend development using React, React Router, Hooks, and MUI.",
    stack1: "Technologies: React, React Router, Hooks, MUI",
    imagesrc: "/image/forrio.png",
    imagealt: "Foriio Project Screenshot",
    description: `
    I contributed to the development of <strong>Foriio</strong>, a portfolio creation platform trusted by over 200,000 creators. The project focused on delivering a seamless, intuitive experience for users ranging from designers and illustrators to videographers and VTubers.
    <br/><br/>
    Key contributions include implementing dynamic routing with <strong>React Router</strong>, building reusable components with <strong>React Hooks</strong>, and enhancing UI with <strong>MUI</strong>. I also worked on integrating responsive layouts, showcasing user works, and API-based features like uploading assets, managing portfolios, and creator benefits.
    <br/><br/>
    The platform allows creators to upload diverse file formats, organize works into categories, and present their portfolio professionally. It also includes business collaboration features and a commerce section for monetizing digital content.
  `,
    links: [
      {
        text: "Live Preview",
        href: "https://www.foriio.com/",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
            <path d="M240-120v-480q0-100 70-170t170-70q100 0 170 70t70 170v168l64-64 56 56-160 160-160-160 56-56 64 64v-168q0-66-47-113t-113-47q-66 0-113 47t-47 113v480h-80Z" />
          </svg>
        )
      }
    ]
  },

  ventinove: {
    title: "Ventinove",
    subtitle: "Sleep Deep. Wake Glowing. Feel renewed—with radiance and restoration in every daily ritual.",
    stack1: "Built with Shopify",
    imagesrc: "/image/ventinove.png",
    imagealt: "Ventinove Shopify Store",
    description: `
      VENTINOVE is a premium wellness brand offering a sleep and skin renewal supplement. The site communicates scientific formulation with consumer trust through clear benefits like deep sleep, hydration, collagen activation, and antioxidant protection. Designed to be elegant and modern, the layout highlights customer education, product comparison, and a clean user journey from homepage to checkout.
    `,
    links: [
      {
        text: "Visit Site",
        href: "https://ventinove.co/",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
            <path d="M240-120v-480q0-100 70-170t170-70q100 0 170 70t70 170v168l64-64 56 56-160 160-160-160 56-56 64 64v-168q0-66-47-113t-113-47q-66 0-113 47t-47 113v480h-80Z" />
          </svg>
        )
      }
    ]
  },

  nutriworld: {
    title: "Nutriworld",
    subtitle: "Premium sports nutrition and supplements designed for performance, recovery, and muscle growth.",
    stack1: "Built with Shopify",
    imagesrc: "/image/nutrition.png",
    imagealt: "Nutriworld Shopify Store",
    description: `
      Nutriworld delivers a wide range of high-quality fitness supplements including protein, creatine, pre-workouts, and vitamins. The site is focused on performance-based marketing, fast delivery, and product education. Each product is SEO-optimized and supported with trust-building labels like “Free Shipping,” “Next-Day Delivery,” and “100% Quality Guarantee.”
    `,
    links: [
      {
        text: "Visit Site",
        href: "https://nutriworld.eu/",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
            <path d="M240-120v-480q0-100 70-170t170-70q100 0 170 70t70 170v168l64-64 56 56-160 160-160-160 56-56 64 64v-168q0-66-47-113t-113-47q-66 0-113 47t-47 113v480h-80Z" />
          </svg>
        )
      }
    ]
  },

  fitgirl: {
    title: "FitGirl Nutrition",
    subtitle: "Health & fitness products for women, formulated with science-backed ingredients and clear benefits.",
    stack1: "Built with Shopify",
    imagesrc: "/image/fitgirl.png",
    imagealt: "FitGirl Shopify Store",
    description: `
      FitGirl Nutrition is tailored for modern active women, offering a variety of supplements like collagen, vitamins, EAA, and clear whey. The branding is bold yet feminine, and focuses on clean nutrition and daily wellness. Featuring product bundles, expert blogs, and customer testimonials, this store supports wellness, recovery, and glow-from-within aesthetics.
    `,
    links: [
      {
        text: "Visit Site",
        href: "https://fitgirl-nutrition.com/",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
            <path d="M240-120v-480q0-100 70-170t170-70q100 0 170 70t70 170v168l64-64 56 56-160 160-160-160 56-56 64 64v-168q0-66-47-113t-113-47q-66 0-113 47t-47 113v480h-80Z" />
          </svg>
        )
      }
    ]
  },

  "Cd": {
    title: "C&D Hair Care",
    subtitle: "Refresh your roots. Rejuvenate your hair from the ground up with clean, conscious hair care.",
    stack1: "Built with Shopify",
    imagesrc: "/image/c&d.png",
    imagealt: "C&D Hair Care Shopify Store",
    description: `
      C&D is a natural hair care brand focusing on cruelty-free, vegan, and non-toxic products. The Shopify storefront is minimal and eco-friendly in tone, emphasizing bundles, sustainability, and performance. It highlights clean design and communicates trust through ingredient transparency and an accessible layout.
    `,
    links: [
      {
        text: "Visit Site",
        href: "https://canddhair.com",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
            <path d="M240-120v-480q0-100 70-170t170-70q100 0 170 70t70 170v168l64-64 56 56-160 160-160-160 56-56 64 64v-168q0-66-47-113t-113-47q-66 0-113 47t-47 113v480h-80Z" />
          </svg>
        )
      }
    ]
  },
  "ConstructionBootstrap": {
    title: "Construction & Renovation Website",
    subtitle: "Modern Bootstrap-based site for construction and renovation services.",
    stack1: "Built with HTML, JavaScript, CSS & Bootstrap",
    imagesrc: "/image/projectbootstrap.png",
    imagealt: "Construction Bootstrap Website Screenshot",
    description: `
    A fully responsive website built with Bootstrap for showcasing construction, flooring, and renovation services. Includes service listings, project gallery, testimonials, contact info, and FAQ — designed for contractors, builders, and renovation businesses looking for a clean, professional web presence.
  `,
    links: [
      {
        text: "View Website",
        href: "https://construction-bootstrap.netlify.app/",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
            <path d="M240-120v-480q0-100 70-170t170-70q100 0 170 70t70 170v168l64-64 56 56-160 160-160-160 56-56 64 64v-168q0-66-47-113t-113-47q-66 0-113 47t-47 113v480h-80Z" />
          </svg>
        )
      }
    ]
  },
  "longevix": {
    title: "Longevix",
    subtitle: "Longevix is a cutting-edge health and wellness Ecommerce platform that empowers users to take control of their health.",
    stack1: "Built with WordPress, WooCommerce, and Elementor",
    imagesrc: "/image/longevix.png",
    imagealt: "Longevix WordPress Website Screenshot",
    description: "Longevix is a modern health and wellness eCommerce website built on WordPress and WooCommerce, designed to offer users an intuitive shopping experience. As the WordPress developer, I implemented custom UI design, integrated secure payment methods including Google Pay and Apple Pay, and developed a dynamic coupon system to boost conversions. The platform combines aesthetic appeal with functionality, ensuring a smooth and engaging user journey.",
    links: [
      {
        text: "Visit Site",
        href: "https://longevix.co.uk/",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
            <path d="M240-120v-480q0-100 70-170t170-70q100 0 170 70t70 170v168l64-64 56 56-160 160-160-160 56-56 64 64v-168q0-66-47-113t-113-47q-66 0-113 47t-47 113v480h-80Z" />
          </svg>
        )
      }
    ],
  },
  "hts": {
    title: "HTS - Handtech Solution",
    subtitle: "Handtech Solution (HTS) is a modern tech agency delivering tailored digital solutions—from sleek websites to full-scale web & mobile apps.",
    stack1: "WordPress Development, HTML, CSS, JS and SMTP integration",
    imagesrc: "/image/HTS.png",
    imagealt: "HTS Tech Agency Website Screenshot",
    description: "HTS (Handtech Solution) is a dynamic agency website crafted using React.js with a focus on interactive design and responsive performance. The platform showcases key offerings like web development, software engineering, UI/UX design, and application development. I developed a portfolio section with category filtering, a services page with smooth hover animations, and integrated a secure contact form with SMTP functionality using Nodemailer. Designed with SCSS and Urbanist font, the site balances professional aesthetics with functional user flow.",
    links: [
      {
        text: "Visit Site",
        href: "https://handtechsolution.com", // Replace with actual live link
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
            <path d="M240-120v-480q0-100 70-170t170-70q100 0 170 70t70 170v168l64-64 56 56-160 160-160-160 56-56 64 64v-168q0-66-47-113t-113-47q-66 0-113 47t-47 113v480h-80Z" />
          </svg>
        )
      }
    ]
  },
  "zhconsultancy": {
    title: "ZH Consultancy",
    subtitle: "ZH Consultancy is a full-scale business consultancy firm offering customized strategies to help businesses launch, grow, and thrive globally.",
    stack1: "WordPress Development, Elementor, SMTP Integration, Business Portfolio Section",
    imagesrc: "/image/ztech.png",
    imagealt: "ZH Consultancy WordPress Website Screenshot",
    description: "ZH Consultancy is a business-focused WordPress website built using Elementor with customized design, clear CTA structure, and multilingual SEO setup. The platform highlights core services like business startup support, funding consultation, graphic design, SEO, and website development. A dynamic portfolio section showcases success stories and client projects. An SMTP-integrated contact form ensures secure and reliable client communication. The site is optimized for user experience and lead conversion, making it a valuable digital asset for business growth.",
    links: [
      {
        text: "Visit Site",
        href: "https://zhconsultancy.com/",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
            <path d="M240-120v-480q0-100 70-170t170-70q100 0 170 70t70 170v168l64-64 56 56-160 160-160-160 56-56 64 64v-168q0-66-47-113t-113-47q-66 0-113 47t-47 113v480h-80Z" />
          </svg>
        )
      }
    ]
  },
  "mariotstore": {
    title: "Mariot Store",
    subtitle: "Mariot Store is a high-end WooCommerce platform offering professional-grade kitchen equipment, built for streamlined B2B and B2C ecommerce experiences.",
    stack1: "WordPress, WooCommerce, Elementor, WhatsApp Integration, Payment Gateway, Product Variations",
    imagesrc: "/image/mariostore.png",
    imagealt: "Mariot Store WooCommerce Website Screenshot",
    description: "Mariot Store is a feature-rich ecommerce platform developed using WordPress and WooCommerce, specifically tailored for commercial kitchen equipment. The site includes advanced catalog management with product filters, price ranges, and category segmentation. Users can view detailed product listings with support for color and size variations. Each product card is enhanced with a floating WhatsApp CTA button for quick inquiry. The site also includes secure payment integration, dynamic cart/checkout system, and customer-friendly policies like easy returns and 24/7 support. Built using Elementor and custom CSS for styling, Mariot Store ensures both a visually engaging and high-conversion shopping experience.",
    links: [
      {
        text: "Visit Site",
        href: "https://mariotstore.com/", // Replace if needed
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
            <path d="M240-120v-480q0-100 70-170t170-70q100 0 170 70t70 170v168l64-64 56 56-160 160-160-160 56-56 64 64v-168q0-66-47-113t-113-47q-66 0-113 47t-47 113v480h-80Z" />
          </svg>
        )
      }
    ]
  },
  "cryprovest": {
    title: "Cryprovest – Crypto Investment Platform",
    subtitle: "Cryprovest is a secure and modern cryptocurrency trading platform built with React.js and MUI, enabling users to buy, sell, and learn about crypto assets.",
    stack1: "React.js, MUI, Blockchain Integration, Netlify Hosting",
    imagesrc: "/image/cryptovest.png",
    imagealt: "Cryprovest Cryptocurrency Platform Screenshot",
    description: "Cryprovest is a sleek, React.js-based cryptocurrency trading and learning platform featuring real-time token listings, educational rewards, and security-focused infrastructure. The platform includes live market data, dynamic charts, and user-friendly UI/UX powered by Material UI. Key features include secure vault storage, recurring buy options, FDIC-insured cash balances, and support for 100+ countries. Deployed on Netlify, the platform emphasizes scalability, responsiveness, and a seamless crypto onboarding experience.",
    links: [
      {
        text: "Visit Site",
        href: "https://crypto-vest-client.netlify.app/", // Replace with your actual Netlify link if different
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
            <path d="M240-120v-480q0-100 70-170t170-70q100 0 170 70t70 170v168l64-64 56 56-160 160-160-160 56-56 64 64v-168q0-66-47-113t-113-47q-66 0-113 47t-47 113v480h-80Z" />
          </svg>
        )
      }
    ]
  },
  labeldesigns: {
    title: "Label Design Agency",
    subtitle: "A modern branding and label design agency website built with Elementor and WordPress.",
    stack1: "WordPress, Elementor, Custom Portfolio, SMTP Integration",
    imagesrc: "/image/labledesign.png",
    imagealt: "Label Designs WordPress Website Screenshot",
    description: `KAE Designs is a creative label and branding agency specializing in premium packaging and print-ready designs. 
Built on WordPress using Elementor, the site features a sleek, modern layout with custom-built sections tailored to 
highlight design projects, client testimonials, and services. Custom portfolio section with responsive grid and category filters, 
SMTP-powered contact form for client inquiries, interactive service blocks with hover animations, 
mobile-friendly, clean, and minimal design.`,
    links: [
      {
        text: "Visit Site",
        href: "https://labeldesignservices.com/",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
            <path d="M240-120v-480q0-100 70-170t170-70q100 0 170 70t70 170v168l64-64 56 56-160 160-160-160 56-56 64 64v-168q0-66-47-113t-113-47q-66 0-113 47t-47 113v480h-80Z" />
          </svg>
        )
      }
    ]
  },

  feals: {
    title: "Feals",
    subtitle: "CBD + THC microdosed gummies for better sleep, less stress, and daily calm—without the high.",
    stack1: "Built with Shopify",
    imagesrc: "/image/fleas.png", // Replace with actual image path
    imagealt: "Feals Shopify Store",
    description: `
    Feals is a U.S.-based wellness brand offering science-backed CBD + THC products like sleep gummies and mints. Built on Shopify with custom Liquid development, the store delivers a trust-first experience with triple-tested ingredients, organic certification, and educational tools like interactive product quizzes. Features include subscription-ready shopping, nationwide shipping, and 30-day money-back guarantees. With bold branding, calming UI, and embedded social proof, the platform supports effortless shopping for over 350,000 customers seeking a healthier way to relax and sleep naturally.
  `,
    links: [
      {
        text: "Visit Site",
        href: "https://feals.com",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
            <path d="M240-120v-480q0-100 70-170t170-70q100 0 170 70t70 170v168l64-64 56 56-160 160-160-160 56-56 64 64v-168q0-66-47-113t-113-47q-66 0-113 47t-47 113v480h-80Z" />
          </svg>
        )
      }
    ]
  },
  conatural: {
    title: "Conatural",
    subtitle: "Organic skincare made in Pakistan—clean, halal-certified beauty for every skin type and ritual.",
    stack1: "Built with Shopify",
    imagesrc: "/image/conatural.png", // Replace with actual image path
    imagealt: "Conatural Shopify Store",
    description: `
    Conatural is Pakistan’s leading organic beauty and personal care brand, offering a wide range of halal-certified, paraben-free, and cruelty-free products. The Shopify store features advanced theme customization using Liquid, with clear product categorization, bundles, and dynamic sections like clearance sales and salon kits. The platform integrates powerful review systems, user testimonials, and educational blog content to drive customer trust. With mobile-first design, loyalty features, and secure checkout via Visa, MasterCard, Apple Pay, and Google Pay, Conatural delivers a seamless eCommerce experience to a diverse audience across Pakistan and beyond.
  `,
    links: [
      {
        text: "Visit Site",
        href: "https://conaturalintl.com",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
            <path d="M240-120v-480q0-100 70-170t170-70q100 0 170 70t70 170v168l64-64 56 56-160 160-160-160 56-56 64 64v-168q0-66-47-113t-113-47q-66 0-113 47t-47 113v480h-80Z" />
          </svg>
        )
      }
    ]
  },
  vivanmn: {
    title: "VIVANMN",
    subtitle: "Supercharge your cellular health with UK-made NMN supplements—backed by science, built on trust.",
    stack1: "Built with Shopify",
    imagesrc: "/image/vivanum.png", // Replace with actual image path
    imagealt: "VIVANMN Shopify Store",
    description: `
    VIVANMN is a wellness brand focused on longevity and energy through premium NMN supplements. The Shopify store is designed with a clean, science-first layout using custom Liquid templates for optimized product storytelling and trust-building. It features dynamic landing pages, third-party lab results, and compelling customer education. The Skio app powers subscription plans, enabling recurring monthly purchases. Checkout includes support for Visa, MasterCard, Apple Pay, Google Pay, and American Express. With a 100-day money-back guarantee, local UK production, and free express shipping, the site delivers a frictionless, high-converting eCommerce experience for health-conscious consumers.
  `,
    links: [
      {
        text: "Visit Site",
        href: "https://vivanmn.com",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
            <path d="M240-120v-480q0-100 70-170t170-70q100 0 170 70t70 170v168l64-64 56 56-160 160-160-160 56-56 64 64v-168q0-66-47-113t-113-47q-66 0-113 47t-47 113v480h-80Z" />
          </svg>
        )
      }
    ]
  },
  webbydesk: {
    title: "WebbyDesk – Healthcare Marketing Agency",
    subtitle: "A full-service healthcare marketing agency website for dentists and medical practices, built using WordPress and Elementor.",
    stack1: "WordPress, Elementor, Custom Features, SMTP Integration, HTML, CSS, JavaScript",
    imagesrc: "/image/webbydesk.png",
    imagealt: "WebbyDesk Healthcare Agency WordPress Website Screenshot",
    description: `WebbyDesk is a digital marketing agency focused on growing dental and medical practices. 
The website was built with WordPress and Elementor and includes several custom-designed sections such as 
AI chatbot integration, service highlights, strategy scheduling, and testimonials. 
Custom contact form with SMTP integration ensures reliable inquiry handling. The layout is fully responsive, 
SEO-friendly, and optimized for high conversion. Advanced styling using HTML, CSS, and JavaScript was applied 
for animations, user interaction, and mobile performance.`,
    links: [
      {
        text: "Visit Site",
        href: "https://www.webbydesk.com/",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
            <path d="M240-120v-480q0-100 70-170t170-70q100 0 170 70t70 170v168l64-64 56 56-160 160-160-160 56-56 64 64v-168q0-66-47-113t-113-47q-66 0-113 47t-47 113v480h-80Z" />
          </svg>
        )
      }
    ]
  },

};


const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <MainContent />
              <AboutServices />
              <PortfolioSection />
              <ContactFormSection />
              <ContactDetails />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <NavbarExperience />
              <MyExperience />
              <PortfolioSection />
              <ContactFormSection />
              <ContactDetails />
            </>
          }
        />
        <Route
          path="/projectroof"
          element={
            <>
              <Navbar />
              <Portfolioprojects {...projects.roofapp} />
              <ContactFormSection />
              <ContactDetails />
            </>
          }
        />
        <Route
          path="/projectventinove"
          element={
            <>
              <Navbar />
              <Portfolioprojects {...projects.ventinove} />
              <ContactFormSection />
              <ContactDetails />
            </>
          }
        />

        <Route
          path="/projectnutriworld"
          element={
            <>
              <Navbar />
              <Portfolioprojects {...projects.nutriworld} />
              <ContactFormSection />
              <ContactDetails />
            </>
          }
        />

        <Route
          path="/projectfitgirl"
          element={
            <>
              <Navbar />
              <Portfolioprojects {...projects.fitgirl} />
              <ContactFormSection />
              <ContactDetails />
            </>
          }
        />

        <Route
          path="/projectcd"
          element={
            <>
              <Navbar />
              <Portfolioprojects {...projects.Cd} />
              <ContactFormSection />
              <ContactDetails />
            </>
          }
        />
        <Route
          path="/projectforiio"
          element={
            <>
              <Navbar />
              <Portfolioprojects {...projects.foriio} />
              <ContactFormSection />
              <ContactDetails />
            </>
          }
        />
        <Route
          path="/projectconstructionbootstrap"
          element={
            <>
              <Navbar />
              <Portfolioprojects {...projects.ConstructionBootstrap} />
              <ContactFormSection />
              <ContactDetails />
            </>
          }
        />
        <Route
          path="/projectlongevix"
          element={
            <>
              <Navbar />
              <Portfolioprojects {...projects.longevix} />
              <ContactFormSection />
              <ContactDetails />
            </>
          }
        />
        <Route
          path="/projectfeals"
          element={
            <>
              <Navbar />
              <Portfolioprojects {...projects.feals} />
              <ContactFormSection />
              <ContactDetails />
            </>
          }
        />
        <Route
          path="/projectconatural"
          element={
            <>
              <Navbar />
              <Portfolioprojects {...projects.conatural} />
              <ContactFormSection />
              <ContactDetails />
            </>
          }
        />
        <Route
          path="/projectvivanmn"
          element={
            <>
              <Navbar />
              <Portfolioprojects {...projects.vivanmn} />
              <ContactFormSection />
              <ContactDetails />
            </>
          }
        />
        <Route
          path="/projecthts"
          element={
            <>
              <Navbar />
              <Portfolioprojects {...projects.hts} />
              <ContactFormSection />
              <ContactDetails />
            </>
          }
        />
        <Route
          path="/projectzhconsultancy"
          element={
            <>
              <Navbar />
              <Portfolioprojects {...projects.zhconsultancy} />
              <ContactFormSection />
              <ContactDetails />
            </>
          }
        />
        <Route
          path="/projectmariotstore"
          element={
            <>
              <Navbar />
              <Portfolioprojects {...projects.mariotstore} />
              <ContactFormSection />
              <ContactDetails />
            </>
          }
        />
        <Route
          path="/projectcryprovest"
          element={
            <>
              <Navbar />
              <Portfolioprojects {...projects.cryprovest} />
              <ContactFormSection />
              <ContactDetails />
            </>
          }
        />
        <Route
          path="/projectlabeldesigns"
          element={
            <>
              <Navbar />
              <Portfolioprojects {...projects.labeldesigns} />
              <ContactFormSection />
              <ContactDetails />
            </>
          }
        />
        <Route
          path="/projectwebbydesk"
          element={
            <>
              <Navbar />
              <Portfolioprojects {...projects.webbydesk} />
              <ContactFormSection />
              <ContactDetails />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App
