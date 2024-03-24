import { useRouter } from "next/router";
import { useEffect } from "react";


export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push('/accounts/register')

  }, [])

  return (
    <>
      <h1>
        Redirecting...
      </h1>
    </>
  )
}
