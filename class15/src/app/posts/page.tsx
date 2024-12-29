import Link from "next/link";

export default async function Home() {

  const url = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  const response = await url.json();

  return (

    <div className="bg-black font-extrabold italic pb-24 min-h-screen">

      <h1 className="text-center text-4xl cursor-pointer underline hover:underline text-sky-800 hover:text-blue-500 mb-10 py-14">Posts</h1>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 gap-6">

        {response.map((posts: any) => (

          <div key={posts.id} className="bg-black border border-cyan-500 p-4 rounded-md">

            <Link href={`/posts/${posts.id}`}>

              <h1 className="text-lg font-extrabold italic hover:underline text-sky-800 hover:text-blue-500">

                {posts.id} &nbsp; {posts.title}

              </h1>
            </Link>
          </div>
        ))}
      </div>
    </div>

  );

}


