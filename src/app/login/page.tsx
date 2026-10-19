
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <Link href="/" className="text-2xl font-black">
          <span className="text-teal-700">Wheels</span>
          <span className="text-slate-900">Chess</span>
        </Link>

        <h1 className="mt-8 text-3xl font-black text-slate-900">
          Welcome back
        </h1>
        <p className="mt-2 text-slate-600">
          Sign in to your WheelsChess account.
        </p>

        <form action="#" method="get" className="mt-7 space-y-5">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-semibold">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-semibold">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="Enter your password"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-teal-700 px-4 py-3 font-bold text-white hover:bg-teal-800"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          Don't have an account?{" "}
          <Link href="/register" className="font-bold text-teal-700">
            Register
          </Link>
        </p>

        <Link href="/" className="mt-5 block text-center text-sm text-slate-500">
          ← Back to homepage
        </Link>
      </div>
    </main>
  );
}
