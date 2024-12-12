import Image from 'next/image';

const Story = () => {
  return (
    <section className="bg-[#FCFCDC] bg-opacity-80 py-16 px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12"> 
        {/* Text Content */}
        <div className="md:w-1/2">
          <h3 className="text-4xl font-bold leading-relaxed mb-8">
            Muslim Helper’s Foundation is a <span className="text-green-600">charitable</span> initiative committed to 
            uplifting <span className="text-yellow-600">humanity</span> through compassion with principles, guidings, and teachings of 
            <span className="text-green-500"> Islam</span>.
          </h3>
          <h6 className="text-xl font-semibold mb-6"> 
            Story & Background
          </h6>
          <p className="text-gray-700 leading-relaxed text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae obcaecati 
            ducimus possimus qui, enim nam accusantium itaque aliquam sapiente reiciendis recusandae cum deleniti 
            voluptatibus nemo iusto perspiciatis eum a quis?
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <Image 
            src="/images/hands.png" 
            alt="Hand Spread" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Story;
