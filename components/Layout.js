import Head from "next/head"
import styles from "@/styles/Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";
import Hero from "./Hero";
export default function Layout({title,keywords,description,children}) {
  const router=useRouter();
  return (
    <div>
      <Head>
      <title>{title}</title>
      <meta name="description" content={description}/>
      <meta name="keywords" content={keywords}/>
      </Head>
      <Header/>
    { router.pathname === '/' && <Hero/>}
      <div className={styles.container}>
         {children}
      </div>
      <Footer/>
      
    </div>
  )
}
Layout.defaultProps={
    title:"Sports News | Find Latest Sports News",
    description:"A website that brings you latest news about sports",
    keywords:"cricket,football,f1,tennis,badminton,golf"
}