declare module "entity" {
  export type IBaseEntity = {
    id: string;
    createdAt: string;
    disabled: boolean;
  };

  export type IUser = IBaseEntity & {
    name: string;
    email: string;
    password: string;
  };

  export type IEntitys = "users";
}
