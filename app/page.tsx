import Link from "next/link"


export default function Home() {
  return (
    <main className="pl-5">
      <h1 className="text-3xl font-bold underline mt-5">Home!</h1>
      <ul>
        <li><Link href='/edit'>Edit Page</Link></li>
      </ul>
    </main>
  )
}
