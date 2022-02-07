import { NavbarItem } from '../models/navbar-item.model';

export const NAVBAR_CONFIG: NavbarConfig = {
  public: [
    {
      title:'Home',
      route:'home',
      id:'home'
    },
    {
      title: "All Products",
      route: 'store/products',
      id: 'store',
    },
    {
      title: 'Electronics',
      route: 'Electronics',
      id: '1'
    },
    {
      title: 'Health & Beauty',
      route: 'Health & Beauty',
      id: '3'
    },
    {
      title: 'Home & Garden',
      route: 'Home & Garden',
      id: '4'
    },
    {
      title: 'Sports',
      route: 'Sports',
      id: '5'
    },
    {
      title: 'Users',
      route: 'users',
      id: 'users'
    },
    // {
    //   title: 'Sell',
    //   id: 'sell',
    //   subItem: [
    //     {
    //       title: 'Census Data',
    //       route: 'research/census',
    //     },
    //     {
    //       title: 'Population Report',
    //       route: 'research/population-report',
    //     },
    //   ],
    // },
    // {
    //   title: 'About Us',
    //   id: '',
    //   subItem: [
    //     {
    //       title: 'People',
    //     },
    //     {
    //       title: 'Firm’s History',
    //     },
    //   ],
    // },
  ],
  customer: [
    {
      title: 'Lot List',
      route: '/seller/lot-status',
    },
    {
      title: 'Invoices',
      route: '/seller/customer/customer-invoice-list',
    },
    {
      title: 'Extensions',
      route: '/seller/customer/customer-extension-list',
    },
    {
      title: 'Returns',
      route: '/seller/customer/customer-return-list',
    },
  ],
};

type NavbarConfig = { public: NavbarItem[]; customer: NavbarItem[] };
