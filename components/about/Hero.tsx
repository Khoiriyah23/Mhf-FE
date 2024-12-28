import React from "react";

const AboutHero = () => {
  return (
    <section className="flex items-center justify-center bg-gray-100 p-8 sm:p-12 mt-12 lg:p-[80px]">
      <div
        style={{ backgroundImage: 'url("/images/date.jpeg")' }}
        className="bg-center bg-no-repeat bg-cover w-full lg:w-[80%] h-[50vh] sm:h-[60vh] lg:h-[70vh] rounded-lg overflow-hidden shadow-lg flex items-center justify-center bg-[#141B069E] bg-blend-multiply"
      >
        <div className="text-center rounded-lg p-4 sm:p-8 lg:p-16 max-w-3xl">
          <h1 className="text-xl sm:text-2xl lg:text-4xl text-white font-bold mb-4 sm:mb-6 leading-snug">
            About Us
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-200 mb-6 sm:mb-8">
            Muslim Helper’s Foundation as a charity initiative
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
