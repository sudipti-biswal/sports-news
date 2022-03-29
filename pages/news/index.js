




import Link from "next/link";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import NewsItem from "@/components/NewsItem";
import styles from "@/styles/news.module.css"


// export async function getServerSideProps() {
//   const res = await fetch(`${API_URL}/api/news`);
//   const news = await res.json();
//   return {
//     props: {news},
//   };
// }


export async function getStaticProps() {
  console.log(API_URL)
  const res = await fetch(`${API_URL}/api/news`);

  const news = await res.json();
  return {
    props: {news},
    revalidate:1,
  };
}


export default function News({ news }) {
  // console.log("news",news)

  return (
    <div>
      <Layout>
        <h1>Latest News</h1>
        {news.length === 0 && <h3>No News</h3>}
       {news.map((item)=>(
         <NewsItem key={item.id} news={item} />
       ))}
       <Link href="/">
        <a className={styles.back}>Go Back</a> 
       </Link>
      </Layout>
    </div>
  );
}
