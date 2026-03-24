import Link from "next/link";
import EmailCTA from "../../components/EmailCTA";
import InfoBlock from "../../components/InfoBlock";
import WeeklySchedule from "../../components/WeeklySchedule";

export const metadata = {
  title: "Customer Information",
  description:
    "How to shop with County Farm Collective — weekly ordering, pickup and delivery schedules, and what to expect from Prince Edward County producers.",
  alternates: { canonical: "/customers" },
};

const img = (src, cls = "mx-auto h-12 w-auto") => (
  <img src={src} alt="" className={cls} />
);

const eventLabel = (label, sub, arrow = false) => (
  <div className="flex flex-col items-center gap-1 text-center">
    <p className="text-xs font-semibold leading-tight">{label}</p>
    {sub && <p className="text-sm font-bold">{sub}</p>}
    {arrow && (
      <svg
        viewBox="0 0 32 16"
        className="mt-1 w-8 opacity-60"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M2 8 C8 4 16 4 24 8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M20 5 L24 8 L20 11"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )}
  </div>
);

const customerDays = [
  {
    day: "Sunday",
    bg: "#bdd5e2",
    dark: false,
    content: eventLabel("Ordering Opens", "12:00 PM", true),
  },
  { day: "Monday", bg: "#7a9e6e", dark: true, content: img("/cabbage.png") },
  {
    day: "Tuesday",
    bg: "#d4b896",
    dark: false,
    content: eventLabel("Ordering Closes", "2pm"),
  },
  { day: "Wednesday", bg: "#c8513b", dark: true, content: img("/pea.png") },
  {
    day: "Thursday",
    bg: "#d4b896",
    dark: false,
    content: eventLabel("Delivery Day!", "12:00 PM – 5:00 PM"),
  },
  { day: "Friday", bg: "#a8c4a0", dark: false, content: img("/leek.png") },
  { day: "Saturday", bg: "#802048", dark: true, content: img("/mushroom.png") },
];

export default function CustomersPage() {
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
          Customer Information
        </h2>
        <img src="/leek.png" alt="" className="mb-1 h-16 w-auto" />
      </div>
      <p className="mb-8 max-w-3xl text-[#6d5f50]">
        For households and restaurants who want exceptional local food with a
        predictable weekly routine.
      </p>

      <div className="mb-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-[#e2d8ca] bg-[#fffdf8] p-6 shadow-[0_8px_24px_rgba(63,50,40,0.06)]">
          <h3 className="mb-2 text-lg font-semibold">How ordering works</h3>
          <ul className="list-disc space-y-1 pl-5 text-sm text-[#5f5244]">
            <li>Browse weekly availability from County producers.</li>
            <li>Place your order through the CFC storefront.</li>
            <li>Pick up or receive delivery on the weekly schedule.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-[#e2d8ca] bg-[#fffdf8] p-6 shadow-[0_8px_24px_rgba(63,50,40,0.06)]">
          <h3 className="mb-2 text-lg font-semibold">What to expect</h3>
          <p className="text-sm leading-6 text-[#5f5244]">
            Product mix changes with seasonality, quality standards stay high,
            and communications stay clear so you always know what is available
            each week.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="mb-3 text-lg font-semibold">Weekly rhythm</h3>
        <WeeklySchedule days={customerDays} />
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        <a
          href="https://cfc.localline.ca"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-[#f7f4ed] hover:bg-brand-primary-dark"
        >
          Shop now
        </a>
        <Link
          href="/vendors"
          className="rounded-full border border-[#c8bca9] bg-[#fffdf8] px-5 py-2.5 text-sm font-semibold text-[#3F3228] hover:bg-[#f5efe4]"
        >
          Browse vendors
        </Link>
      </div>

      <div id="newsletter" className="mt-8">
        <EmailCTA
          heading="Weekly newsletter"
          subheading="Get a concise update each week on fresh products, featured vendors, and key notes before ordering closes."
          compact
        />
      </div>
    </section>
  );
}
