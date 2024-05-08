"use client";

import { format as formatDate } from "date-fns";
import { DateFormatterProps } from "./index";

export default function DateFormatterClient(props: DateFormatterProps) {
  return <>{formatDate(props.date, props.format)}</>;
}
