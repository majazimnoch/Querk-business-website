import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Querk - fronty meblowe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Read <Link href="/posts/first-post">this page</Link>
        </h1>
        <div>
          <Image
          src="/images/kitchen.jpg"
          alt="kitchen"
          layout="fill"
          objectFit="cover"
          />
        </div>
      </main>

      <footer>
      </footer>
    </div>
  );
}
