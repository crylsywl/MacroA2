import React from 'react';

export default function VideoPlayer() {
  return (
    <div className="bg-[#fffff0] rounded-lg shadow-md p-4 w-full h-auto">
      <div className="aspect-w-16 aspect-h-9 rounded-lg mb-4 h-[410px]">
      <div className="relative w-full h-full pb-[45.75%] rounded-lg mb-4 bg-black">
        {/* Placeholder video */}
        {/* <div className="absolute top-0 left-0 bg-blue-500 w-full h-full flex items-center justify-center">
          <p className="text-white">Video Placeholder</p>
        </div> */}
        <video 
        width="790" 
        height="100" 
        controls 
        style={{ border: "2px solid black" }}
      >
        <source src="/src/assets/CV Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        {/* <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-300 rounded-full">
          <div className="h-2 bg-[#FB6816] rounded-full" style={{ width: '50%' }}></div>
        </div> */}
      </div>
      </div>
      {/* <div className="flex justify-between items-center mt-4">
        <div className="flex gap-2 mt-[-5px]">
          <PlayerButton icon="skip_previous" />
          <PlayerButton icon="play 2" />
          <PlayerButton icon="skip_next" />
          <PlayerButton icon="volume" />
        </div>
        <div className="flex gap-2 mt-[-5px]">
          <PlayerButton icon="settings" />
          <PlayerButton icon="zoom" />
        </div>
      </div> */}
    </div>
  );
}

function PlayerButton({ icon }) {
  return (
    <button className="w-8 h-8 bg-transparent rounded-full flex items-center justify-center">
      <img src={`/public/assetsvivit/${icon}.svg`} alt={icon} className="w-5 h-5" />
    </button>
  );
}
