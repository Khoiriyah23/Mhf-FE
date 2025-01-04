import Image from "next/image";
import Button from "../Button";
import Link from "next/link";

const OngoingDonation = () => {
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

  return (
    <section className="bg-gray-100 mt-20 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <article className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Donate to Our Programs and Causes
          </h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam,
            autem beatae. Temporibus <br /> id natus hic fuga qui animi, voluptas
            voluptatum porro repellat dolorem praesentium aliquam ad distinctio
            perspiciatis autem modi.
          </p>
        </article>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <Link href={`/donation/${program.id}`} key={program.id}>
              <div className="bg-[#ececdf] rounded-lg shadow-lg border-[#E9D79B] hover:shadow-xl transition-shadow cursor-pointer">
                {/* Image */}
                <div className="overflow-hidden">
                  <Image
                    src={program.imageSrc}
                    alt={program.title}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>

                <div className="p-6">
                  {/* Title */}
                  <h6 className="text-lg font-semibold text-gray-800 mt-4">
                    {program.title}
                  </h6>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 h-2 rounded-full mt-3">
                    <div
                      className="h-2 bg-green-500 rounded-full"
                      style={{
                        width: `${(program.raised / program.goal) * 100}%`,
                      }}
                    ></div>
                  </div>

                  {/* Details */}
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
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OngoingDonation;
