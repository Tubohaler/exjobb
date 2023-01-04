// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data } = await axios.get<{
    type: string;
    greeting: string;
    language: string;
  }>('https://www.greetingsapi.com/random');
  res.status(200).json({
    greeting: `${data.type} in ${data.language} is ${data.greeting}`,
  });
}
