import React from 'react';
import Navbar from '../../Components/Elements/Navbar/Navbar';
import HeroSection from './HeroSection';
import ClassInfo from './ClassInfo';
import Footer from './Footer';

export default function CourseReviewPage() {
  return (
    <div className="bg-[#FFFFF0] min-h-screen relative">
      <Navbar />
      <HeroSection />
      <ClassInfo />
      <Footer />
    </div>
  );
}


