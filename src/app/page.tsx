
import Link from "next/link";

const categories = [
  { name: "Cars", icon: "🚗", description: "Find your next car" },
  { name: "Bikes", icon: "🏍️", description: "Two-wheel adventures" },
  { name: "Commercial Vehicles", icon: "🚚", description: "Work and transport" },
  { name: "Buses & Coasters", icon: "🚌", description: "Passenger transport" },
  { name: "Rickshaws", icon: "🛺", description: "Everyday mobility" },
  { name: "Tractors & Agriculture", icon: "🚜", description: "Farm machinery" },
  { name: "Electric Vehicles", icon: "⚡", description: "Explore electric" },
  { name: "Luxury & Classic", icon: "🏎️", description: "Special vehicles" },
  { name: "Showpiece", icon: "🏆", description: "Special automotive collectibles" },
  { name: "Spare Parts", icon: "⚙️", description: "Parts and accessories" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white">
        <div className="container-main flex min-h-16 items-center justify-between gap-4">
          <Link href="/" className="text-2xl font-black tracking-tight">
            <span className="text-teal-700">Wheels</span>
            <span className="text-slate-900">Chess</span>
          </Link>

          <nav className="hidden items-center gap-5 text-sm font-semibold md:flex">
            <Link href="#categories">Categories</Link>
            <Link href="#about">About</Link>
            <Link href="/login">Login</Link>
          </nav>

          <Link
            href="/register"
            className="rounded-lg bg-teal-700 px-4 py-2.5 text-sm font-bold text-white"
          >
            Join Us
          </Link>
        </div>
      </header>

      <section className="bg-slate-950 text-white">
        <div className="container-main grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-teal-400">
              Your automotive marketplace
            </p>

            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Find the wheels that move you.
            </h1>

            <p className="mt-5 max-w-xl leading-7 text-slate-300">
              Explore cars, bikes, commercial vehicles, spare parts and
              automotive collectibles—all in one place.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#categories"
                className="rounded-lg bg-teal-400 px-5 py-3 font-bold text-slate-950"
              >
                Explore Categories
              </Link>
              <Link
                href="/register"
                className="rounded-lg border border-slate-600 px-5 py-3 font-bold"
              >
                Create Account
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">
            <div className="text-7xl" aria-hidden="true">🚘</div>
            <h2 className="mt-6 text-2xl font-bold">
              Your next discovery starts here.
            </h2>
            <p className="mt-3 leading-7 text-slate-300">
              Discover vehicles for everyday travel, work, adventure and
              collecting.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-slate-800 p-4">
                <p className="text-2xl font-black text-teal-400">10</p>
                <p className="mt-1 text-sm text-slate-300">Categories</p>
              </div>
              <div className="rounded-xl bg-slate-800 p-4">
                <p className="text-2xl font-black text-teal-400">1</p>
                <p className="mt-1 text-sm text-slate-300">Marketplace</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="section-spacing">
        <div className="container-main">
          <p className="text-sm font-bold uppercase tracking-widest text-teal-700">
            Browse the marketplace
          </p>
          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            Explore Categories
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-600">
            Choose a category and discover what WheelsChess has to offer.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/categories/${category.name.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                className="group rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:border-teal-400 hover:shadow-lg sm:p-5"
              >
                <span className="text-3xl" aria-hidden="true">
                  {category.icon}
                </span>
                <h3 className="mt-4 font-bold leading-snug group-hover:text-teal-700">
                  {category.name}
                </h3>
                <p className="mt-2 text-sm leading-5 text-slate-500">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section-spacing border-y border-slate-200 bg-white">
        <div className="container-main">
          <div className="rounded-3xl bg-teal-800 px-6 py-10 text-white sm:px-10 sm:py-14">
            <h2 className="max-w-2xl text-3xl font-black sm:text-4xl">
              Welcome to WheelsChess
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-teal-50">
              A place for vehicle buyers, sellers and automotive enthusiasts.
              Create your account and get ready to explore.
            </p>
            <Link
              href="/register"
              className="mt-7 inline-block rounded-lg bg-white px-5 py-3 font-bold text-teal-900"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="container-main flex flex-col gap-3 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} WheelsChess. All rights reserved.</p>
          <p>Your automotive marketplace.</p>
        </div>
      </footer>
    </main>
  );
}
