
import Link from "next/link";

const categories = [
  "Cars",
  "Bikes",
  "Commercial Vehicles",
  "Buses & Coasters",
  "Rickshaws",
  "Tractors & Agriculture",
  "Electric Vehicles",
  "Luxury & Classic",
];

export default function NewListingPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="container-main flex min-h-16 items-center justify-between gap-4">
          <Link href="/" className="text-2xl font-black">
            <span className="text-teal-700">Wheels</span>
            <span>Chess</span>
          </Link>
          <Link
            href="/dashboard"
            className="text-sm font-semibold text-teal-700"
          >
            ← Dashboard
          </Link>
        </div>
      </header>

      <section className="container-main py-10">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-teal-700">
            Seller workspace
          </p>
          <h1 className="mt-2 text-3xl font-black sm:text-4xl">
            Add a Vehicle Listing
          </h1>
          <p className="mt-3 leading-7 text-slate-600">
            Enter accurate details about the vehicle you want to list.
          </p>

          <form
            action="#"
            method="get"
            className="mt-8 space-y-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8"
          >
            <div>
              <label htmlFor="title" className="mb-2 block text-sm font-semibold">
                Listing title
              </label>
              <input
                id="title"
                name="title"
                required
                minLength={3}
                maxLength={100}
                placeholder="e.g. Toyota Corolla GLi 2021"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-teal-600"
              />
            </div>

            <div>
              <label htmlFor="category" className="mb-2 block text-sm font-semibold">
                Category
              </label>
              <select
                id="category"
                name="category"
                required
                defaultValue=""
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3"
              >
                <option value="" disabled>Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <p className="mt-2 text-xs leading-5 text-slate-500">
                Showpiece and Spare Parts listings are managed by administrators.
              </p>
            </div>

            <div>
              <label htmlFor="price" className="mb-2 block text-sm font-semibold">
                Asking price (PKR)
              </label>
              <input
                id="price"
                name="price"
                type="number"
                min="1"
                step="1"
                required
                placeholder="Enter price in rupees"
                className="w-full rounded-lg border border-slate-300 px-4 py-3"
              />
            </div>

            <div>
              <label htmlFor="city" className="mb-2 block text-sm font-semibold">
                City
              </label>
              <input
                id="city"
                name="city"
                required
                maxLength={80}
                placeholder="e.g. Islamabad"
                className="w-full rounded-lg border border-slate-300 px-4 py-3"
              />
            </div>

            <div>
              <label htmlFor="description" className="mb-2 block text-sm font-semibold">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                required
                minLength={10}
                maxLength={5000}
                rows={5}
                placeholder="Describe the vehicle, condition, model and other important details..."
                className="w-full rounded-lg border border-slate-300 px-4 py-3"
              />
            </div>

            <div>
              <label htmlFor="images" className="mb-2 block text-sm font-semibold">
                Vehicle photos
              </label>
              <input
                id="images"
                name="images"
                type="file"
                accept="image/*"
                multiple
                className="w-full rounded-lg border border-slate-300 bg-white p-3"
              />
              <p className="mt-2 text-xs text-slate-500">
                Photo uploading will be connected when storage is configured.
              </p>
            </div>

            <div className="rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-900">
              New listings must be reviewed by an administrator before they
              become publicly visible.
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-teal-700 px-5 py-3 font-bold text-white hover:bg-teal-800"
            >
              Submit Listing for Review
            </button>

            <Link
              href="/dashboard"
              className="block text-center text-sm font-semibold text-slate-600"
            >
              Cancel and return to dashboard
            </Link>
          </form>
        </div>
      </section>
    </main>
  );
}
