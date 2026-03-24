import Link from "next/link";
import VendorLogo from "../../components/VendorLogo";
import WeeklySchedule from "../../components/WeeklySchedule";
import { vendorMap } from "../../data/vendors";

export const metadata = {
  title: "Our Vendors",
  description:
    "Meet the Prince Edward County growers and makers behind County Farm Collective — farms, market gardens, and producers selling through our weekly storefront.",
  alternates: { canonical: "/vendors" },
};

const img = (src, cls = "mx-auto h-12 w-auto") => (
  <img src={src} alt="" className={cls} />
);

const eventLabel = (label, sub) => (
  <div className="flex flex-col items-center gap-1 text-center">
    <p className="text-xs font-semibold leading-tight">{label}</p>
    {sub && <p className="text-sm font-bold">{sub}</p>}
  </div>
);

const vendorDays = [
  { day: "Sunday", bg: "#bdd5e2", dark: false, content: img("/apple.png") },
  { day: "Monday", bg: "#7a9e6e", dark: true, content: img("/mushroom.png") },
  {
    day: "Tuesday",
    bg: "#d4b896",
    dark: false,
    content: eventLabel("Receive Picklist", "2pm"),
  },
  {
    day: "Wednesday",
    bg: "#c8513b",
    dark: true,
    content: eventLabel("Harvest / Prepare"),
  },
  {
    day: "Thursday",
    bg: "#d4b896",
    dark: false,
    content: eventLabel("Drop off to CFC"),
  },
  { day: "Friday", bg: "#a8c4a0", dark: false, content: img("/beet.png") },
  {
    day: "Saturday",
    bg: "#802048",
    dark: true,
    content: eventLabel("Finalize Inventory"),
  },
];

export default function VendorsPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <Link
        href="/"
        className="mb-6 inline-block text-sm text-[#6d5f50] hover:underline"
      >
        ← Back to Home
      </Link>
      <div className="mb-3 flex items-end gap-4">
        <h2 className="text-4xl font-bold tracking-tight">
          Vendor Information
        </h2>
        <img src="/beet.png" alt="" className="mb-1 h-16 w-auto" />
      </div>
      <p className="mb-8 text-[#6d5f50]">
        Interested in selling through County Farm Collective? Start with a quick
        intro email and we'll guide the next step.
      </p>

      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-[#e2d8ca] bg-[#fffdf8] p-6 shadow-[0_8px_24px_rgba(63,50,40,0.06)]">
          <p className="mb-3 text-xs uppercase tracking-[0.16em] text-[#8a7b69]">
            Operations
          </p>
          <h3 className="mb-4 text-lg font-semibold">Process</h3>
          <ol className="space-y-3 text-sm text-[#5f5244]">
            <li className="flex gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e8f0e4] text-xs font-bold text-[#2F5D50]">
                1
              </span>
              <span>Share your product list and weekly inventory.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e8f0e4] text-xs font-bold text-[#2F5D50]">
                2
              </span>
              <span>Set your price for each product.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e8f0e4] text-xs font-bold text-[#2F5D50]">
                3
              </span>
              <span>Get your consolidated pick list ahead of order day.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e8f0e4] text-xs font-bold text-[#2F5D50]">
                4
              </span>
              <span>Drop off your products for fulfillment.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e8f0e4] text-xs font-bold text-[#2F5D50]">
                5
              </span>
              <span>Get paid.</span>
            </li>
          </ol>
        </div>
        <div className="rounded-2xl border border-[#e2d8ca] bg-[#fffdf8] p-6 shadow-[0_8px_24px_rgba(63,50,40,0.06)]">
          <p className="mb-3 text-xs uppercase tracking-[0.16em] text-[#8a7b69]">
            Insights
          </p>
          <h3 className="mb-4 text-lg font-semibold">How it works</h3>
          <ul className="space-y-3 text-sm text-[#5f5244]">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2F5D50]" />
              No enrolment fee — all sales are consignment based.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2F5D50]" />
              CFC adds a 20% consignment fee to each sale.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2F5D50]" />
              Products are centralized in Picton, combined per order, then
              fulfilled across the County.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2F5D50]" />
              Payouts occur one week following deliveries, regardless of terms
              of sale.
            </li>
          </ul>
        </div>
        <Link
          href="/code-of-conduct"
          className="rounded-2xl border border-[#e2d8ca] bg-[#fffdf8] p-6 shadow-[0_8px_24px_rgba(63,50,40,0.06)] transition hover:border-brand-sage hover:bg-[#f8f4ec]"
        >
          <p className="mb-3 text-xs uppercase tracking-[0.16em] text-[#8a7b69]">
            Governance
          </p>
          <h3 className="mb-4 text-lg font-semibold">Code of Conduct</h3>
          <p className="text-sm text-[#5f5244]">
            Membership standards, product eligibility, and enforcement
            guardrails.
          </p>
          <p className="mt-4 text-sm font-medium text-[#2F5D50]">
            Read the full document →
          </p>
        </Link>
      </div>

      <div className="mb-8">
        <h3 className="mb-3 text-lg font-semibold">Weekly rhythm</h3>
        <WeeklySchedule days={vendorDays} />
      </div>

      <a
        href="mailto:eat@countyfarmcollective.com?subject=Vendor%20Inquiry%20-%20County%20Farm%20Collective"
        className="mb-8 inline-flex rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-[#f7f4ed] hover:bg-brand-primary-dark"
      >
        Email to get started
      </a>

      <div>
        <h3 className="mb-4 text-2xl font-bold text-[#3F3228]">Our Vendors</h3>
        <p className="mb-6 max-w-3xl text-sm text-[#6d5f50]">
          Explore the producers currently on the County Farm Collective
          platform.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {vendorMap.map((vendor) => (
            <Link
              key={vendor.slug}
              href={`/vendors/${vendor.slug}`}
              className="flex items-center gap-3 rounded-lg border border-[#d9cebf] bg-[#fffdf8] px-4 py-3 text-sm font-medium text-[#3F3228] hover:bg-[#f3ece1]"
            >
              <VendorLogo
                name={vendor.name}
                src={vendor.logo}
                className="h-10 w-10"
              />
              <span>{vendor.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
