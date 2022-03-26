import Head from "next/head"
import styles from "@/styles/Layout.module.css"
export default function Layout({title,keywords,description,children}) {
  return (
    <div>
      <Head>
      <title>{title}</title>
      <meta name="description" content={description}/>
      <meta name="keywords" content={keywords}/>
      </Head>
      <div className={styles.container}>
         {children}
      </div>
      
    </div>
  )
}
Layout.defaultProps={
    title:"Sports News | Find Latest Sports News",
    description:"A website that brings you latest news about sports",
    keywords:"cricket,football,f1,tennis,badminton,golf"
}