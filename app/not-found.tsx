import { ArrowLeft, ArrowRight, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <section
      aria-labelledby="not-found-title"
      className="relative isolate flex min-h-[60vh] items-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-lime-50 px-4 py-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-emerald-100/70 blur-3xl"
      />
      <div className="container relative mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
        <div className="order-2 text-center md:order-1 md:text-left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Page not found
          </p>
          <h1 id="not-found-title" className="text-6xl font-extrabold tracking-tight text-slate-900 sm:text-7xl">
            Lost in the <span className="text-emerald-700">aisles?</span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-lg leading-7 text-slate-600 md:mx-0">
            This page may have moved or the link may be out of date. Let&apos;s
            get you back to fresh finds.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
            <a
              href="/bazaar"
              className="inline-flex h-10 items-center justify-center rounded-md bg-emerald-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
            >
              Browse groceries <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="/"
              className="inline-flex h-10 items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to home
            </a>
          </div>
          <p className="mt-8 text-sm text-slate-500">
            Looking for something specific?{" "}
            <a href="/search" className="font-medium text-emerald-800 underline underline-offset-4">
              Search the store
            </a>
          </p>
        </div>

        <div className="order-1 flex justify-center md:order-2">
          <div className="relative flex aspect-square w-full max-w-sm items-center justify-center rounded-full bg-white/80 shadow-xl shadow-emerald-900/10 ring-1 ring-emerald-100">
            <div className="absolute inset-5 rounded-full border border-dashed border-emerald-200" />
            <div className="flex h-44 w-44 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
              <SearchX aria-hidden="true" className="h-24 w-24" strokeWidth={1.3} />
            </div>
            <span className="absolute right-8 top-10 rounded-full bg-amber-100 px-4 py-2 text-sm font-bold text-amber-900">
              404
            </span>
            <span className="absolute bottom-10 left-5 rounded-full bg-lime-100 px-4 py-2 text-sm font-medium text-lime-900">
              Fresh start
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
