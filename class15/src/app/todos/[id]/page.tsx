
const Dynamicbook = async (props: any) => {

    console.log(props);

    const url = await fetch(`https://jsonplaceholder.typicode.com/todos/${props.params.id}`);

    console.log(props.params.id);

    const response = await url.json();

    console.log("Single Todos", response);


    return (

        <div className="font-extrabold italic bg-black min-h-screen">

            <h1 className="text-center text-4xl cursor-pointer underline hover:underline text-pink-800 hover:text-pink-500 mb-10 py-14">Todos</h1>

            <ol className="text-2xl text-center bg-black pt-5 space-y-5">

                <li className="underline hover:underline border border-rose-600 text-red-700 hover:text-red-500 py-3 px-5 mx-5 ">User ID: {response.userId}</li>

                <li className="underline hover:underline border border-cyan-500 text-sky-500 hover:text-cyan-500 py-3 px-5 mx-5 ">ID: {response.id}</li>

                <li className="underline hover:underline border border-emerald-500 text-emerald-700 hover:text-emerald-500 py-3 px-5 mx-5">Title: {response.title}</li>

            </ol>
        </div>

);

};



export default Dynamicbook;
