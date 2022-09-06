// #region JS
// import { parseISO, format } from "date-fns";

// export default function Date({ dateString }) {
//   const date = parseISO(dateString);
//   return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
// }
// #endregion

// #region TS
import { parseISO, format } from "date-fns";

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
// #endregion
