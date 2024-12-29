import Link from "next/link";

export default async function Home() {

  const url = await fetch(`https://jsonplaceholder.typicode.com/users`);

  const response = await url.json();

  return (

    <div className="bg-black font-extrabold italic pb-24 min-h-screen">

      <h1 className="text-center text-4xl md:text-5xl cursor-pointer underline hover:underline text-zinc-800 hover:text-white mb-10 py-14">Users</h1>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {response.map((users: any) => (

          <div key={users.id} className="bg-black border border-white p-4 rounded-md">

            <Link href={`/users/${users.id}`}>

              <h1 className="text-lg md:text-xl font-extrabold italic hover:underline text-zinc-700 hover:text-white">

                {users.id} &nbsp; {users.name} <br />
                {users.email} &nbsp; <br /> {users.address.street}
                {users.address.suite} &nbsp;<br /> {users.address.city}
                {users.address.zipcode} &nbsp;
                {users.phone} &nbsp;<br /> {users.website}


              </h1>
            </Link>
          </div>
        ))}
      </div>
    </div>

  );

}


