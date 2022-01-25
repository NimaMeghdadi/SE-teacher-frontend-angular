import { BaseDestination } from "./base-destination.type";

export type UrlBase = {
  [base in BaseDestination]: string;
};