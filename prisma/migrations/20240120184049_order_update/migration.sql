/*
  Warnings:

  - You are about to drop the `_ordertoproduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_ordertoproduct` DROP FOREIGN KEY `_OrderToProduct_A_fkey`;

-- DropForeignKey
ALTER TABLE `_ordertoproduct` DROP FOREIGN KEY `_OrderToProduct_B_fkey`;

-- DropTable
DROP TABLE `_ordertoproduct`;

-- CreateTable
CREATE TABLE `ProductWithQuantity` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `productId` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,
    `orderId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ProductWithQuantity` ADD CONSTRAINT `ProductWithQuantity_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductWithQuantity` ADD CONSTRAINT `ProductWithQuantity_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
