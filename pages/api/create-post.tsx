// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next"


export default (req: NextApiRequest, res: NextApiResponse) => {
    res.setHeader('Content-Type', 'application/json')
    let {title,description} = req.body;
    console.log(req.body)
  res.status(200).json({title,description})
}
