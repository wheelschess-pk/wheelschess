
import Link from "next/link";

const adminSections = [
  {
    title: "Manage Listings",
    description: "Review submitted listings and manage their status.",
    icon: "🚗",
    href: "/admin/listings",
  },
  {
    title: "Manage Categories",
    description: "Organize vehicle categories and marketplace sections.",
    icon: "📂",
    href: "/admin/categories",
  },
  {
    title: "Manage Users",
    description: "Review user accounts and manage access.",
    icon: "👥",
    href: "/admin/users",
  },
];

export default function AdminDashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="container-main flex min-h-16 items-center justify-between gap-4">
          <Link href="/" className="text-2xl font-black">
            <span className="text-teal-700">Wheels</span>
            <span>Chess</span>
          </Link>
          <Link
            href="/"
            className="text-sm font-semibold text-slate-600 hover:text-teal-700"
          >
            Back to Home
          </Link>
        </div>
      </header>

      <section className="container-main py-10">
        <p className="text-sm font-bold uppercase tracking-widest text-teal-700">
          Administration
        </p>

        <h1 className="mt-2 text-3xl font-black sm:text-4xl">
          Admin Dashboard
        </h1>

        <p className="mt-3 max-w-2xl leading-7 text-slate-600">
          Manage the WheelsChess marketplace, review listings and organize
          platform content.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {adminSections.map((section) => (
            <article
              key={section.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="text-4xl" aria-hidden="true">
                {section.icon}
              </span>

              <h2 className="mt-5 text-xl font-bold">{section.title}</h2>

              <p className="mt-3 min-h-14 leading-6 text-slate-600">
                {section.description}
              </p>

              <Link
                href={section.href}
                className="mt-5 inline-flex rounded-lg bg-teal-700 px-4 py-3 font-bold text-white hover:bg-teal-800"
              >
                Open Section →
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <h2 className="font-bold text-amber-900">Admin access protection</h2>
          <p className="mt-2 text-sm leading-6 text-amber-900">
            This is the dashboard interface only. Before launch, every admin
            page and API must verify the signed-in user's admin role on the
            server.
          </p>
        </div>
      </section>
    </main>
  );
}
