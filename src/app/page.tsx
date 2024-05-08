import { format as formatDate } from "date-fns";
import { SSRWithHydrationDate } from "./SSRWithHydrationDate";
import lazy from "next/dynamic";
import Link from "next/link";
import { Suspense } from "react";
import { DateFormatter } from "./DateFormatter";
const ClientSideOnly = lazy(() => import("./ClientSideOnly"), {
  ssr: false,
  loading: () => <span>loading...</span>,
});
const ServerSideDateRenderedClientSide = lazy(
  () => import("./ServerSideDateRenderedClientSide"),
  {
    ssr: false,
    loading: () => <span>loading...</span>,
  },
);

export const dynamic = "force-dynamic";
export const runtime = "edge";
export default function Home() {
  return (
    <main className="grid min-h-[98svh] place-items-center">
      <div className="grid grid-cols-[auto,auto,auto,auto,auto,auto] gap-4 max-w-7xl mx-auto">
        <span className="border-b p-2">Type</span>
        <span className="border-b p-2">Result</span>
        <span className="border-b p-2">Explanation</span>
        <span className="border-b p-2">Hydration Error</span>
        <span className="border-b p-2">Content Flash</span>
        <span className="border-b p-2">Users Timezone</span>

        <span>Server Side Rendered Date</span>
        <SSRDate />
        <p>
          This is the easiest way to display a date, but will be in the timezone
          of the server, not the user. Sometimes this is what you want, but
          often you want the date to be in the user's timezone.
        </p>
        <span>No ✅</span>
        <span>No ❌</span>
        <span>No ❌</span>

        <span>SSR with Hydration Date</span>
        <SSRWithHydrationDate />
        <p>
          This is the first solution developers may turn too. It renders the
          date in to a string on the server, in the servers timezone. Then, when
          it hydrates on the client, it uses the clients timezone to render in
          local time. This causes the dreaded hydration mismatch error.
        </p>
        <span>Yes ❌</span>
        <span>Yes ✅</span>
        <span>Yes ✅</span>

        <span>Client Side Only Date</span>
        <Suspense>
          <ClientSideOnly />
        </Suspense>
        <p>
          This works great, if and only if, the date isn't coming from the
          server. If you're going to fetch the datetime client side then this is
          fine, or if the user is say entering a calendar input, then this is
          perfectly fine. Because the client is responsible for generating and
          displaying the date in the users timezone.
        </p>
        <span>No ✅</span>
        <span>Yes ✅</span>
        <span>Yes ✅</span>

        <span>Server Side Date Rendered Client Side</span>
        <Suspense>
          <ServerSideDateRenderedClientSide date={new Date()} />
        </Suspense>
        <p>
          This is 'the solution' to have the date generated / fetched on the
          server, but then rendered in the client's timezone. In the initial
          render, the server displays a loading message (a loading skeleton
          would look good). Then when the client hydrates, it renders the date
          in the users timezone.
        </p>
        <span>No ✅</span>
        <span>Yes ✅</span>
        <span>Yes ✅</span>

        <span>Custom Component</span>
        <span>
          <DateFormatter
            date={new Date()}
            format="dd/MM/yyyy' 'hh:mm:ss:SSS' 'aaa"
          />
        </span>
        <p>An implementation of the above solution as a reusable component.</p>
        <span>No ✅</span>
        <span>Yes ✅</span>
        <span>Yes ✅</span>
      </div>
      <Link
        className="text-blue-300 hover:underline"
        href="https://github.com/NWylynko/nextjs-date-hydration"
      >
        Check out the code on Github to view how the dates are rendered
      </Link>
    </main>
  );
}

function SSRDate() {
  return (
    <span>{formatDate(new Date(), "dd/MM/yyyy' 'hh:mm:ss:SSS' 'aaa")}</span>
  );
}
