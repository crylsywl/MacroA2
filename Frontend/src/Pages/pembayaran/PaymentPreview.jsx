import React, { useState } from 'react';
import QRCode from 'react-qr-code'; // Impor react-qr-code untuk membuat QR code

export default function PaymentPreview({ onPaymentMethodClick }) {
  const [showQRCode, setShowQRCode] = useState(false);

  const handleLanjutBayarClick = () => {
    setShowQRCode(true); // Menampilkan QR Code setelah tombol "Lanjut Bayar" diklik
  };

  const paymentCode = "1234567890"; // Ganti dengan kode unik atau URL untuk pembayaran

  const closeQRCodeModal = () => {
    setShowQRCode(false); // Menutup QR Code
  };

  return (
    <div className="bg-ivory p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Preview Pembayaran</h2>
      <div className="space-y-4">
        <PreviewItem label="JobReady CV Batch 5" value="Rp 15.000" />
        <PreviewInfo label="Nama Lengkap" value="-" />
        <PreviewInfo label="Email" value="-" />
        <PreviewInfo label="Nomor telpon" value="-" />
        <PreviewInfo label="Mentor" value="-" />
        <PreviewInfo label="Jadwal" value="-" />
        <hr className="my-4 border-t border-gray-300" />
        <button
          onClick={onPaymentMethodClick}
          style={{ boxShadow: 'inset 0px 4px 10px rgba(0, 0, 0, 0.3)' }}
          className="w-full bg-[#FB6816] text-[#fffff0] font-semibold py-2 px-4 rounded-full shadow-lg active:scale-95 transition-transform duration-150"
        >
          Pilih Metode Pembayaran
        </button>
        <TotalSection />
        <button
          onClick={handleLanjutBayarClick} // Menangani klik tombol "Lanjut Bayar"
          className="w-full bg-[#FB6816] text-[#fffff0] font-semibold py-2 px-4 rounded-full shadow-lg active:scale-95 transition-transform duration-150"
          style={{ boxShadow: 'inset 0px 4px 10px rgba(0, 0, 0, 0.3)' }}
        >
          Lanjut Bayar
        </button>

        {/* QR Code Section - Modal Style */}
        {showQRCode && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-[#D2D2D2] p-6 rounded-lg shadow-lg relative w-[400px]">
              <div className="absolute top-0 right-0 p-2 cursor-pointer" onClick={closeQRCodeModal}>
                <span className="text-xl text-red-600 font-bold">&times;</span> {/* Tombol untuk menutup QR modal */}
              </div>
              <h3 className="text-xl font-semibold text-black mb-4 text-center">
                Scan QR Code Pembayaran
              </h3>
              <QRCode value={paymentCode} size={256} className="mx-auto mb-4" />
              <p className="text-center text-sm">Gunakan aplikasi pembayaran untuk melakukan pembayaran.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function PreviewItem({ label, value }) {
  return (
    <div className="flex justify-between">
      <span className="font-semibold">{label}</span>
      <span>{value}</span>
    </div>
  );
}

function PreviewInfo({ label, value }) {
  return (
    <div>
      <label className="block font-semibold">{label}</label>
      <p>{value}</p>
    </div>
  );
}

function TotalSection() {
  return (
    <div className="space-y-2">
      <PreviewItem label="Subtotal" value="Rp 15.000" />
      <PreviewItem label="Biaya Transaksi" value="Rp 1.000" />
      <PreviewItem label="Total" value="Rp 16.000" />
    </div>
  );
}
