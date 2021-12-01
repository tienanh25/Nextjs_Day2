// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Product = {
    name: string,
    city: string,
}

const products: Product[] = [
    {
        name: 'name 1',
        city: "Hanoi",
    },
    {
        name: 'name 2',
        city: "TP.HCM",
    },
    {
        name: 'name 3',
        city: "TP.HCM",
    },
    {
        name: 'name 4',
        city: "TP.HCM",
    },
    {
        name: 'name 5',
        city: "Cao Lanh",
    }
]

export default function handler(
  req: any,
  res: any
) {
  res.status(200).json({ name: 'John Doe' })
}
