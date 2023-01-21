import type { NextApiRequest, NextApiResponse } from 'next'
import User from '../../models/User';
import { users } from '../../utils/data';
import { connectDB } from '../../utils/db'

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    await connectDB();
    await User.deleteMany()
    await User.insertMany(users)
    res.send({message: 'seeded successfully'})
}
