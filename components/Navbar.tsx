import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const session = await auth();

  return (
    <>
      <header className="px-5 py-3 font-work-sans bg-white shadow-sm">
        <nav className="flex justify-between items-center">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={144} height={30} />
          </Link>

          <div className="flex items-center gap-5 text-black">
            {session && session?.user ? (
              <>
                <Link href="/startup/create">
                  <span>Create</span>
                </Link>

                <button
                  onClick={async () => {
                    "use server";
                    await signOut({ redirectTo: "/" });
                  }}
                >
                  Sign out
                </button>

                <button href={`user/${session?.id}`}>
                  <span>{session?.user?.name}</span>
                </button>
              </>
            ) : (
              <form
                action={async () => {
                  "use server";
                  await signIn();
                }}
              >
                <button type="submit">Sign in</button>
              </form>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
