import React from 'react';
import Button from '../Button';

const Resources = () => {
  const articles = [
    {
      id: 1,
      imageSrc: '/images/date.jpeg',
      title: 'Simple Acts of Kindness',
    },
    {
      id: 2,
      imageSrc: '/images/readings.jpeg',
      title: 'Quranic Verses and Hadiths on Charity In Islam',
    },
  ];

  return (
    <section className="px-4 py-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Header with View All Button */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
              Our Articles and Islamic Resources
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              Explore our articles and resources to learn more.
            </p>
          </div>
          <Button
            type="button"
            title="View All"
            icon=""
            variant="green"
            className="px-4 sm:px-6 py-2 text-sm sm:text-base text-white bg-green-500 rounded-md hover:bg-green-600 transition"
          />
        </div>

        {/* Cards Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="relative overflow-hidden shadow-lg rounded-lg"
            >
              <div
                className="h-[300px] sm:h-[500px] w-full bg-cover bg-center rounded-lg"
                style={{ backgroundImage: `url(${article.imageSrc})` }}
              >
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                  <h3 className="text-sm sm:text-lg font-semibold text-white">
                    {article.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
