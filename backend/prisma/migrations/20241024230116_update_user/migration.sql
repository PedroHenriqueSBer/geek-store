/*
  Warnings:

  - Added the required column `createdAt` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `disabled` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "createdAt" VARCHAR(32) NOT NULL,
ADD COLUMN     "disabled" BOOLEAN NOT NULL;
