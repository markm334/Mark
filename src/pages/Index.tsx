import { Helmet } from "react-helmet-async";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Capabilities from "@/components/portfolio/Capabilities";
import SelectedWork from "@/components/portfolio/SelectedWork";
import Approach from "@/components/portfolio/Approach";
import Investment from "@/components/portfolio/Investment";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Mark Murangiri | Founder, Product Innovator & Inclusive Systems Builder</title>
        <meta 
          name="description" 
          content="Mark Murangiri is a founder and product innovator designing practical, scalable solutions for healthcare, accessibility, and underserved environments. Based in Nairobi, Kenya." 
        />
        <meta name="keywords" content="Mark Murangiri, product innovator, inclusive design, healthcare technology, assistive technology, accessibility, Nairobi, Kenya" />
        <link rel="canonical" href="https://mas-2.onrender.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Mark Murangiri | Founder & Product Innovator" />
        <meta property="og:description" content="Designing practical, scalable solutions for healthcare, accessibility, and underserved environments." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mas-2.onrender.com" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mark Murangiri | Founder & Product Innovator" />
        <meta name="twitter:description" content="Designing practical, scalable solutions for healthcare, accessibility, and underserved environments." />
      </Helmet>
      
      <main className="overflow-hidden">
        <Navbar />
        <Hero />
        <About />
        <Capabilities />
        <SelectedWork />
        <Approach />
        <Investment />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
