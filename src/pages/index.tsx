import { SignIn, SignUp } from "@clerk/nextjs";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>JournalChirp</title>
        <meta name="description" content="Journaling as just chirping" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <SignIn path="/sign-in" />
        <h1 className="text-4xl text-white">Welcome to JournalChirp</h1>
        <p className="text-white">
          This is a journaling app that is just like chirping
        </p>
        <SignUp />
      </main>
    </>
  );
}
