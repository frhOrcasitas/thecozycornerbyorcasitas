import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-200">
      <main className="w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-lg">
      {/* Photo section */}
      <div className="relative h-80 w-full">
        <Image
          src="/images/kidreading.jpeg"
          alt="A child reading a book"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content section */}
      <div className="flex flex-col items-center gap-8 px-12 py-16 text-center">
        <h1 className="text-3xl font-semibold tracking-tight">
          Welcome to The Cozy Corner
        </h1>

        <p className="max-w-xl text-zinc-600">
          A cozy online bookstore with hand-picked recommendations for every
          reader.
        </p>

        <div className="flex gap-4">
          <Link
            href="/books"
            className="flex h-12 items-center justify-center rounded-full bg-black px-6 text-white hover:bg-zinc-800"
          >
            Browse Books
          </Link>

          <Link
            href="/about"
            className="flex h-12 items-center justify-center rounded-full border px-6 hover:bg-zinc-100"
          >
            Learn More
          </Link>
        </div>
      </div>
    </main>
    </div>
  );
}