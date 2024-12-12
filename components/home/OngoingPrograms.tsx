import Image from 'next/image';
import React from 'react';
import Button from '../Button';

const OngoingPrograms = () => {
  // Example data for programs (6 cards)
  const programs = [
    {
      id: 1,
      imageSrc: '/images/distribute.png',
      title: 'Support the annual Ramadan Feeding Program',
      raised: 500000,
      goal: 1000000,
      buttonText: 'Donate',
    },
    {
      id: 2,
      imageSrc: '/images/baby-smile.png',
      title: 'Save Abdullahi and help him fight against Cancer',
      raised: 500000,
      goal: 500000,
      buttonText: 'Donate',
    },
    {
      id: 3,
      imageSrc: '/images/mosque.png',
      title: 'Contribute in Masjid Construction at Apata',
      raised: 500000,
      goal: 800000,
      buttonText: 'Donate',
    },
    {
      id: 4,
      imageSrc: '/images/ramadan-feeding.jpg',
      title: 'Support the annual Ramadan Feeding Program',
      raised: 200000,
      goal: 500000,
      buttonText: 'Donate',
    },
    {
      id: 5,
      imageSrc: '/images/save-abdullah.jpg',
      title: 'Save Abdullahi and help him fight against Cancer',
      raised: 300000,
      goal: 400000,
      buttonText: 'Donate',
    },
    {
      id: 6,
      imageSrc: '/images/masjid-construction.jpg',
      title: 'Contribute in Masjid Construction at Apata',
      raised: 700000,
      goal: 1000000,
      buttonText: 'Donate',
    },
  ];

  return (
    <section className="px-8 py-12 bg-gray-100">
      <article className="text-center mb-12">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Our Ongoing Programs</h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam,
          autem beatae. Temporibus id natus hic fuga qui animi, voluptas voluptatum
          porro repellat dolorem praesentium aliquam ad distinctio perspiciatis
          autem modi.
        </p>
      </article>

      {/* Responsive grid for 6 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {programs.map((program) => (
          <div key={program.id} className="bg-white p-4 rounded-lg shadow-lg">
            <Image
              src={program.imageSrc}
              alt={program.title}
              width={400}
              height={250}
              className="rounded-t-lg"
            />
            <h6 className="text-lg font-semibold text-gray-800 mt-4">{program.title}</h6>

            {/* Donation progress */}
            <div className="w-full bg-gray-200 h-2 rounded-full mt-3">
              <div
                className="h-2 bg-green-500 rounded-full"
                style={{ width: `${(program.raised / program.goal) * 100}%` }}
              ></div>
            </div>

            {/* Amount raised and donate button */}
            <div className="flex justify-between items-center mt-4">
              <span className="text-gray-600 text-sm">
                Raised: #{program.raised.toLocaleString()}
              </span>
              <Button
                type="button"
                title={program.buttonText}
                icon=""
                variant="green"
                className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 transition"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OngoingPrograms;
