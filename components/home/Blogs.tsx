import Image from "next/image";
import Link from "next/link";

const Blogs = () => {
  return (
    <section className="bg-[#f9f9f9] py-8 px-4">
      {/* Header Section */}
      <article className="mb-10 text-center lg:text-left lg:ml-20">
  <h2 className="text-2xl font-bold text-[#333] mb-2">
    Recent Blogs and News
  </h2>
  <p className="text-sm text-[#666]">
    Lorem ipsum dolor sit amet consectetur adipiscing elit, sed eiusmod
  </p>
</article>




      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[90%] m-auto text-center gap-6">
        {/* Blog Card 1 */}
        <div className="bg-[#FFFDED] rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
          <Image
            src="/images/give.png"
            alt="giveaway"
            width={200}
            height={250}
            className="w-full h-auto object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-[#333] mb-2">
              Quick and Effective Fundraising Methods
            </h3>
            <p className="text-sm text-[#666] mb-4">
              Lorem ipsum dolor sit amet consectetur eiusmod tempor incididunt
              labore sed eiusmod tempor incididunt
            </p>
            <Link
              href="/"
              className="text-sm text-green-600 hover:underline font-medium"
            >
              Read More
            </Link>
          </div>
        </div>

        {/* Blog Card 2 */}
        <div className="bg-[#FFFDED] rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
          <Image
            src="/images/small-hand.png"
            alt="spread-hand-dua"
            width={200}
            height={250}
            className="w-full h-auto object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-[#333] mb-2">
              Feeding the Needy around you and the Community
            </h3>
            <p className="text-sm text-[#666] mb-4">
              Lorem ipsum dolor sit amet consectetur eiusmod tempor incididunt
              labore sed eiusmod tempor incididunt
            </p>
            <Link
              href="/"
              className="text-sm text-green-600 hover:underline font-medium"
            >
              Read More
            </Link>
          </div>
        </div>

        {/* Blog Card 3 */}
        <div className="bg-[#FFFDED] rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
          <Image
            src="/images/lantern.png"
            alt="light-noor"
            width={200}
            height={250}
            className="w-full h-auto object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-[#333] mb-2">
              Successful Ramadan Feeding Project at Iseyin
            </h3>
            <p className="text-sm text-[#666] mb-4">
              Lorem ipsum dolor sit amet consectetur eiusmod tempor incididunt
              labore sed eiusmod tempor incididunt
            </p>
            <Link
              href="/"
              className="text-sm text-green-600 hover:underline font-medium"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
