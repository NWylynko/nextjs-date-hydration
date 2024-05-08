"use client";

import { format as formatDate } from "date-fns";

export default function ClientSideOnlyDate() {
  return (
    <span>{formatDate(new Date(), "dd/MM/yyyy' 'hh:mm:ss:SSS' 'aaa")}</span>
  );
}
