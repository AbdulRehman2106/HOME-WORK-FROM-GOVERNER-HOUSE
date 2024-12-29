import Link from "next/link";

export default function Navbar() {

  return (

    <div className="flex justify-center items-center w-full bg-black">

      <div className="text-center mt-16 w-full px-4">

        <h1 className="text-4xl font-extrabold italic text-slate-700 hover:text-zinc-600 underline hover:underline cursor-pointer">API, <br /> Dynamic Routing, <br /> Rendering Practice</h1>

        <div className="flex flex-wrap justify-center mt-16 gap-8 font-extrabold italic pb-5 transition">

          <Link href="/">
          
            <h1 className="cursor-pointer text-2xl text-red-700 hover:text-red-500 underline hover:underline">Home</h1>
          </Link>

          <Link href="/posts">

            <h1 className="cursor-pointer text-2xl text-cyan-700 hover:text-cyan-400 underline hover:underline">Posts</h1>
          </Link>

          <Link href="/comments">

            <h1 className="cursor-pointer text-2xl text-emerald-700 hover:text-emerald-500 underline hover:underline">Comments</h1>
          </Link>

          <Link href="/albums">

            <h1 className="cursor-pointer text-2xl text-[#d4ac0d] hover:text-[#ffd700] underline hover:underline">Albums</h1>
          </Link>

          <Link href="/photos">

            <h1 className="cursor-pointer text-2xl text-purple-800 hover:text-purple-600 underline hover:underline">Photos</h1>
          </Link>

          <Link href="/todos">

            <h1 className="cursor-pointer text-2xl text-pink-700 hover:text-pink-500 underline hover:underline">Todos</h1>
          </Link>

          <Link href="/users">
          
            <h1 className="cursor-pointer text-2xl text-zinc-700 hover:text-white underline hover:underline">Users</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
