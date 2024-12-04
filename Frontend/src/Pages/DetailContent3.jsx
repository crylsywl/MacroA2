import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Elements/Navbar/Navbar';
import RecommendedContent from './video/RecommendedContent';
import getAllContent from '../Service/getAllContent';
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";

const DetailContent1 = (  ) => {
  
    const {slug} = useParams()
    const [content, setContent] = useState()

  useEffect(() => {
    const allContents = getAllContent()
    const content = allContents.find(content => content.slug === slug)
    setContent(content)
  },[])

  if(!content) {
    return <>
              <h1 className="flex w-full h-full text-center items-center justify-center text-4xl text-pink-600">PRODUCT NOT FOUND.</h1>
          </>
  }

    return (
        <div className="bg-[#fffff0] min-h-screen">
        <Navbar />
        <main className="mt-[70px] flex flex-col mx-[150px] px-4">
          {/* Section utama dengan VideoPlayer dan LessonInfo */}
          <div className="bg-[#FB6816] rounded-3xl p-8 mb-[20px] h-fit min-w-[1175px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[500px]" >
              {/* VideoPlayer */}
              <div className="w-[784px]">
                  <div className="bg-[#fffff0] rounded-lg shadow-md p-4 w-full h-auto">
                      <div className="aspect-w-16 aspect-h-9 rounded-lg mb-4 h-[410px]">
                          <div className="relative w-full h-full pb-[45.75%] rounded-lg mb-4 bg-black">
                              {/* <video 
                              width="790" 
                              height="100" 
                              controls 
                              style={{ border: "2px solid black"}}
                              >
                              <source src={content.video1} type="video/mp4" />
                              Your browser does not support the video tag.
                               </video> */}
                               <ReactPlayer
                                        url={content.video3}
                                        controls
                                        width="full"
                                        height="410px"
                                    />
                          </div>
                      </div>
                  </div>
              </div>
              {/* LessonInfo */}
              <div className="">
              <div className="space-y-4">
                  <LessonSection 
                      number={1} 
                      title={content.content1} 
                      isActive={true}
                      To={content.slug}
                  />
                  <LessonSection 
                      number={2} 
                      title={content.content2} 
                      isActive={true}
                      To={content.slug}
                  />
                  <LessonSection 
                      number={3} 
                      title={content.content3} 
                      To={content.slug}
                  />
              </div>
              </div>
            </div>
          </div>
          {/* Course Description */}
          <div>
          <div className="max-w-[1137px]">
              <h1 className="text-3xl font-semibold mb-4">{content.title}</h1>
              <p className="text-lg mb-8">
              {content.description}
              </p>
          </div>
          </div>
          {/* Recommended Content */}
          
          
        </main>
        <div>
          <RecommendedContent />
          </div>
      </div>
    );
}

export default DetailContent1;


function LessonSection({ number, To, title, isActive = false }) {
    const [isChecked, setIsChecked] = useState(isActive);
  
    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
  
    return (
      <Link to={`/elearning${number}/${To}`}> 
      <div 
        className={`bg-[#FFFFF0] rounded-lg shadow mb-[20px] p-4 flex items-center justify-between ${
          isChecked ? 'border-2 border-[#4c37ee]' : 'border-gray-300'
        }`}
        style={{ width: '290px' }}
      >
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-black">{number}.</span>
          <p className="text-base font-semibold text-black">{title}</p>
        </div>
        <input 
          type="checkbox" 
          className="w-6 h-6 border-2 border-orange-500 rounded-md"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </div>
      </Link>
      
    );
  }