
const Dynamicbook = async (props: any) => {

    console.log(props);

    const url = await fetch(`https://jsonplaceholder.typicode.com/users/${props.params.id}`);

    console.log(props.params.id);

    const response = await url.json();

    console.log("Single Users", response);


    return (

        <div className="font-extrabold italic bg-black min-h-screen">

<h1 className="text-center text-4xl md:text-5xl cursor-pointer underline hover:underline text-zinc-800 hover:text-white mb-10 py-14">Users</h1>

            <ol className="text-2xl md:text-4xl text-center bg-black pt-5 md:pt-10 space-y-5">

                <li className="underline hover:underline border border-rose-600 text-red-700 hover:text-red-500 py-3 px-5 mx-5 md:mx-[20%] lg:mx-[30%]">ID: {response.id}</li>

                <li className="underline hover:underline border border-cyan-500 text-sky-500 hover:text-cyan-500 py-3 px-5 mx-5 md:mx-[20%] lg:mx-[30%]">Name: {response.name}</li>

                <li className="underline hover:underline border border-emerald-500 text-emerald-700 hover:text-emerald-500 py-3 px-5 mx-5 md:mx-[10%] lg:mx-[20%]">User Name: {response.username}</li>

                <li className="underline hover:underline border border-yellow-400 text-yellow-600 hover:text-yellow-400 py-3 px-5 mx-5 md:mx-[5%] lg:mx-[15%]">Email: {response.email}</li>

                <li className="underline hover:underline border border-purple-400 text-purple-600 hover:text-purple-400 py-3 px-5 mx-5 md:mx-[5%] lg:mx-[15%]">Street: {response.address.street}</li>

                <li className="underline hover:underline border border-pink-400 text-pink-600 hover:text-pink-400 py-3 px-5 mx-5 md:mx-[5%] lg:mx-[15%]">Suite: {response.address.suite}</li>

                <li className="underline hover:underline border border-white text-zinc-600 hover:text-white py-3 px-5 mx-5 md:mx-[5%] lg:mx-[15%]">City: {response.address.city}</li>

                <li className="underline hover:underline border border-lime-600 text-lime-600 hover:text-lime-400 py-3 px-5 mx-5 md:mx-[5%] lg:mx-[15%]">Zipcode: {response.address.zipcode}</li>

                <li className="underline hover:underline border border-violet-400 text-violet-600 hover:text-violet-400 py-3 px-5 mx-5 md:mx-[5%] lg:mx-[15%]">Latitude:{response.address.geo.lat}</li>

                <li className="underline hover:underline border border-slate-400 text-slate-600 hover:text-slate-400 py-3 px-5 mx-5 md:mx-[5%] lg:mx-[15%]">Longitude:{response.address.geo.lng}</li>
                
                <li className="underline hover:underline border border-green-400 text-green-600 hover:text-green-400 py-3 px-5 mx-5 md:mx-[5%] lg:mx-[15%]">Phone:{response.phone}</li>

                <li className="underline hover:underline border border-blue-400 text-blue-600 hover:text-blue-400 py-3 px-5 mx-5 md:mx-[5%] lg:mx-[15%]">Website:{response.website}</li>

                <li className="underline hover:underline border border-fuchsia-400 text-fuchsia-600 hover:text-fuchsia-400 py-3 px-5 mx-5 md:mx-[5%] lg:mx-[15%]">Company:{response.company.name}</li>

                <li className="underline hover:underline border border-[#ba4a00] text-[#ba4a00] hover:text-[#eb984e] py-3 px-5 mx-5 md:mx-[5%] lg:mx-[15%]">CatchPhrase:{response.company.catchPhrase}</li>

                <li className="underline hover:underline border border-teal-400 text-teal-600 hover:text-teal-400 py-3 px-5 mx-5 md:mx-[5%] lg:mx-[15%]">BS:{response.company.bs}</li>

            </ol>
        </div>

);

};



export default Dynamicbook;
