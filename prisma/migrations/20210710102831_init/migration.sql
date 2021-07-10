-- CreateTable
CREATE TABLE "properties" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "slug" TEXT,
    "price" INTEGER,
    "category" TEXT,
    "subcategory" TEXT,
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

-- CreateTable
CREATE TABLE "addresses" (
    "id" TEXT NOT NULL,
    "street" TEXT,
    "streetDetail" TEXT,
    "city" TEXT,
    "province" TEXT,
    "zip" TEXT,
    "country" TEXT,
    "lat" TEXT,
    "long" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "propertyId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "addresses_propertyId_unique" ON "addresses"("propertyId");

-- AddForeignKey
ALTER TABLE "addresses" ADD FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE SET NULL ON UPDATE CASCADE;
