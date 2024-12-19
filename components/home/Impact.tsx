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

  // Logic to get visible stories (2 at a time)
  const visibleStories = [
    stories[currentSlide],
    stories[(currentSlide + 1) % stories.length]
  ];

  return (
    <section className="bg-[#F6F8F2] flex flex-col items-center justify-center">
      {/* Title Section */}
      <article className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[#3A3A3A]">
          Our Impact Stories
        </h1>
        <p className="text-[#5A5A5A] mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </article>

      {/* Carousel Section */}
      <div id="default-carousel" className="relative w-[70%]">
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {visibleStories.map((story, index) => (
            <div
              key={index}
              className="hidden duration-700 ease-in-out"
              style={{ display: index === 0 ? 'block' : 'none' }} // Show first story only initially
            >
              <div className="absolute block text-center p-20 bg-[#FFFBEC] rounded-lg shadow-lg">
                <p className="text-[#3A3A3A]">{story}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Slider controls */}
        <button
          onClick={handlePrev}
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
            </svg>
          </span>
        </button>
        <button
          onClick={handleNext}
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
};

export default Impact;
