import React from 'react';
import Button from '../Button';
import Link from 'next/link';

const Join = () => {
  return (
    <section className="flex items-center justify-center mb-20 bg-gray-100">
      <div
        style={{ backgroundImage: 'url("/images/Join.jpg")' }}
        className="bg-center bg-no-repeat bg-cover w-[80%] h-[70vh] rounded-xl overflow-hidden shadow-lg flex items-center justify-center bg-[#141B069E] bg-blend-multiply"
      >
        <div className="text-center rounded-lg p-8 lg:p-16 max-w-3xl">
          <h1 className="lg:text-4xl text-2xl text-white font-bold mb-6 leading-snug">
            Muslim Helper’s Foundation Community
          </h1>
          <p className="lg:text-lg text-base text-gray-200 mb-8">
            Be a part of the community and get updates, share programs and
            resources, and get the chance to volunteer and support opportunities and events.
          </p>
          <Link href='/signup'>
            <Button 
              type="button" 
              title="Join Us" 
              icon="" 
              variant="green"
              className="px-6 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 transition"
            />
          </Link>
          
        </div>
      </div>
    </section>
  );
};

export default Join;
