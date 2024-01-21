/*
  Warnings:

  - Added the required column `totalPrice` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `order` ADD COLUMN `createdAT` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `shippingStatus` ENUM('PENDING', 'SHIPPING', 'COMPLETED') NOT NULL DEFAULT 'PENDING',
    ADD COLUMN `totalPrice` DECIMAL(50, 2) NOT NULL,
    ADD COLUMN `updatedAT` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
