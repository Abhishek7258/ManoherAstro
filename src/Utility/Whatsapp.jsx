import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Whatsapp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate scroll percentage
      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
      
      // Show button when scrolled 30% or more
      setIsVisible(scrollPercentage >= 10);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Whatsapp Button - Only visible after 30% scroll */}
      <Link
        to="https://wa.me/918441825354?text=Hello%20I%20want%20to%20connect%20with%20you"
        className={`fixed bottom-23 lg:bottom-9 right-2 z-10 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-[green] text-center h-[50px] w-[50px] rounded-full text-white cursor-pointer">
          <i className="ri-whatsapp-line text-[32px]"></i>
        </div>
      </Link>
    </>
  );
};

export default Whatsapp;
