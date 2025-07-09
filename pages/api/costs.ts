import { getClient } from '@/lib/mongo'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const client = await getClient()
    const db = client.db('Cloud_Performance_Azure')
    const usageCollection = db.collection('azure_consumption_billing_account_modern_usage_details')

    // En vez de hacer agregación, solo traer documentos con los campos necesarios
    const rawData = await usageCollection.find(
      {
        cost_in_usd: { $gte: 0 },
        date: { $exists: true }
      },
      {
        projection: {
          _id: 0,
          date: 1,
          cost_in_usd: 1,
          subscription_guid: 1,
          subscription_name: 1,
          resource_location: 1,
          instance_name: 1,
          meter_category: 1,
          product: 1,
          tags: 1
        }
      }
    ).toArray()

    // Formatear la fecha a string YYYY-MM-DD para facilitar filtros y display
    const formatted = rawData.map(doc => ({
      ...doc,
      date: doc.date instanceof Date ? doc.date.toISOString().slice(0, 10) : doc.date
    }))

    return res.status(200).json(formatted)

  } catch (error) {
    console.error('Error fetching data:', error)
    return res.status(500).json({ error: 'Failed to fetch data' })
  }
}
