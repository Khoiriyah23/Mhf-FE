import React from 'react';
import Image from 'next/image';

const Page = ({ params }: { params: { id: number } }) => {
  const id = Number(params.id);

  const programs = [
    {
      id: 1,
      imageSrc: "/images/distribute.png",
      title: "Support the annual Ramadan Feeding Program",
      raised: 500000,
      goal: 1000000,
      buttonText: "Donate",
    },
    {
      id: 2,
      imageSrc: "/images/baby-smile.png",
      title: "Save Abdullahi and help him fight against Cancer",
      raised: 500000,
      goal: 500000,
      buttonText: "Donate",
    },
    {
      id: 3,
      imageSrc: "/images/mosque.png",
      title: "Contribute in Masjid Construction at Apata",
      raised: 500000,
      goal: 800000,
      buttonText: "Donate",
    },
    {
      id: 4,
      imageSrc: "/images/distribute.png",
      title: "Support the annual Ramadan Feeding Program",
      raised: 200000,
      goal: 500000,
      buttonText: "Donate",
    },
    {
      id: 5,
      imageSrc: "/images/distribute.png",
      title: "Save Abdullahi and help him fight against Cancer",
      raised: 300000,
      goal: 400000,
      buttonText: "Donate",
    },
    {
      id: 6,
      imageSrc: "/images/distribute.png",
      title: "Contribute in Masjid Construction at Apata",
      raised: 700000,
      goal: 1000000,
      buttonText: "Donate",
    },
  ];

  // Find the program that matches the id
  const program = programs.find((program) => program.id === id);
  
  // Handle case when no program matches the id
  if (!program) {
    return <div>Program not found.</div>;
  }

  


  return (
    <div className='w-4/6 mx-auto mt-32'>
      <h1 className='text-center text-2xl font-bold mb-16'>Donation Process</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Left Section */}
        <div>
          <div className='w-[579px] h-[289px] relative '>
            <Image
              src={program.imageSrc}
              alt={program.title}
              fill
              objectFit='c'
              className='absolute rounded-2xl'
            />
          </div>
          <p className='text-xl font-semibold py-4 leading-10'>{program.title}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            ratione sequi enim, quos voluptate rerum, ipsum, suscipit numquam
            minus architecto amet vero distinctio consequatur voluptatibus
            excepturi dolorum odio laborum quae!
          </p>
        </div>

        {/* Right Section */}
        <div>
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 h-2 rounded-full mt-3">
            <div
              className="h-2 bg-green-500 rounded-full"
              style={{
                width: `${(program.raised / program.goal) * 100}%`,
              }}
            ></div>
          </div>
          <div>Donate Using Paystack</div>
          <div>
            <p>Or</p>
            <p>Direct Transfer to Account details below</p>
            <div>
              <p>Account Name</p>
              <p>:</p>
              <p>Muhammed Jummah</p>
            </div>
            <div>
              <p>Account Number</p>
              <p>:</p>
              <p>04563289</p>
            </div>
            <div>
              <p>Bank Name</p>
              <p>:</p>
              <p>Jaiz Bank</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
