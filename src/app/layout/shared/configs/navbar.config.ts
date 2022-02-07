import { NavbarItem } from '../models/navbar-item.model';

export const NAVBAR_CONFIG: NavbarConfig = {
  public: [
    {
      title: 'Publishers',
      route: 'publishers',
      id: 'publishers',
    },
    {
      title: 'Books',
      route: 'books',
      id: 'books',
    },
    {
      title: 'Authors',
      route: 'authors',
      id: 'authors',
    },
    {
      title: 'Customers',
      route: 'customers',
      id: 'customers',
    },
  ],
};

type NavbarConfig = { public: NavbarItem[] };
