
import Link from "next/link";

const categories = [
  { name: "Cars", slug: "cars", access: "Seller listings allowed" },
  { name: "Bikes", slug: "bikes", access: "Seller listings allowed" },
  {
    name: "Commercial Vehicles",
    slug: "commercial-vehicles",
    access: "Seller listings allowed",
  },
  {
    name: "Buses & Coasters",
    slug: "buses-coasters",
    access: "Seller listings allowed",
  },
  { name: "Rickshaws", slug: "rickshaws", access: "Seller listings allowed" },
  {
    name: "Tractors & Agriculture",
    slug: "tractors-agriculture",
    access: "Seller listings allowed",
  },
  {
    name: "Electric Vehicles",
    slug: "electric-vehicles",
    access: "Seller listings allowed",
  },
  {
    name: "Luxury & Classic",
    slug: "luxury-classic",
    access: "Seller listings allowed",
  },
  {
    name: "Showpiece",
    slug: "showpiece",
    access: "Admin listing only",
  },
  {
    name: "Spare Parts",
    slug: "spare-parts",
    access: "Admin listing only",
  },
];

export default function AdminCategoriesPage() {
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
          Manage Categories
        </h1>
        <p className="mt-3 max-w-2xl leading-7 text-slate-600">
          Review marketplace categories and their listing permissions.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          {categories.map((category) => (
            <article
              key={category.slug}
              className="flex flex-col gap-2 border-b border-slate-100 p-5 last:border-b-0 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h2 className="font-bold text-slate-900">{category.name}</h2>
                <p className="mt-1 text-sm text-slate-500">
                  Slug: {category.slug}
                </p>
              </div>

              <span
                className={`w-fit rounded-full px-3 py-1 text-xs font-bold ${
                  category.access === "Admin listing only"
                    ? "bg-amber-100 text-amber-800"
                    : "bg-teal-100 text-teal-800"
                }`}
              >
                {category.access}
              </span>
            </article>
          ))}
        </div>

        <p className="mt-5 rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-900">
          These categories are sample interface data. Database editing and
          server-side permission enforcement will be added in the backend stage.
        </p>
      </section>
    </main>
  );
}
