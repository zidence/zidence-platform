-- CreateTable
CREATE TABLE "properties" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "slug" TEXT,
    "price" INTEGER,
    "category" TEXT,
    "subcategory" TEXT,
    "developer" TEXT,
    "yearBuilt" INTEGER,
    "lotSize" INTEGER,
    "unitSize" INTEGER,
    "parkingLot" BOOLEAN,
    "numberOfBedrooms" INTEGER,
    "numberOfBathrooms" INTEGER,
    "owner" TEXT,
    "images" TEXT[],
    "listOfNearestObjects" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);
