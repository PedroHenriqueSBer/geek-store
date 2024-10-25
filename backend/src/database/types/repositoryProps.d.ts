declare module "repostitoryProps" {
  export type IBaseEntity = {
    id: string;
    createdAt: Date;
    disabled: boolean;
  };

  export type IUser = IBaseEntity & {
    name: string;
    email: string;
    password: string;
  };
}
