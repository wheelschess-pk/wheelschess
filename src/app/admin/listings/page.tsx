
import Link from "next/link";

const demoListings = [
  {
    id: "WC-001",
    title: "Example vehicle listing",
    category: "Cars",
    status: "PENDING",
    price: "PKR 2,500,000",
  },
  {
    id: "WC-002",
    title: "Example motorcycle listing",
    category: "Bikes",
    status: "READY_TO_SELL",
    price: "PKR 350,000",
  },
];

export default function AdminListingsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="container-main flex min-h-16 items-center justify-between gap-4">
          <Link href="/" className="text-2xl font-black">
            <span className="text-teal-700">Wheels</span>
            <span>Chess</span>
          </Link>
          <Link href="/admin" className="text-sm font-semibold text-teal-700">
            ← Admin Dashboard
          </Link>
        </div>
      </header>

      <section className="container-main py-10">
        <p className="text-sm font-bold uppercase tracking-widest text-teal-700">
          Marketplace management
        </p>
        <h1 className="mt-2 text-3xl font-black sm:text-4xl">
          Manage Listings
        </h1>
        <p className="mt-3 leading-7 text-slate-600">
          Review listing information and check its current status.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="border-b border-slate-200 p-5">
            <h2 className="font-bold">Sample listing records</h2>
            <p className="mt-1 text-sm text-slate-500">
              These are examples only, not live database listings.
            </p>
          </div>

          <div className="divide-y divide-slate-200">
            {demoListings.map((listing) => (
              <article key={listing.id} className="p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold text-slate-400">
                      {listing.id} · {listing.category}
                    </p>
                    <h3 className="mt-1 font-bold text-slate-900">
                      {listing.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      {listing.price}
                    </p>
                  </div>

                  <span
                    className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-bold ${
                      listing.status === "PENDING"
                        ? "bg-amber-100 text-amber-800"
                        : "bg-teal-100 text-teal-800"
                    }`}
                  >
                    {listing.status.replaceAll("_", " ")}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <p className="mt-5 rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-900">
          Approval, rejection and status updates will be connected to secure
          server actions and the database in the backend stage.
        </p>
      </section>
    </main>
  );
}
