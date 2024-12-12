import Image from "next/image";
import Link from "next/link";

const Blogs = () => {
  return (
    <section>
      <article>
        <h2>Recent Blogs and News</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </article>

      <div>
        <Image src="/images/give.png" alt="giveaway" width={100} height={30} />
        <h3>Quick and Effective Fundraising Methods</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nemo
          maiores magnam debitis officia atque? Iste voluptatum nobis doloribus
          cum sint ipsum quisquam voluptatibus error rem, aliquam eos
          reiciendis. Eaque?
        </p>

        <Link href="/">Read More...</Link>
      </div>

      <div>
        <Image
          src="/images/small-hand.png"
          alt="spread-hand-dua"
          width={100}
          height={30}
        />
        <h3>Feeding the Needy around you and the Community</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nemo
          maiores magnam debitis officia atque? Iste voluptatum nobis doloribus
          cum sint ipsum quisquam voluptatibus error rem, aliquam eos
          reiciendis. Eaque?
        </p>

        <Link href="/">Read More...</Link>
      </div>

      <div>
        <Image
          src="/images/lantern.png"
          alt="light-noor"
          width={100} 
          height={30}
        />
        <h3>Successful Ramadan Feeding Project at Iseyins</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nemo
          maiores magnam debitis officia atque? Iste voluptatum nobis doloribus
          cum sint ipsum quisquam voluptatibus error rem, aliquam eos
          reiciendis. Eaque?
        </p>

        <Link href="/">Read More...</Link>
      </div>
    </section>
  );
};

export default Blogs;
