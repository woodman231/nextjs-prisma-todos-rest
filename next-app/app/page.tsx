import Link from "next/link"

export default function Home() {
  return (
    <main className="p-2">
      <h1 className="text-3xl">Welcome</h1>
      <p>
        <Link className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="/todos">Manage Todos</Link>
      </p>
    </main>
  )
}
