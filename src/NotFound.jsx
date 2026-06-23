export default function NotFound() {
  return (
    <section className="bg-zinc-950 text-white h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-[150px] font-black leading-none">
          404
        </h1>

        <p className="text-zinc-400 text-lg">
          Lost in the void.
        </p>

        <a
          href="/"
          className="inline-block mt-6 border border-zinc-700 px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
        >
          Return Home
        </a>
      </div>
    </section>
  );
}