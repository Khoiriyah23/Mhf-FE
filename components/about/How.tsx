import Image from 'next/image';
import hands from "../../public/images/hands.png";

const HowItWorks = () => {
  return (
    <section className="bg-gray-100">
      <section className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16 py-12 px-4 sm:px-8 lg:px-20 w-[90%] m-auto">
        
        {/* Image Section */}
        <div className="w-full lg:w-[40%]">
          <Image
            src={hands}
            alt="Hand Spread"
            className="w-full h-auto rounded-md lg:rounded-lg object-cover"
            style={{ maxHeight: '450px', height: '300px' }} // Increase height for larger screens
          />
        </div>

        {/* Text Content Section */}
        <div className="w-full lg:w-[60%] space-y-6">
          <h4 className="text-green-700 font-semibold text-sm lg:text-base uppercase">
            HOW IT WORKS
          </h4>
          <h1 className="text-gray-800 font-bold text-2xl lg:text-3xl leading-snug">
            Muslim Helper’s Foundation works through these ways
          </h1>
          <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint accusantium modi omnis perspiciatis odit voluptas, beatae reiciendis, nisi rem esse amet voluptates culpa iure, alias praesentium officia ipsum corrupti aliquam.
          </p>

          {/* Key Points */}
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span className="text-green-500 text-xl">&#10003;</span>
              <span className="text-gray-700 text-sm lg:text-base">
                Fundraising for the needy regardless of religion
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-500 text-xl">&#10003;</span>
              <span className="text-gray-700 text-sm lg:text-base">
                Community building to volunteer, awareness, and donation
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-500 text-xl">&#10003;</span>
              <span className="text-gray-700 text-sm lg:text-base">
                Charitable activities backed up by Islamic values
              </span>
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default HowItWorks;
