import { format as formatDate } from "date-fns";
import { SSRWithHydrationDate } from "./SSRWithHydrationDate";
import lazy from "next/dynamic";
import Link from "next/link";
import { Suspense } from "react";
import { DateFormatter } from "./DateFormatter";
const ClientSideOnly = lazy(() => import("./ClientSideOnly"), {
  ssr: false,
  loading: () => <span className="p-2">loading...</span>,
});
const ServerSideDateRenderedClientSide = lazy(
  () => import("./ServerSideDateRenderedClientSide"),
  {
    ssr: false,
    loading: () => <span className="p-2">loading...</span>,
  },
);

export const dynamic = "force-dynamic";
export const runtime = "edge";
export default function Home() {
  return (
    <main className="grid min-h-[98svh] place-items-center p-2">
      <h1 className="text-4xl font-bold text-center mb-8">
        Rendering Dates in Next.js
      </h1>
      <div className="grid grid-cols-[auto,auto,auto,] lg:grid-cols-[auto,auto,auto,auto,auto,auto] gap-y-4 max-w-7xl mx-auto">
        <span className="border-b p-2 hidden lg:block">Type</span>
        <span className="border-b p-2 hidden lg:block">Result</span>
        <span className="border-b p-2 hidden lg:block">Explanation</span>
        <span className="border-b p-2 hidden lg:block">Hydration Error</span>
        <span className="border-b p-2 hidden lg:block">Content Flash</span>
        <span className="border-b p-2 hidden lg:block">Users Timezone</span>

        <span className="border-y p-2 block lg:hidden">Type</span>
        <span className="border-y p-2 block lg:hidden">Result</span>
        <span className="border-y p-2 block lg:hidden">Explanation</span>
        <span className="p-2">Server Side Rendered Date</span>
        <SSRDate />
        <p className="p-2">
          This is the easiest way to display a date, but will be in the timezone
          of the server, not the user. Sometimes this is what you want, but
          often you want the date to be in the user's timezone.
        </p>
        <span className="border-y p-2 block lg:hidden">Hydration Error</span>
        <span className="border-y p-2 block lg:hidden">Content Flash</span>
        <span className="border-y p-2 block lg:hidden">Users Timezone</span>
        <span className="mb-16 p-2">No ✅</span>
        <span className="mb-16 p-2">No ❌</span>
        <span className="mb-16 p-2">No ❌</span>

        <span className="border-y p-2 block lg:hidden">Type</span>
        <span className="border-y p-2 block lg:hidden">Result</span>
        <span className="border-y p-2 block lg:hidden">Explanation</span>
        <span className="p-2">SSR with Hydration Date</span>
        <SSRWithHydrationDate />
        <p className="p-2">
          This is the first solution developers may turn too. It renders the
          date in to a string on the server, in the servers timezone. Then, when
          it hydrates on the client, it uses the clients timezone to render in
          local time. This causes the dreaded hydration mismatch error.
        </p>
        <span className="border-y p-2 block lg:hidden">Hydration Error</span>
        <span className="border-y p-2 block lg:hidden">Content Flash</span>
        <span className="border-y p-2 block lg:hidden">Users Timezone</span>
        <span className="mb-16 p-2">Yes ❌</span>
        <span className="mb-16 p-2">Yes ✅</span>
        <span className="mb-16 p-2">Yes ✅</span>

        <span className="border-y p-2 block lg:hidden">Type</span>
        <span className="border-y p-2 block lg:hidden">Result</span>
        <span className="border-y p-2 block lg:hidden">Explanation</span>
        <span className="p-2">Client Side Only Date</span>
        <Suspense>
          <ClientSideOnly />
        </Suspense>
        <p className="p-2">
          This works great, if and only if, the date isn't coming from the
          server. If you're going to fetch the datetime client side then this is
          fine, or if the user is say entering a calendar input, then this is
          perfectly fine. Because the client is responsible for generating and
          displaying the date in the users timezone.
        </p>
        <span className="border-y p-2 block lg:hidden">Hydration Error</span>
        <span className="border-y p-2 block lg:hidden">Content Flash</span>
        <span className="border-y p-2 block lg:hidden">Users Timezone</span>
        <span className="mb-16 p-2">No ✅</span>
        <span className="mb-16 p-2">Yes ✅</span>
        <span className="mb-16 p-2">Yes ✅</span>

        <span className="border-y p-2 block lg:hidden">Type</span>
        <span className="border-y p-2 block lg:hidden">Result</span>
        <span className="border-y p-2 block lg:hidden">Explanation</span>
        <span className="p-2">Server Side Date Rendered Client Side</span>
        <Suspense>
          <ServerSideDateRenderedClientSide date={new Date()} />
        </Suspense>
        <p className="p-2">
          This is 'the solution' to have the date generated / fetched on the
          server, but then rendered in the client's timezone. In the initial
          render, the server displays a loading message (a loading skeleton
          would look good). Then when the client hydrates, it renders the date
          in the users timezone.
        </p>
        <span className="border-y p-2 block lg:hidden">Hydration Error</span>
        <span className="border-y p-2 block lg:hidden">Content Flash</span>
        <span className="border-y p-2 block lg:hidden">Users Timezone</span>
        <span className="mb-16 p-2">No ✅</span>
        <span className="mb-16 p-2">Yes ✅</span>
        <span className="mb-16 p-2">Yes ✅</span>

        <span className="border-y p-2 block lg:hidden">Type</span>
        <span className="border-y p-2 block lg:hidden">Result</span>
        <span className="border-y p-2 block lg:hidden">Explanation</span>
        <span className="p-2">Custom Component</span>
        <span className="p-2">
          <DateFormatter
            date={new Date()}
            format="dd/MM/yyyy' 'hh:mm:ss:SSS' 'aaa"
          />
        </span>
        <p className="p-2">
          An implementation of the above solution as a reusable component.
        </p>
        <span className="border-y p-2 block lg:hidden">Hydration Error</span>
        <span className="border-y p-2 block lg:hidden">Content Flash</span>
        <span className="border-y p-2 block lg:hidden">Users Timezone</span>
        <span className="mb-16 p-2">No ✅</span>
        <span className="mb-16 p-2">Yes ✅</span>
        <span className="mb-16 p-2">Yes ✅</span>
      </div>
      <Link
        className="text-blue-300 hover:underline p-8"
        href="https://github.com/NWylynko/nextjs-date-hydration"
      >
        Check out the code on Github to view how the dates are rendered
      </Link>
    </main>
  );
}

function SSRDate() {
  return (
    <span className="p-2">
      {formatDate(new Date(), "dd/MM/yyyy' 'hh:mm:ss:SSS' 'aaa")}
    </span>
  );
}
