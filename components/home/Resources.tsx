import React from 'react';
import Button from '../Button';

const Resources = () => {
  // Example data for articles (2 cards)
  const articles = [
    {
      id: 1,
      imageSrc: '/images/dates.png',
      title: 'Simple Acts of Kindness',
    },
    {
      id: 2,
      imageSrc: '/images/reading.png',
      title: 'Quranic Verses and Hadiths on Charity In Islam',
      description: 'Check out Quranic verses, hadiths, and sunnahs on charity.',
    },
  ];

  return (
    <section className="px-8 py-12 bg-gray-100">
      <article className="text-center mb-12">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Our Articles and Islamic Resources
        </h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At quia,
          laudantium obcaecati, consectetur beatae unde repellat sint.
        </p>
      </article>

      {/* Responsive grid for articles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div
            key={article.id}
            className="relative h-64 rounded-lg bg-cover bg-center shadow-lg"
            style={{ backgroundImage: `url(${article.imageSrc})` }}
          >
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
              <h3 className="text-lg font-semibold">{article.title}</h3>
              {article.description && (
                <p className="text-sm mt-2">{article.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Button
          type="button"
          title="View All"
          icon=""
          variant="green"
          className="px-6 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 transition"
        />
      </div>
    </section>
  );
};

export default Resources;
