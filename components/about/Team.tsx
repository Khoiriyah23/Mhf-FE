import Image from 'next/image';
import React from 'react';
import team from '../../public/images/team.png';

const TeamMembers = () => {
  const members = [
    { name: 'Muhammad Jumah', title: 'Founder', image: team },
    { name: 'Muhammad Jumah', title: 'Founder', image: team },
    { name: 'Muhammad Jumah', title: 'Founder', image: team },
    { name: 'Muhammad Jumah', title: 'Founder', image: team },
    { name: 'Muhammad Jumah', title: 'Founder', image: team },
    { name: 'Muhammad Jumah', title: 'Founder', image: team },
  ];

  return (
    <section className="py-10 px-4 w-[80%] m-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Meet Our Team Members</h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
          perspiciatis aliquid dicta pariatur velit sunt totam similique.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {members.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center overflow-hidden rounded-lg shadow-md"
          >
            {/* Image */}
            <div className="relative w-full">
              <Image
                src={member.image}
                alt={member.name}
                className="w-full object-cover"
              />
            </div>
            {/* Text Block */}
            <div className="w-full bg-[#FFFCDC] text-center p-4">
              <p className="text-gray-500">{member.title}</p>
              <h4 className="font-semibold">{member.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamMembers;
