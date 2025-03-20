"use client"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button className="border rounded px-4 py-2 m-5 hover:bg-gray-700 active:bg-gray-800"  onClick={() => signOut()}>Sign out</button>
    </>
  }
  return <>
    Not signed in <br/>
    <button className="border rounded px-4 py-2 m-5 hover:bg-gray-700 active:bg-gray-800" onClick={() => signIn()}>Sign in</button>
  </>
}