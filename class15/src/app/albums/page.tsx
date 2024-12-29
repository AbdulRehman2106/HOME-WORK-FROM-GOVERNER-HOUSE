import Link from "next/link";

export default async function Home() {

  const url = await fetch(`https://jsonplaceholder.typicode.com/albums`);

  const response = await url.json();

  return (

    <div className="bg-black font-extrabold italic pb-24 min-h-screen">

      <h1 className="text-center text-4xl cursor-pointer underline hover:underline text-amber-600 hover:text-yellow-500 mb-10 py-14">Albums</h1>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 gap-6">

        {response.map((albums: any) => (

          <div key={albums.id} className="bg-black border border-lime-500 p-4 rounded-md">

            <Link href={`/albums/${albums.id}`}>

              <h1 className="text-lg font-extrabold italic hover:underline text-amber-800 hover:text-yellow-500">

                {albums.id} &nbsp; {albums.title}

              </h1>
            </Link>
          </div>
        ))}
      </div>
    </div>

  );

}


