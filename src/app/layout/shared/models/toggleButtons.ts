export class toglleButtonInfo {
  title: string;
  icon: string;
  toggleMode: string;
  data?: any
}

export let sideMenuButtons: Array<toglleButtonInfo> = [
  {
    title: "searchSide",
    icon: "search",
    toggleMode: "search",
  },
  {
    title: "info",
    icon: "info",
    toggleMode: "info",
  },
];
