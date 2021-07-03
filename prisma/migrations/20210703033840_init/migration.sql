-- CreateTable
CREATE TABLE "Property" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(300) NOT NULL,
    "slug" VARCHAR(300) NOT NULL,
    "images" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "type" VARCHAR(300) NOT NULL,
    "subtype" VARCHAR(300) NOT NULL,
    "owner" VARCHAR(300) NOT NULL,
    "developer" VARCHAR(300) NOT NULL,
    "yearBuilt" INTEGER NOT NULL,
    "lotSize" INTEGER NOT NULL,
    "unitSize" INTEGER NOT NULL,
    "numberOfBedrooms" INTEGER NOT NULL,
    "numberOfBathrooms" INTEGER NOT NULL,
    "parkingLot" BOOLEAN NOT NULL,
    "listOfNearestObjects" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Locations" (
    "id" SERIAL NOT NULL,
    "address" VARCHAR(600) NOT NULL,
    "city" VARCHAR(300) NOT NULL,
    "province" VARCHAR(300) NOT NULL,
    "zipCode" INTEGER NOT NULL,
    "country" VARCHAR(300) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Geolocations" (
    "id" SERIAL NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,

    PRIMARY KEY ("id")
);
