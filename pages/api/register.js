import bcrypt from 'bcryptjs'
import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI // Pon tu conexión a Mongo en .env.local
let cachedClient = null

async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient
  }
  const client = await MongoClient.connect(uri)
  cachedClient = client
  return client
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST allowed' })
  }

  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password required' })
  }

  try {
    const client = await connectToDatabase()
    const db = client.db('login_db') // Nombre db por defecto o configura en URI

    // Hash de la contraseña
    const hashedPassword = await bcrypt.hash(password, 10)

    // Insertar usuario
    const result = await db.collection('users').insertOne({
      email,
      password: hashedPassword,
      createdAt: new Date()
    })

    return res.status(201).json({ message: 'Usuario creado', userId: result.insertedId })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Error al crear usuario' })
  }
}
