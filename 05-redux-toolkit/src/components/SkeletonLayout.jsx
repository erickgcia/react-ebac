export const SkeletonLayout = () => {
  const arr = Array(10).fill(0)
  return arr.map((skeleton, index) => (
    <article
      key={index}
      className="flex gap-4 flex-wrap items-center justify-center p-4"
    >
      <section className="flex flex-col gap-4 p-8 border bg-gray-100 border-black rounded-2xl w-full sm:w-80 font-semibold">
        <div className="w-full aspect-square object-cover object-center bg-gray-500"></div>
        <h3 className="w-full h-4 font-bold bg-gray-500 rounded-2xl"></h3>
        <p className="w-16 h-4 bg-gray-500 rounded-2xl"></p>
        <p className="w-44 h-4 bg-gray-500 rounded-2xl"></p>
        <button className="border-none rounded-2xl bg-gray-500 p-5 text-white"></button>
      </section>
    </article>
  ))
}
