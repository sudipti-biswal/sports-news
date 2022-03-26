import { useRouter } from "next/router"
import Layout from "@/components/Layout";

export default function SingleNews() {
    const router=useRouter();
    console.log("router",router)
  return (
    <Layout>       
     {router.query.slug}
    </Layout>
  )
}
