import { NavbarItem } from "../models/navbar-item.model";

export const NAVBAR_CONFIG: NavbarConfig = {
  public: [
    {
      title: "Classes",
      route: "list",
      id: "list",
    },
    {
      title: "Professor Management",
      route: "professor",
      id: "professor",
    },
    {
      title: "Login",
      route: "profile/login",
      id: "profile",
    },
  ],
};

type NavbarConfig = { public: NavbarItem[] };
