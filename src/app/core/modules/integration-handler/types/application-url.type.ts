import { ApplicationName } from "./application-name.type";

export type ApplicationUrl<T> = {
  [applicationName in ApplicationName]: T;
};