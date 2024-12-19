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
    <section className="bg-[#F6F8F2] py-16 px-8 flex flex-col items-center justify-center">
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
      <div className="flex items-center justify-center gap-4 w-full">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="bg-[#EFF8E8] text-[#6A8F4A] w-14 h-14 flex items-center justify-center rounded-full shadow-md"
          aria-label="Previous Slide"
        >
          {"<"}
        </button>

        {/* Cards */}
        <div className="flex gap-4 w-4/5 items-center justify-center">
          {visibleStories.map((story, index) => (
            <div
              key={index}
              className="bg-[#FFFBEC] rounded-lg shadow-lg flex-1 h-80 p-8 flex items-center justify-center text-[#3A3A3A] transition-all duration-500"
            >
              <p>{story}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="bg-[#3A3A3A] text-white w-14 h-14 flex items-center justify-center rounded-full shadow-md"
          aria-label="Next Slide"
        >
          {">"}
        </button>
      </div>
    </section>
  );
};

export default Impact;
