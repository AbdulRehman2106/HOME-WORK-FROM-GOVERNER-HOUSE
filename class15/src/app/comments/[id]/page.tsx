
const Dynamicbook = async (props: any) => {

    console.log(props);

    const url = await fetch(`https://jsonplaceholder.typicode.com/comments/${props.params.id}`);

    console.log(props.params.id);

    const response = await url.json();

    console.log("Single Comments", response);


    return (

        <div className="font-extrabold italic bg-black min-h-screen">

            <h1 className="text-center text-4xl md:text-5xl cursor-pointer underline hover:underline text-green-800 hover:text-green-500 py-10 md:py-14">Comments</h1>

            <ol className="text-2xl md:text-4xl text-center bg-black pt-5 md:pt-10 space-y-5">

                <li className="underline hover:underline border border-rose-600 text-red-700 hover:text-red-500 py-3 px-5 mx-5 md:mx-[20%] lg:mx-[30%]">Post ID: {response.postId}</li>

                <li className="underline hover:underline border border-cyan-500 text-sky-500 hover:text-cyan-500 py-3 px-5 mx-5 md:mx-[20%] lg:mx-[30%]">ID: {response.id}</li>

                <li className="underline hover:underline border border-emerald-500 text-emerald-700 hover:text-emerald-500 py-3 px-5 mx-5 md:mx-[10%] lg:mx-[20%]">Name: {response.name}</li>

                <li className="underline hover:underline border border-yellow-400 text-yellow-600 hover:text-yellow-400 py-3 px-5 mx-5 md:mx-[5%] lg:mx-[15%]">Body: {response.body}</li>
            </ol>
        </div>

);

};



export default Dynamicbook;
