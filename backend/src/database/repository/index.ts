import { PrismaClient } from "@prisma/client";
import { IBaseEntity, IEntitys, IUser } from "entity";

const Repository = <T extends IBaseEntity>(repository: IEntitys) => {
  const get = async (where: T, select?: T): Promise<T | null> => {
    const prisma = new PrismaClient();
    await prisma.$connect();
    const result = await prisma[repository].findUnique({
      where,
      select: select as any,
    });
    await prisma.$disconnect();
    return result as any;
  };

  const getAll = async (where: T, select?: T): Promise<T | null> => {
    const prisma = new PrismaClient();
    await prisma.$connect();
    const result = await prisma[repository].findMany({
      where,
      select: select as any,
    });
    await prisma.$disconnect();
    return result as any;
  };

  const insert = async (data: T, select?: T): Promise<string> => {
    const prisma = new PrismaClient();
    await prisma.$connect();
    const result = await prisma[repository].create({
      data: data as any,
      select: select as any,
    });
    await prisma.$disconnect();
    return result.id;
  };

  const insertMany = async (data: T[]): Promise<string[]> => {
    const prisma = new PrismaClient();
    await prisma.$connect();
    const result = await prisma[repository].createManyAndReturn({
      data: data as any,
    });
    await prisma.$disconnect();
    return result.map((r) => r.id);
  };

  const update = async (data: T, where: T, select?: T) => {
    const prisma = new PrismaClient();
    await prisma.$connect();
    await prisma[repository].update({
      data,
      where,
      select: select as any,
    });
    await prisma.$disconnect();
  };

  const updateMany = async (data: T[], where: T) => {
    const prisma = new PrismaClient();
    await prisma.$connect();
    await prisma[repository].updateMany({
      data,
      where,
    });
    await prisma.$disconnect();
  };

  const del = async (data: T, where: T) => {
    const prisma = new PrismaClient();
    await prisma.$connect();
    await prisma[repository].update({
      data: {
        ...data,
        disabled: true,
      } as any,
      where,
    });
    await prisma.$disconnect();
  };

  const delMany = async (data: T[], where: T) => {
    const prisma = new PrismaClient();
    await prisma.$connect();
    const newDataList = data.map((d) => ({ ...d, disabled: true }));
    await prisma[repository].updateMany({
      data: newDataList as any,
      where,
    });
    await prisma.$disconnect();
  };

  const repositoryProps = {
    get,
    getAll,
    insert,
    insertMany,
    update,
    updateMany,
    del,
    delMany,
  };

  return repositoryProps;
};

const _userRepository = Repository<IUser>("users");

export { _userRepository };
