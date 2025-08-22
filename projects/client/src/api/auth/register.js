import connectMongo from '../../../server/utils/mongo';
import Client from '../../../../server/models/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  await connectMongo();

  if (req.method !== 'POST') {
    return res.status(405).json({ status: false, message: 'Method Not Allowed' });
  }

  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ status: false, message: 'Name, email, and password are required' });
    }

    const existing = await Client.findOne({ email });
    if (existing) {
      return res
        .status(400)
        .json({ status: false, message: 'This email address is already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newClient = await Client.create({ name, email, password: hashedPassword });

    const payload = { name: newClient.name, email: newClient.email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' });

    // CORS
    res.setHeader('Access-Control-Allow-Origin', process.env.FRONT_URL);
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    return res.status(201).json({
      status: true,
      token,
      name: newClient.name,
      email: newClient.email,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ status: false, message: 'Server error' });
  }
}
