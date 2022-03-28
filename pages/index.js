
import Link from "next/link";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import NewsItem from "@/components/NewsItem";

// export async function getServerSideProps() {
//   const res = await fetch(`${API_URL}/api/news`);
//   const news = await res.json();
//   return {
//     props: {news},
//   };
// }


export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/news`);
  const news = await res.json();
  return {
    props: {news:news.slice(0,5)},
    revalidate:1,
  };
}


export default function Home({ news }) {
  console.log("news",news)

  return (
    <div>
      <Layout>
        <h1> News</h1>
        {news.length === 0 && <h3>No News</h3>}
       {news.map((item)=>(
         <NewsItem key={item.id} news={item} />
       ))}
       {news.length > 0 && (
         <Link href="/news">
           <a className="btn-secondary" >View All News</a>
         </Link>
       )}
       
      </Layout>
    </div>
  );
}
