import Link from "next/link";
import { notFound } from "next/navigation";

const categories = [
  { name: "Cars", slug: "cars" },
  { name: "Bikes", slug: "bikes" },
  { name: "Commercial Vehicles", slug: "commercial-vehicles" },
  { name: "Buses & Coasters", slug: "buses-coasters" },
  { name: "Rickshaws", slug: "rickshaws" },
  { name: "Tractors & Agriculture", slug: "tractors-agriculture" },
  { name: "Electric Vehicles", slug: "electric-vehicles" },
  { name: "Luxury & Classic", slug: "luxury-classic" },
  { name: "Showpiece", slug: "showpiece" },
  { name: "Spare Parts", slug: "spare-parts" },
];

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  let listings: {
    id: string;
    title: string;
    price: string | number;
    city: string;
  }[] = [];

  let message = "Abhi is category mein koi approved listing available nahi hai.";

  try {
    const { prisma } = await import("@/lib/db/prisma");

    const results = await prisma.vehicleListing.findMany({
      where: {
        categorySlug: category.slug,
        status: "READY_TO_SELL",
      },
      select: {
        id: true,
        title: true,
        price: true,
        city: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    listings = results.map((item) => ({
      ...item,
      price: Number(item.price),
    }));

    if (listings.length > 0) {
      message = "";
    }
  } catch {
    message =
      "Listings load nahi ho sakin. Database connection check karna hoga.";
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b bg-white">
        <div className="container-main flex items-center justify-between py-4">
          <Link href="/" className="text-xl font-black">
            <span className="text-teal-700">Wheels</span>Chess
          </Link>
          <Link href="/" className="font-semibold text-teal-700">
            Home
          </Link>
        </div>
      </header>

      <section className="container-main py-10">
        <p className="text-sm font-bold uppercase tracking-widest text-teal-700">
          WheelsChess Marketplace
        </p>

        <h1 className="mt-2 text-3xl font-black sm:text-4xl">
          {category.name}
        </h1>

        <p className="mt-3 text-slate-600">
          {`Browse ${category.name} available on WheelsChess.`}
        </p>

        {message && (
          <div className="mt-8 rounded-xl border bg-white p-6 text-slate-600">
            {message}
          </div>
        )}

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((listing) => (
            <article
              key={listing.id}
              className="rounded-2xl border bg-white p-5 shadow-sm"
            >
              <h2 className="text-lg font-bold">{listing.title}</h2>
              <p className="mt-3 text-xl font-black text-teal-700">
                PKR {listing.price.toLocaleString("en-PK")}
              </p>
              <p className="mt-2 text-sm text-slate-500">{listing.city}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
