import { Request, Response } from 'express'
import slugify from 'slugify'

import prisma from '../prismaClient'

export interface PropertyTypes {
  name?: string
  slug?: string
  type?: string
  price?: number
  owner?: string
  subtype?: string
  developer?: string
  yearBuilt?: number
  lotSize?: number
  unitSize?: number
  numberOfBedrooms?: number
  numberOfBathrooms?: number
  parkingLot?: boolean
  listOfNearestObjects?: string[]
  images?: string[]
}

export const addProperty = async (req: Request, res: Response) => {
  try {
    const {
      name,
      images,
      price,
      subtype,
      owner,
      developer,
      yearBuilt,
      lotSize,
      unitSize,
      numberOfBedrooms,
      numberOfBathrooms,
      parkingLot,
      listOfNearestObjects,
    }: PropertyTypes = req.body

    const newProperty = await prisma.properties.create({
      data: {
        name,
        images,
        price,
        subtype,
        owner,
        developer,
        yearBuilt,
        lotSize,
        unitSize,
        numberOfBedrooms,
        numberOfBathrooms,
        parkingLot,
        listOfNearestObjects,
        slug: slugify(name).toLowerCase(),
      },
    })

    if (!newProperty) {
      return res.status(400).json({
        message: 'Create new property failed',
      })
    }

    res.status(200).json({
      message: 'Create new property success',
      newProperty,
    })
  } catch (error) {
    console.error(error.message)
    res.status(500).json({
      error: error.message,
    })
  }
}

export const getProperties = async (req: Request, res: Response) => {
  try {
    const properties = await prisma.properties.findMany()

    if (!properties) {
      return res.status(404).json({
        message: 'Get all properties failed',
      })
    }

    res.status(200).json({
      message: 'Get all properties',
      properties,
    })
  } catch (error) {
    console.error(error.message)
    res.status(400).json({
      message: 'Get all properties failed',
      error: error.message,
    })
  }
}
