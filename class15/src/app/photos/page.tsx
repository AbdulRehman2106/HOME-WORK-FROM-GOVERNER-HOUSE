import Link from "next/link";

export default async function Home() {

  const url = await fetch(`https://jsonplaceholder.typicode.com/photos`);

  const response = await url.json();

  return (

    <div className="bg-black font-extrabold italic pb-24 min-h-screen">

      <h1 className="text-center text-4xl cursor-pointer underline hover:underline text-purple-800 hover:text-purple-500 mb-10 py-14">Photos</h1>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 gap-6">

        {response.map((photos: any) => (

          <div key={photos.id} className="bg-black border border-purple-950 p-4 rounded-md">

            <Link href={`/photos/${photos.id}`}>

              <h1 className="text-lg font-extrabold italic hover:underline text-purple-800 hover:text-purple-500">

                {photos.id} &nbsp; {photos.title}

              </h1>
            </Link>
          </div>
        ))}
      </div>
    </div>

  );

}


