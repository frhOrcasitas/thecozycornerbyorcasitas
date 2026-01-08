import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-200">

      {/* NAVBAR – always on top */}
      <nav className="bg-blue-200 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/">
                <h1 className="text-2xl font-bold text-indigo-600">
                    The Cozy Corner
                </h1>
              </Link>
            </div>

            <div className="hidden md:flex space-x-8">
              <Link href="/about" className="text-gray-700 hover:text-indigo-600 transition">About</Link>
              <Link href="/books" className="text-gray-700 hover:text-indigo-600 transition">Books</Link>
              <Link href="/contact" className="text-gray-700 hover:text-indigo-600 transition">Contact</Link>
            </div>
            <button className="md:hidden">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <main className="w-full max-w-6xl mx-auto overflow-hidden rounded-2xl bg-white shadow-lg mt-10">

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
          <h1 className="text-3xl font-semibold tracking-tight text-blue-800">
            Welcome to The Cozy Corner
          </h1>

          <p className="max-w-xl text-zinc-600">
            Want to discover your next favorite book or just read about stories from various genres?
            You've come to the right place! There are tons of book recommendations waiting for you.
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
              className="flex h-12 items-center justify-center rounded-full border border-indigo-600 px-6 text-indigo-600 hover:bg-indigo-50"
            >
              Learn More
            </Link>
          </div>
        </div>

      </main>
    </div>
  );
}
