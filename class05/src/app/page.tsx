export default function Home(){
  return(
    <div>
      <section className="flex justify-center mt-10">
        <div className="flex gap-4 w-full max-w-4xl">
        <div className="bg-purple-600 h-40 w-1/3 flex items-center justify-center text-white">Purple </div>
        <div className="bg-green-700 h-40 w-1/3 flex items-center justify-center text-white">Green</div>
        <div className="bg-yellow-700 h-40 w-1/3 flex items-center justify-center text-white">Brown</div>
        </div>
      </section>

      <section className="flex justify-center mt-10">
          <div className="flex gap-4 w-full max-w-4xl">
            <div className="bg-red-700 h-40 w-1/2 flex items-center justify-center text-white">Red</div>
            <div className="bg-yellow-500 h-40 w-1/2 flex items-center justify-center text-white">Yellow</div>
          </div>
        </section>
    </div>
  )
}