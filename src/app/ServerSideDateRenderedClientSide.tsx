"use client";

import { format as formatDate } from "date-fns";

type Props = {
  date: Date;
};

export default function ServerSideDateRenderedClientSide(props: Props) {
  return (
    <span>{formatDate(props.date, "dd/MM/yyyy' 'hh:mm:ss:SSS' 'aaa")}</span>
  );
}
