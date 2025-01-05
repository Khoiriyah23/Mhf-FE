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
        <div className='grid grid-cols-1 md:grid-cols-2'>

            {/* Left Section */}
            <div>
                <div className='w-full'>
                    <Image
                    src={program.imageSrc}
                    alt={program.title}
                    width={480}
                    height={20}
                    className=' rounded-2xl'
                    />
                </div>
                <p className='text-xl font-semibold py-4'>{program.title}</p>
                <p className='leading-loose w-11/12'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                    ratione sequi enim, quos voluptate rerum, ipsum, suscipit numquam
                    minus architecto amet vero distinctio consequatur voluptatibus
                    excepturi dolorum odio laborum quae!
                </p>
            </div>

            {/* Right Section */}
            <div>

                           {/* Progress Bar Section*/}
                <div className='w-full h-52 bg-donationBg flex flex-col justify-center items-center px-8'>        
                    <div className="w-full bg-gray-200 h-5 rounded-full mt-3">
                        <div className="h-5 bg-progressiveBar rounded-full" style={{ width: `${(program.raised / program.goal) * 100}%`}}></div>
                    </div>
                    <div className='flex justify-between w-full mt-4 text-lg text-progressiveText'>
                        <p>Raised {program.raised}</p>
                        <p>Target {program.goal}</p>
                    </div>
                </div>  

                <div className='mt-10 bg-progressiveBar p-4 text-center rounded-3xl text-white text-xl'>Donate Using Paystack</div>
                <div className='w-5/6 mx-auto'>
                    <p className='my-5 text-center'>Or</p>
                    <p className='text-xl font-semibold'>Direct Transfer to Account details below</p>
                    <div className='flex justify-between mt-4'>
                        <p>Account Name:</p>
                        <p>Muhammed Jummah</p>
                    </div>
                    <div className='flex justify-between mt-4'>
                        <p>Account Number:</p>
                        <p>04563289</p>
                    </div>
                    <div className='flex justify-between mt-4'>
                        <p>Bank Name:</p>
                        <p>Jaiz Bank</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Page;
