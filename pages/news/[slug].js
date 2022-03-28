import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/news.module.css";

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/news/${slug}`);
  const singleNews = await res.json();
  console.log("v", singleNews);
  return {
    props: { 
      news: singleNews[0],
     },
  };
}

export default function SingleNews({ news }) {
  console.log({news},news)
  const router = useRouter();
  return (
    <Layout>
      <div className={styles.news}>
         <span>{news.date} {news.time} </span>
       <h1>{news.name}</h1>
       {news.image && (
         <div className={styles.image}>
           <Image src={news.image} width={900} height={600} alt='imgplayer' />
         </div>
       )}
       <p>{news.detail}</p>
       <Link href="/news" >
          <a className={styles.back}>Go Back</a>
       </Link>
       </div> 
    </Layout>
  );
}
