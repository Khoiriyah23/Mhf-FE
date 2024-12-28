import Image from 'next/image'
import React from 'react'
import hands from '../../public/images/hands.png'

const MissionAndVision = () => {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <section className="max-w-7xl mx-auto px-4"> {/* Center content and set max width */}
        {/* Header Section */}
        <div className="text-center mb-12">
          <h4 className="text-sm  text-[#637242] mb-2">
          MISSION & VISION
          </h4>
          <h2 className="text-3xl text-[#333228] mb-4">
            Muslim Helper&apos;s Foundation Aspirations
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolor
            voluptates quod totam accusamus eligendi quae eius expedita facere.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Vision */} 
          
          {/* Vision Image */}
          <div className="flex justify-center w-full md:w-[70%] mx-auto">
            <Image
              src={hands}
              alt="Hand Spread"
              className="w-full h-auto rounded-md object-cover"
              style={{ maxHeight: '450px', height: '300px' }} // Increase height for larger screens
            />
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-xl text-[#333228] mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit ,<br /> Dolorem
              voluptatum error illo nam, minima veritatis nihil quaerat quis
              distinctio <br /> voluptate tempora iusto, quae non vero qui enim sit
              facilis modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dignissimos 
              impedit, excepturi,<br /> quaerat id vero a soluta earum, fugit aut perferendis possimus 
              corporis quis nam sint veniam? Amet, aperiam doloribus. Lorem ipsum dolor sit amet, consectetur
               adipisicing elit. Aperiam,<br /> repellat odit. Commodi, soluta. Dolor totam necessitatibus, quas
                maiores est quaerat. Quo inventore <br /> quas quae esse libero 
                veritatis, illo cum reiciendis?
            </p>
          </div>

         

          <div className="flex justify-center w-full md:w-[70%] mx-auto">
            <Image
              src={hands}
              alt="Hand Spread"
              className="w-full h-auto rounded-md object-cover"
              style={{ maxHeight: '450px', height: '300px' }} // Adjust height for larger screens
            />
          </div>

          {/* Mission */}
          <div className="text-center sm:text-left">
            <h2 className="text-xl text-[#333228] mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
              voluptatum error illo nam, minima veritatis nihil quaerat quis
              distinctio voluptate tempora iusto, quae non vero qui enim sit
              facilis modi.
            </p>
          </div>

          {/* Second Image */}
          
        </div>
      </section>
    </section>
  )
}

export default MissionAndVision
