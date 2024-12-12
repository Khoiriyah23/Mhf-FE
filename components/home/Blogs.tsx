import Image from "next/image";
import Link from "next/link";
import styles from "../blogs.module.css"

const Blogs = () => {
  return (
    <section className={styles.blogSection}>
      <article className={styles.header}>
        <h2>Recent Blogs and News</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit, sed eiusmod
        </p>
      </article>

      <div className={styles.blogGrid}>
        <div className={styles.blogCard}>
          <Image
            src="/images/give.png"
            alt="giveaway"
            width={400}
            height={250}
            className={styles.blogImage}
          />
          <h3>Quick and Effective Fundraising Methods</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur eiusmod tempor incididunt
            labore sed eiusmod tempor incididunt
          </p>
          <Link href="/">Read More</Link>
        </div>

        <div className={styles.blogCard}>
          <Image
            src="/images/small-hand.png"
            alt="spread-hand-dua"
            width={400}
            height={250}
            className={styles.blogImage}
          />
          <h3>Feeding the Needy around you and the Community</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur eiusmod tempor incididunt
            labore sed eiusmod tempor incididunt
          </p>
          <Link href="/">Read More</Link>
        </div>

        <div className={styles.blogCard}>
          <Image
            src="/images/lantern.png"
            alt="light-noor"
            width={400}
            height={250}
            className={styles.blogImage}
          />
          <h3>Successful Ramadan Feeding Project at Iseyin</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur eiusmod tempor incididunt
            labore sed eiusmod tempor incididunt
          </p>
          <Link href="/">Read More</Link>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
