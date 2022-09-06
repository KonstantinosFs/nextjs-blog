// #region JS
/*export default function handler(req, res) {
  res.status(200).json({ text: "Hello" });
}*/
// #endregion

// #region TS
import { NextApiRequest, NextApiResponse } from "next";
export default (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: "Hello" });
};
// #endregion
