-- DropForeignKey
ALTER TABLE "auth" DROP CONSTRAINT "auth_userId_fkey";

-- AddForeignKey
ALTER TABLE "auth" ADD CONSTRAINT "auth_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
