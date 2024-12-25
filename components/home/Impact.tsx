'use client';
import React, { useState } from 'react';

const Impact = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const stories = [
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum facere tempore hic sed, recusandae officiis excepturi ea dolorem soluta cum ut dolorum fuga maxime quas nobis. In labore rem porro.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil tempora non tenetur! Cupiditate, velit veritatis aliquid reprehenderit impedit, quos dignissimos obcaecati commodi sed optio culpa sint magni cumque voluptates hic!",
    "Another impactful story that highlights our achievements and contributions to society, showing how our efforts have made a tangible difference in the lives of many.",
    "This is yet another impactful story showcasing the resilience and determination of those we have helped."
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? stories.length - 2 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === stories.length - 2 ? 0 : prev + 1));
  };

  const visibleStories = [
    stories[currentSlide],
    stories[(currentSlide + 1) % stories.length]
  ];

  return (
    <section className="bg-[#F6F8F2] mb-10 flex flex-col items-center justify-center">
      <article className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[#3A3A3A]">Our Impact Stories</h1>
        <p className="text-[#5A5A5A] mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </article>

      <div id="default-carousel" className="relative w-full sm:w-[80%] lg:w-[60%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {visibleStories.map((story, index) => (
            <div
              key={index}
              className="w-full h-[300px] sm:h-[250px] bg-[#FFFBEC] p-6 rounded-lg shadow-lg flex items-center justify-center text-center"
            >
              <p className="text-[#3A3A3A] text-sm sm:text-lg">{story}</p>
            </div>
          ))}
        </div>

        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 z-30 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-[#E2F4D8] rounded-full hover:bg-[#CBEAC4] focus:outline-none"
        >
          <svg className="w-4 h-4 text-[#6E7A6E]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 z-30 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-[#E2F4D8] rounded-full hover:bg-[#CBEAC4] focus:outline-none"
        >
          <svg className="w-4 h-4 text-[#6E7A6E]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 9l4-4-4-4" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Impact;
