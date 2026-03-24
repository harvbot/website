import Link from "next/link";
import EmailCTA from "../components/EmailCTA";
import VendorLogo from "../components/VendorLogo";
import { featuredVendors, getVendorLogo } from "../data/vendors";
import { slugify } from "../utils/strings";

export default function LandingPage() {
  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-6 pb-12 pt-14">
        <div className="relative overflow-hidden rounded-3xl border border-[#e2d8ca] bg-gradient-to-br from-[#fffdf8] to-[#f2e9db] p-8 shadow-[0_12px_32px_rgba(63,50,40,0.08)] md:p-12">
          <img
            src="/apple.png"
            alt=""
            className="pointer-events-none absolute -right-6 -top-4 hidden h-56 w-auto opacity-60 md:block"
          />
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#8a7b69]">
            County Farm Collective
          </p>
          <h2 className="mb-4 max-w-4xl font-amatic text-6xl font-bold leading-tight text-[#3F3228] md:text-8xl">
            PEC&apos;s harvest, in one place.
          </h2>
          <p className="max-w-3xl text-base leading-7 text-[#5f5244] md:text-lg">
            We connect Prince Edward County growers and makers directly to
            locals every week — with one easy storefront, one coordinated
            fulfillment flow, and the freshest possible food.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="https://cfc.localline.ca"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-[#f7f4ed] hover:bg-brand-primary-dark"
            >
              Shop this week
            </a>
            <Link
              href="/customers"
              className="inline-flex items-center rounded-full border border-[#c8bca9] bg-[#fffdf8] px-5 py-2.5 text-sm font-semibold text-[#3F3228] hover:bg-[#f5efe4]"
            >
              How ordering works
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-12">
        <EmailCTA
          heading="Get the weekly harvest update"
          subheading="A short note before each order window opens — what's fresh, who's featured, and when to shop."
        />
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-6 px-6 pb-12 md:grid-cols-2">
        <article className="rounded-2xl border border-[#e2d8ca] bg-[#fffdf8] p-6 shadow-[0_8px_24px_rgba(63,50,40,0.06)]">
          <img src="/pea.png" alt="" className="mb-3 h-14 w-auto" />
          <h3 className="mb-2 text-xl font-semibold">For customers</h3>
          <p className="mb-5 text-sm leading-6 text-[#6d5f50]">
            Simple weekly ordering, clear pickup/delivery expectations, and
            access to outstanding County producers.
          </p>
          <Link
            href="/customers"
            className="text-sm font-semibold text-brand-primary hover:underline"
          >
            Learn more →
          </Link>
        </article>

        <article className="rounded-2xl border border-[#e2d8ca] bg-[#fffdf8] p-6 shadow-[0_8px_24px_rgba(63,50,40,0.06)]">
          <img src="/mushroom.png" alt="" className="mb-3 h-14 w-auto" />
          <h3 className="mb-2 text-xl font-semibold">For vendors</h3>
          <p className="mb-5 text-sm leading-6 text-[#6d5f50]">
            Stay focused on production while CFC handles merchandising,
            communication, and weekly order flow.
          </p>
          <Link
            href="/vendors"
            className="text-sm font-semibold text-brand-primary hover:underline"
          >
            See vendor details →
          </Link>
        </article>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-14">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-[#3F3228]">
            Featured County Vendors
          </h3>
          <Link
            href="/vendors"
            className="text-sm font-semibold text-brand-primary hover:underline"
          >
            View all vendors →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {featuredVendors.map((vendor) => (
            <article
              key={vendor.name}
              className="rounded-2xl border border-[#e2d8ca] bg-[#fffdf8] p-5 shadow-[0_8px_24px_rgba(63,50,40,0.06)]"
            >
              <div className="mb-3">
                <VendorLogo
                  name={vendor.name}
                  src={getVendorLogo(vendor.name)}
                  className="h-14 w-14"
                />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-amber">
                {vendor.location}
              </p>
              <h4 className="mt-1 text-xl font-semibold text-[#3F3228]">
                {vendor.name}
              </h4>
              <p className="mt-2 text-sm text-brand-primary">
                {vendor.specialty}
              </p>
              <p className="mt-3 text-sm leading-6 text-[#6d5f50]">
                {vendor.note}
              </p>
              <Link
                href={`/vendors/${slugify(vendor.name)}`}
                className="mt-4 inline-flex text-sm font-semibold text-brand-primary hover:underline"
              >
                View vendor
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
