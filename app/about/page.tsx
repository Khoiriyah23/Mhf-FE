import HowItWorks from '@/components/about/How'
import MissionAndVision from '@/components/about/Mission'
import React from 'react'

const AboutUS = () => {
  return (
    <>
    <section className="flex items-center justify-center mb-20 bg-gray-100 p-[80px]">
    <div
      style={{ backgroundImage: 'url("/images/date.jpeg")' }}
      className="bg-center bg-no-repeat bg-cover w-[80%] h-[70vh] rounded-xl overflow-hidden shadow-lg flex items-center justify-center bg-[#141B069E] bg-blend-multiply"
    >
      <div className="text-center rounded-lg p-8 lg:p-16 max-w-3xl">
        <h1 className="lg:text-4xl text-2xl text-white font-bold mb-6 leading-snug">
          About Us
        </h1>
        <p className="lg:text-lg text-base text-gray-200 mb-8">
            Muslim Helper’s Foundation as a charity initiative
        </p>
        
      </div>
    </div>
  </section>

  <HowItWorks />
  <MissionAndVision />
    </>
    

  
  )
}

export default AboutUS
