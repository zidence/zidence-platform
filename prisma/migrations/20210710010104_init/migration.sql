-- CreateTable
CREATE TABLE "properties" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "slug" TEXT,
    "price" INTEGER,
    "developer" TEXT,
    "yearBuilt" INTEGER,
    "lotSize" INTEGER,
    "unitSize" INTEGER,
    "numberOfBedrooms" INTEGER,
    "numberOfBathrooms" INTEGER,
    "parkingLot" BOOLEAN,
    "owner" TEXT,
    "images" TEXT[],
    "listOfNearestObjects" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);
