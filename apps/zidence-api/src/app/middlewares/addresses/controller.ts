import { Request, Response } from 'express'

import prisma from '../prismaClient'

export const getAddresses = async (req: Request, res: Response) => {
  try {
    const addresses = await prisma.address.findMany()

    if (!addresses) {
      return res.status(404).json({
        message: 'Get all addresses failed',
      })
    }

    res.status(200).json({
      message: 'Get all addresses',
      addresses,
    })
  } catch (error) {
    console.error(error.message)
    res.status(400).json({
      message: 'Get all addresses failed',
      error: error.message,
    })
  }
}
