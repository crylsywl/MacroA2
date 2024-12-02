import React, { useState } from 'react';
import Navbar from '../../Components/Elements/Navbar/Navbar';
import CourseDetails from './CourseDetails';
import RegistrationForm from './RegistrationForm';
import PaymentPreview from './PaymentPreview';
import Footer from '../review-cv/Footer';
import PaymentModal from './PaymentModal';

export default function PaymentPage() {
  const [showPaymentPreview, setShowPaymentPreview] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handleSave = () => {
    setShowPaymentPreview(true);
  };

  return (
    <div className="bg-[#fffff0] min-h-screen">
      <Navbar />
      <main className="container mt-[64px] mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        <div className={`lg:w-2/3 transition-all duration-300 ${showPaymentPreview ? 'lg:ml-[50px]' : ''}`}>
          <CourseDetails />
          <RegistrationForm onSave={handleSave} />
        </div>
        {showPaymentPreview && (
          <div className="lg:w-1/3">
            <PaymentPreview onPaymentMethodClick={() => setShowPaymentModal(true)} />
          </div>
        )}
      </main>
      <Footer />
      {showPaymentModal && <PaymentModal onClose={() => setShowPaymentModal(false)} />}
    </div>
  );
}

