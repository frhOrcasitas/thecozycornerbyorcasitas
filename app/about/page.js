import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-blue-200">

      {/* NAVBAR */}
      <nav className="bg-blue-200 shadow-md">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between">
            <Link href="/">
                <h1 className="text-2xl font-bold text-indigo-600">
                    The Cozy Corner
                </h1>
            </Link>

            <div className="hidden md:flex space-x-8">
              <a href="/about" className="text-gray-700 hover:text-indigo-600 transition">
                About
              </a>
              <a href="/books" className="text-gray-700 hover:text-indigo-600 transition">
                Books
              </a>
              <a href="/contact" className="text-gray-700 hover:text-indigo-600 transition">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* CENTERED CARD */}
      <div className="flex items-center justify-center py-20">
        <main className="w-full max-w-6xl overflow-hidden rounded-2xl bg-white shadow-lg">

          <section className="px-12 py-20 text-center">
            <h1 className="text-3xl font-bold text-blue-800">
              About The Cozy Corner
            </h1>

            <p className="mt-6 mx-auto max-w-3xl text-zinc-600">
               Cozy Corner is an online bookstore dedicated to providing a cozy
            reading experience for all book lovers. Our mission is to recommend
            books that bring comfort, joy, imagination, and inspiration to our
            readers. We believe that reading is not just a hobby, but also a way
            to learn more about the world and ourselves.
            </p>
          </section>

        </main>
      </div>

    </div>
  );
}
