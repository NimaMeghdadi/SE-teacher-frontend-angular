import { Injectable } from "@angular/core";
import { StorageKey } from "../shared";

@Injectable({
  providedIn: "root",
})
export class StorageManagerService {
  public setLocalStorage(key: StorageKey, value: string): void {
    localStorage.setItem(key, value);
  }

  public getLocalStorage(key: StorageKey): string {
    return localStorage.getItem(key) ?? "";
  }

  public clearLocalStorage(): void {
    localStorage.clear();
  }

  public removeItemFromLocalStorage(key: StorageKey): void {
    localStorage.removeItem(key);
  }

  public setSessionStorage(key: StorageKey, value: string): void {
    sessionStorage.setItem(key, value);
  }

  public getSessionStorage(key: StorageKey): string {
    return sessionStorage.getItem(key) ?? "";
  }

  public clearSessionStorage(): void {
    sessionStorage.clear();
  }

  public removeItemFromSessionStorage(key: StorageKey): void {
    sessionStorage.removeItem(key);
  }
}
