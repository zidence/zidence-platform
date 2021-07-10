import { Request, Response } from 'express'
import slugify from 'slugify'
import { validationResult } from "express-validator"

import prisma from '../prismaClient'

export interface IProperty {
  propertyId?: number
  name?: string
  slug?: string
  price?: number
  owner?: string
  developer?: string
  category?: string
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
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const {
      name,
      images,
      price,
      owner,
      developer,
      category,
      yearBuilt,
      lotSize,
      unitSize,
      numberOfBedrooms,
      numberOfBathrooms,
      parkingLot,
      listOfNearestObjects,
    }: IProperty = req.body

    const newProperty = await prisma.properties.create({
      data: {
        name,
        images,
        price,
        owner,
        developer,
        category,
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
    res.status(500).json({
      error: error.message,
    })
    console.error(error.message)
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
    res.status(400).json({
      message: 'Get all properties failed',
      error: error.message,
    })
    console.error(error.message)
  }
}



export const getProperty = async (req: Request, res: Response) => {
  try {
    const { propertyId } = req.params

    const property = await prisma.properties.findUnique({
      where: {
        id: Number(propertyId),
      }
    })

    if (!property) {
      return res.status(400).json({
        message: 'Get property failed',
      })
    }

    res.status(200).json({
      message: 'Get Property success',
      property,
    })

  } catch (error) {
    res.status(400).json({
      message: 'Get property failed',
      error: error.message,
    })
    console.error(error.message)
  }
}

export const updateProperty = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const {
      propertyId,
      name,
      images,
      price,
      owner,
      developer,
      category,
      yearBuilt,
      lotSize,
      unitSize,
      numberOfBedrooms,
      numberOfBathrooms,
      parkingLot,
      listOfNearestObjects,
    }: IProperty = req.body

    const updateProperty = await prisma.properties.update({
      where: {
        id: Number(propertyId)
      },
      data: {
        name,
        images,
        price,
        owner,
        developer,
        category,
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

    if (!updateProperty) {
      return res.status(400).json({
        message: 'Update property failed',
      })
    }


    res.status(200).json({
      message: 'Update Property success',
      updateProperty,
    })
  } catch (error) {
    res.status(400).json({
      message: 'Update property failed',
      error: error.message,
    })
    console.error(error.message)
  }
}

export const deleteProperty = async (req: Request, res: Response) => {
  res.send("update property")
}
