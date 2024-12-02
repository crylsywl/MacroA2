import React, { useState } from 'react';

export default function RegistrationForm({ onSave }) {
  const [selectedMentor, setSelectedMentor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log({ selectedMentor, selectedDate, selectedTime, file });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 ml-[150px]">
      <h2 className="text-2xl font-semibold">Pendaftaran</h2>
      <FormField label="Nama Lengkap" placeholder="Masukkan nama lengkap Anda" />
      <FormField label="Email" placeholder="Masukkan email Anda" />
      <FormField label="Nomor Telepon" placeholder="Masukkan nomor telepon Anda" />

      {/* Mentor Selection */}
      <MentorSelection 
        selectedMentor={selectedMentor} 
        setSelectedMentor={setSelectedMentor} 
      />

      {/* Schedule Selection */}
      <ScheduleSelection 
        selectedDate={selectedDate} 
        setSelectedDate={setSelectedDate}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
      />

      {/* File Upload */}
      <FileUpload 
        file={file}
        setFile={setFile}
      />

      <button
        onClick={onSave}
        style={{ boxShadow: 'inset 0px 4px 10px rgba(0, 0, 0, 0.3)' }}
        className="w-full bg-[#FB6816] text-[#fffff0] font-semibold py-2 px-4 rounded-full shadow-lg active:scale-95 transition-transform duration-150"
      >
        Simpan
      </button>
    </form>
  );
}

function FormField({ label, placeholder }) {
  return (
    <div className="space-y-2">
      <label className="block font-semibold">{label}</label>
      <div className="bg-[#D2D2D2] p-2 rounded">
        <p className="text-gray-600">{placeholder}</p>
      </div>
    </div>
  );
}

function MentorSelection({ selectedMentor, setSelectedMentor }) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Pilih Mentor</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <MentorCard
          value="tiara"
          name="Tiara Dewi"
          role="CV Consultant"
          photo="/public/assetsvivit/Tiara.png"
          selectedMentor={selectedMentor}
          setSelectedMentor={setSelectedMentor}
        />
        <MentorCard 
          value="siska"
          name="Siska Larasati"
          role="CV Consultant"
          photo="/public/assetsvivit/Siska.png"
          selectedMentor={selectedMentor}
          setSelectedMentor={setSelectedMentor}
        />
        <MentorCard
          value="andi"
          name="Andi Wirawan"
          role="HR Specialist"
          photo="/public/assetsvivit/Andi.png"
          selectedMentor={selectedMentor}
          setSelectedMentor={setSelectedMentor}
        />
      </div>
    </div>
  );
}

function ScheduleSelection({ selectedDate, setSelectedDate, selectedTime, setSelectedTime }) {
  return (
    <div className="flex justify-between gap-8">
      <div className="flex-1">
        <label htmlFor="date" className="font-semibold">Pilih Tanggal</label>
        <div className="border-2 border-black p-2 rounded mt-2">
          <select
            id="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="picker-field w-full bg-transparent border-none"
          >
            <option value="2024-11-27">27 November 2024</option>
            <option value="2024-11-28">28 November 2024</option>
            <option value="2024-11-29">29 November 2024</option>
          </select>
        </div>
      </div>

      <div className="flex-1">
        <label htmlFor="time" className="font-semibold">Pilih Waktu</label>
        <div className="border-2 border-black p-2 rounded mt-2">
          <select
            id="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="picker-field w-full bg-transparent border-none"
          >
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
          </select>
        </div>
      </div>
    </div>
  );
}


function FileUpload({ file, setFile }) {
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div className="space-y-2">
      <label htmlFor="file" className="font-semibold">Upload File</label>
      <div className="border-2 border-black p-2 rounded mt-2 w-[117px]">
      <input
        id="file"
        type="file"
        onChange={handleFileChange}
        className="sr-only"
      />
      
      <label
        htmlFor="file"
        className="upload-btn cursor-pointer inline-block text-center px-4"
      >
        Pilih File
      </label>
      </div>
    </div>
  );
}

function MentorCard({ value, name, role, photo, icon, selectedMentor, setSelectedMentor }) {
  return (
    <label className="cursor-pointer">
      <input
        type="radio"
        value={value}
        checked={selectedMentor === value}
        onChange={() => setSelectedMentor(value)}
        className="sr-only"
      />
      <div 
      className={`mentor-card p-4 border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center bg-gray-200`}
      style={{ width: '197.25px', height: '244.25px' }}
      >
        <img src={photo} alt={name} className="mentor-photo object-cover w-167.25 h-167 rounded-[7.5px] mb-4 mt-[30px]" />
        <div className="mentor-info text-center mt-[-10px]">
          <p className="mentor-name text-lg font-semibold">{name}</p>
        </div>
        <div className="flex items-center mb-4">
          <input
            type="radio"
            name="mentor"
            value={value}
            checked={selectedMentor === value}
            onChange={() => setSelectedMentor(value)}
            className="mr-2"
          />
          <span className="text-sm">{role}</span>
        </div>
      </div>
    </label>
  );
}
