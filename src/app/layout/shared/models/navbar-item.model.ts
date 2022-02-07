export interface NavbarItem {
  title: string;
  route?: string;
  id?: string;
  subItem?: NavbarItem[];
}
