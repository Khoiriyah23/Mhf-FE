const DonateOptions = () => {
    const options = [
      { id: 1, title: "SADAQAH", description: "Lorem ipsum dolor sit amet consectetur adipisc sed eiusmod tempor incididunt labore et enim anim" },
      { id: 2, title: "ZAKAT", description: "Lorem ipsum dolor sit amet consectetur adipisc sed eiusmod tempor incididunt labore et enim anim" },
      { id: 3, title: "RECURRING", description: "Lorem ipsum dolor sit amet consectetur adipisc sed eiusmod tempor incididunt labore et enim anim" },
      { id: 4, title: "ONE-TIME", description: "Lorem ipsum dolor sit amet consectetur adipisc sed eiusmod tempor incididunt labore et enim anim" },
    ];
  
    return (
      <section className="py-14 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Section Header */}
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Donate through Rewarding Options</h3>
          <p className="text-lg text-gray-600 mb-10">
            Gain rewards and serve humanity by giving charity through these options
          </p>
  
          {/* Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {options.map((option) => (
              <div
                key={option.id}
                className="bg-[#f1e4bc] bg-opacity-75 border border-[#F4ECC2] rounded-lg shadow-md p-6 text-center hover:shadow-lg transition"
              >
                {/* Circle Number */}
                <div className="w-12 h-12 mx-auto flex items-center justify-center bg-green-500 text-white font-bold text-lg rounded-full mb-4">
                  {option.id}
                </div>
  
                {/* Title */}
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {option.title}
                </h4>
  
                {/* Description */}
                <p className="text-gray-600 text-sm">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default DonateOptions;
  