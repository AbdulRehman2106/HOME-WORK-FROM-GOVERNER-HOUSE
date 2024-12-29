import Link from "next/link";

export default async function Home() {

  const url = await fetch(`https://jsonplaceholder.typicode.com/comments`);

  const response = await url.json();

  return (

    <div className="bg-black font-extrabold italic pb-24 min-h-screen">

      <h1 className="text-center text-4xl md:text-5xl cursor-pointer underline hover:underline text-green-800 hover:text-green-500 mb-10 py-14">Comments</h1>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {response.map((comments: any) => (

          <div key={comments.id} className="bg-black border border-lime-500 p-4 rounded-md">

            <Link href={`/comments/${comments.id}`}>

              <h1 className="text-lg md:text-xl font-extrabold italic hover:underline text-emerald-800 hover:text-emerald-500">

                {comments.id} &nbsp; {comments.name}

              </h1>
            </Link>
          </div>
        ))}
      </div>
    </div>

  );

}


