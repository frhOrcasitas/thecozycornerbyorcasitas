import Image from "next/image";
import Link from "next/link";

export default function Books() {
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
      <div className="flex items-center justify-center text-blue-500 py-20">
        <section>
            <h2 className="text-3xl font-semibold mb-6 text-blue-800">Book Recommendations</h2>
            <p className="text-gray-600 mb-8">Here are some of our favorite books to cozy up with:</p>

            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded shadow">
                    <Image src="/images/book1.jpg" alt="Go Fly A Kite, Charlie Brown Book" width={300} height={400} />
                <h3 className="mt-3 font-medium">Go Fly A Kite, Charlie Brown</h3>
                <p className="mt-1 text-xs text-gray-600">by Charles M. Schulz</p>
                </div>

                <div className="bg-white p-4 rounded shadow">
                    <Image src="/images/book2.png" alt="Modern CSS with Tailwind Second Edition book" width={300} height={400} />
                <h3 className="mt-3 font-medium">Modern CSS with Tailwind Second Edition</h3>
                <p className="mt-1 text-xs text-gray-600">by Noel Rappin and Edited by Katharine Dvorak</p>
                </div>

                <div className="bg-white p-4 rounded shadow">
                    <Image src="/images/book3.jpg" alt="1984 book" width={300} height={400} />
                <h3 className="mt-3 font-medium">1984</h3>
                <p className="mt-1 text-xs text-gray-600">by George Orwell</p>
                </div>
            </div>
        </section>
      </div>

    </div>
  );
}
