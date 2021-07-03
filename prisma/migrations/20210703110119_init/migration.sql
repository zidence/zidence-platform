-- CreateTable
CREATE TABLE "Properties" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "images" TEXT[],
    "price" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "subtype" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "developer" TEXT NOT NULL,
    "yearBuilt" INTEGER NOT NULL,
    "lotSize" INTEGER NOT NULL,
    "unitSize" INTEGER NOT NULL,
    "numberOfBedrooms" INTEGER NOT NULL,
    "numberOfBathrooms" INTEGER NOT NULL,
    "parkingLot" BOOLEAN NOT NULL,
    "listOfNearestObjects" TEXT[],

    PRIMARY KEY ("id")
);
