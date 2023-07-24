import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home Page</h1>
      <h1>Server Side Render</h1>
      {/* renders session data for user after login */}
      <pre>{JSON.stringify(session)}</pre>
      <a href="/comments">comments</a>
    </main>
  )
}
