import { Request, Response } from "express"
import { PrismaClient } from '@prisma/client'
import slugify from "slugify"


const prisma = new PrismaClient()

interface PropertyTypes {
  name: string;
  images: string;
  price: number,
  owner: string;
  subtype: string,
  developer: string;
  yearBuilt: number;
  lotSize: number;
  unitSize: number;
  numberOfBedrooms: number;
  numberOfBathrooms: number;
  parkingLot: boolean;
  listOfNearestObjects: string;
  slug: string;
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

    const createProperty = await prisma.property.create({
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
        slug: slugify(name)
      }
    })

    if (!createProperty) {
      return res.status(404).json({
        message: "Data Property not found !"
      })
    }

    res.status(200).json(createProperty)
  } catch (error) {
    res.status(400).json(error.message)
    console.error(error.message)
  }
}

export const getProperties = async (req: Request, res: Response) => {
  try {
    const properties = await prisma.property.findMany();

    if (!properties) return res.status(404).json({
      message: "Properties Not Found !."
    })

    res.status(200).json(properties)

  } catch (error) {
    res.status(400).json({
      message: error.message
    })
    console.error(error.message);
  }
}

