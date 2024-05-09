"use client";

import { format as formatDate } from "date-fns";

export function SSRWithHydrationDate() {
  return (
    <span className="p-2">
      {formatDate(new Date(), "dd/MM/yyyy' 'hh:mm:ss:SSS' 'aaa")}
    </span>
  );
}
