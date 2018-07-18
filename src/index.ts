import { IUserModule } from "./user";
export * from "./user";

export interface ITemplateResult {
  html: string;
}

export interface ITemplate {
  user: IUserModule;
}
