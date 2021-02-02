// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

const cards = [
  { title: "Title 1" },
  { title: "Title 2" },
  { title: "Title 3" },
  { title: "Title 4" },
  { title: "Title 5" },
  { title: "Title 6" },
  { title: "Title 7" },
  { title: "Title 8" },
];
export default (req: NextApiRequest, res: NextApiResponse) => {
  setTimeout(() => {
    res.status(200).json({ cards });
  }, 3000);
};
