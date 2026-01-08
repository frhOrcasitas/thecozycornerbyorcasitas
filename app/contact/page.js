import Image from "next/image";
import Link from "next/link";

export default function Contact() {
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
      <div className="flex items-center justify-center py-20 px-6">
        <section className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden max-w-6xl w-full">

          {/* LEFT TEXT */}
          <div className="md:w-1/2 bg-blue-50 flex items-center justify-center p-10">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4 text-blue-800">Want to contact us?</h2>
              <p className="text-zinc-600">
                We'd love to hear your feedback from you! Whether you have questions, suggestions, improvements, or just want to greet us,
                feel free to reach out using the form. You are welcome here, always.
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="md:w-1/2 p-10">
            <form className="space-y-4 text-black">
              <input
                type="text"
                placeholder="Name"
                className="w-full border p-2 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full border p-2 rounded"
              />
              <textarea
                placeholder="Message"
                className="w-full border p-4 rounded"
              />
              <button className="w-full bg-black text-white py-2 rounded hover:bg-zinc-800 transition">
                Send Message
              </button>
            </form>
          </div>

        </section>
      </div>

    </div>
  );
}
