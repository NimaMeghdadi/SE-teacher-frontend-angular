import { TestBed } from "@angular/core/testing";

import { StorageManagerService } from "./storage-manager.service";

describe("Service: StorageManager", () => {
  let service: StorageManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers : [StorageManagerService]
    });
    service = TestBed.inject(StorageManagerService);
  });

  it("should be created storage service truthly", () => {
    expect(service).toBeTruthy();
  });

  it("should set item to localStorage", () => {
    service.setLocalStorage("User", "user");
    let storedDataInLocalStorage = localStorage.getItem("User");
    expect(storedDataInLocalStorage).toBe("user");
  });

  it("should remove value $test$ with key of User from localstorage", () => {
    localStorage.setItem("User", "test");
    service.removeItemFromLocalStorage("User");
    expect(localStorage.getItem("User")).toBeNull();
  });

  it("should clear localstorage", () => {
    localStorage.setItem("User", "test");
    service.clearLocalStorage();
    let user = localStorage.getItem("User");
    expect(user).toBeNull();
  });

  it("should set item to sessionStorage", () => {
    service.setSessionStorage("User", "user");
    let storedDataInSessionStorage = sessionStorage.getItem("User");
    expect(storedDataInSessionStorage).toBe("user");
  });

  it("should read value $test$ with key of User from sessionStorage", () => {
    sessionStorage.setItem("User", "test");
    expect(service.getSessionStorage("User")).toBe("test");
  });

  it("should remove value $test$ with key of User from sessionstorage", () => {
    sessionStorage.setItem("User", "test");
    service.removeItemFromSessionStorage("User");
    expect(sessionStorage.getItem("User")).toBeNull();
  });

  it("should clear sessionstorage", () => {
    sessionStorage.setItem("User", "test");
    service.clearSessionStorage();
    let user = service.getSessionStorage("User")
    expect(user).toBeNull();
  });
});
