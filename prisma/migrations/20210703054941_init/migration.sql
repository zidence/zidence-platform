-- CreateTable
CREATE TABLE "Properties" (
    "id" SERIAL NOT NULL,
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

-- CreateTable
CREATE TABLE "Locations" (
    "id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "province" TEXT NOT NULL,
    "zipCode" INTEGER NOT NULL,
    "country" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Geolocation" (
    "id" SERIAL NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,

    PRIMARY KEY ("id")
);
