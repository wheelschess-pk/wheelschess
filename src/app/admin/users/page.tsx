
import Link from "next/link";

const sampleUsers = [
  {
    id: "USR-001",
    name: "Sample Buyer",
    email: "buyer@example.com",
    role: "USER",
  },
  {
    id: "USR-002",
    name: "Sample Seller",
    email: "seller@example.com",
    role: "SELLER",
  },
  {
    id: "USR-003",
    name: "Sample Admin",
    email: "admin@example.com",
    role: "ADMIN",
  },
];

export default function AdminUsersPage() {
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
          Manage Users
        </h1>

        <p className="mt-3 max-w-2xl leading-7 text-slate-600">
          Review account roles and prepare for secure user administration.
        </p>

        <div className="mt-8 space-y-4">
          {sampleUsers.map((user) => (
            <article
              key={user.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold text-slate-400">
                    {user.id}
                  </p>
                  <h2 className="mt-1 font-bold text-slate-900">
                    {user.name}
                  </h2>
                  <p className="mt-1 break-all text-sm text-slate-600">
                    {user.email}
                  </p>
                </div>

                <span className="w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                  {user.role}
                </span>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-900">
          These are example records, not actual registered users. Real user
          records, role changes and account controls must use authenticated
          server-side operations.
        </p>
      </section>
    </main>
  );
}
