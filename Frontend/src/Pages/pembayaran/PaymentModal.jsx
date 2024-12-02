import React, { useState } from 'react';

export default function PaymentModal({ onClose }) {
  const [selectedPayment, setSelectedPayment] = useState(null);

  const handleSelectPayment = (paymentName) => {
    setSelectedPayment(paymentName);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-[#fffff0] p-6 rounded-lg max-w-3xl w-11/12">
        <h2 className="text-3xl font-semibold mb-6">Pilih Metode Pembayaran:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PaymentOption
            name="Gopay"
            image="/public/assetsvivit/gopay.png"
            fee={1000}
            total={16000}
            isSelected={selectedPayment === "Gopay"}
            onSelect={handleSelectPayment}
          />
          <PaymentOption
            name="OVO"
            image="/public/assetsvivit/OVO.png"
            fee={2000}
            total={17000}
            isSelected={selectedPayment === "OVO"}
            onSelect={handleSelectPayment}
          />
          <PaymentOption
            name="ShopeePay"
            image="/public/assetsvivit/sopay.png"
            fee={2000}
            total={17000}
            isSelected={selectedPayment === "ShopeePay"}
            onSelect={handleSelectPayment}
          />
          <PaymentOption
            name="Dana"
            image="/public/assetsvivit/Dana.png"
            fee={2000}
            total={17000}
            isSelected={selectedPayment === "Dana"}
            onSelect={handleSelectPayment}
          />
        </div>
        <button
          onClick={onClose}
          style={{ boxShadow: 'inset 0px 4px 10px rgba(0, 0, 0, 0.3)' }}
          className="mt-6 ml-[140px] bg-[#FB6816] text-[#fffff0] font-semibold py-2 px-4 rounded-full shadow-inner w-[420px] shadow-lg active:scale-95 transition-transform duration-150"
        >
          Selanjutnya
        </button>
      </div>
    </div>
  );
}

function PaymentOption({ name, image, fee, total, isSelected, onSelect }) {
  return (
    <div
      onClick={() => onSelect(name)}
      className={`cursor-pointer bg-[#D2D2D2] p-4 rounded-lg flex items-center justify-between shadow-md hover:shadow-lg transition-shadow ${
        isSelected
          ? 'border-4 border-blue-500 transform scale-95 shadow-xl shadow-blue-300'
          : ''
      }`}
    >
      <img src={image} alt={name} className="h-16 w-auto" />
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm">Biaya Transaksi Rp {fee.toLocaleString()}</p>
        <p className="font-semibold">Rp {total.toLocaleString()}</p>
      </div>
    </div>
  );
}
