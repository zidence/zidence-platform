import { Request, Response } from 'express'
import slugify from 'slugify'
import { validationResult } from "express-validator"

import prisma from '../prismaClient'

export interface PropertyTypes {
  id?: string
  name?: string
  slug?: string
  price?: number
  owner?: string
  category?: string
  subcategory?: string
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
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const {
      name,
      images,
      price,
      category,
      subcategory,
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

    const newProperty = await prisma.property.create({
      data: {
        name,
        images,
        price,
        category,
        subcategory,
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
    const properties = await prisma.property.findMany()

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

export const updateProperty = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const {
      id,
      name,
      images,
      price,
      category,
      subcategory,
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

    const updatedProperty = await prisma.property.update({
      where: {
        id: id,
      },
      data: {
        name,
        images,
        price,
        category,
        subcategory,
        owner,
        developer,
        yearBuilt,
        lotSize,
        unitSize,
        numberOfBedrooms,
        numberOfBathrooms,
        parkingLot,
        listOfNearestObjects,
      }
    })

    if (!updatedProperty) {
      return res.status(404).json({
        success: false,
        message: 'Update property failed',
      })
    }

    res.status(200).json({
      message: 'Update property',
      updatedProperty
    })
  } catch (error) {
    console.error(error.message)
    res.status(400).json({
      message: 'Update properties failed',
      error: error.message,
    })
  }
}

export const deleteProperty = async (req: Request, res: Response) => {
  try {
    const { propertyId } = req.params;
    const deletedProperty = await prisma.property.delete({
      where: {
        id: propertyId
      }
    });

    if (!deletedProperty) {
      return res.status(404).json({
        success: false,
        message: 'Delete Property failed'
      })
    }

    res.status(200).json({
      message: 'Delete property',
      deletedProperty
    })
  } catch (error) {
    console.error(error.message);
    res.status(400).json({
      message: 'Delete property failed',
      error: error.message,
    })
  }
}
