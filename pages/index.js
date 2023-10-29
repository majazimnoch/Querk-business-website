import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Welcome from "../components/welcome";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Querk - fronty meblowe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <div className={styles.hero}>
            <Image
              src="/images/kitchen.jpg"
              alt="kitchen"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h1 className={styles.herotext}>Doskonałość w detalu - Wybierz Querk na drodze do perfekcyjnych mebli.</h1>
        </div>
      </main>

      <footer>
        <h1 className={styles.title}>
          Read <Link href="/posts/first-post">this page</Link>
        </h1>
        <Welcome />
      </footer>
    </div>
  );
}
