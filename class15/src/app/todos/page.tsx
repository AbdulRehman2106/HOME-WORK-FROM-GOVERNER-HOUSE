import Link from "next/link";

export default async function Home() {

  const url = await fetch(`https://jsonplaceholder.typicode.com/todos`);

  const response = await url.json();

  return (

    <div className="bg-black font-extrabold italic pb-24 min-h-screen">

      <h1 className="text-center text-4xl md:text-5xl cursor-pointer underline hover:underline text-pink-800 hover:text-pink-500 mb-10 py-14">Todos</h1>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {response.map((todos: any) => (

          <div key={todos.id} className="bg-black border border-pink-900 p-4 rounded-md">

            <Link href={`/todos/${todos.id}`}>

              <h1 className="text-lg md:text-xl font-extrabold italic hover:underline text-pink-800 hover:text-pink-500">

                {todos.id} &nbsp; {todos.title}

              </h1>
            </Link>
          </div>
        ))}
      </div>
    </div>

  );

}


