
import  Link from 'next/link'
import Layout from '@/components/Layout'
export default function About() {
    
  return (
    <Layout>
        <h1>about</h1>
        <p>A website that brings you latest news about sports(cricket,football,f1,tennis,badminton,golf)</p>
        <Link href='/' >Home</Link>
    </Layout>
  )
}
