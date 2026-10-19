
import Link from "next/link";

const stats = [
  { label: "Total Listings", value: "0", icon: "🚗" },
  { label: "Pending Approval", value: "0", icon: "⏳" },
  { label: "Ready to Sell", value: "0", icon: "✅" },
  { label: "Sold Vehicles", value: "0", icon: "🤝" },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="container-main flex min-h-16 items-center justify-between gap-4">
          <Link href="/" className="text-2xl font-black">
            <span className="text-teal-700">Wheels</span>
            <span className="text-slate-900">Chess</span>
          </Link>

          <Link
            href="/"
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold"
          >
            Back to Home
          </Link>
        </div>
      </header>

      <section className="container-main py-10">
        <p className="text-sm font-bold uppercase tracking-widest text-teal-700">
          Seller workspace
        </p>

        <h1 className="mt-2 text-3xl font-black sm:text-4xl">
          My Dashboard
        </h1>

        <p className="mt-3 text-slate-600">
          Manage your vehicle listings and keep track of their status.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <span className="text-3xl" aria-hidden="true">
                {stat.icon}
              </span>
              <p className="mt-4 text-2xl font-black text-slate-900">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-bold">Your Listings</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Your submitted vehicles will appear here once listing management
                is connected to the database.
              </p>
            </div>

            <Link
              href="/dashboard/listings/new"
              className="inline-flex items-center justify-center rounded-lg bg-teal-700 px-5 py-3 font-bold text-white hover:bg-teal-800"
            >
              + Add Listing
            </Link>
          </div>

          <div className="mt-8 rounded-xl border border-dashed border-slate-300 px-5 py-12 text-center">
            <span className="text-4xl" aria-hidden="true">🚘</span>
            <h3 className="mt-4 font-bold">No listings yet</h3>
            <p className="mt-2 text-sm text-slate-500">
              Your vehicle listings will show up here.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
