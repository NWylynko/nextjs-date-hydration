import lazy from "next/dynamic";
import { Suspense } from "react";
const DateFormatterClient = lazy(() => import("./Client"), {
  ssr: false,
  loading: () => <div className="h-6 w-56 rounded bg-gray-100 animate-pulse" />,
});

export type DateFormatterProps = {
  date: Date;
  format: string;
};

export function DateFormatter(props: DateFormatterProps) {
  return (
    <Suspense>
      <DateFormatterClient {...props} />
    </Suspense>
  );
}
