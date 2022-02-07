export class Assistant {
  public static menuItem: any[];

  public static adminNavItem: any[] = [
    // {
    //   id: 0,
    //   name: 'Customer',
    //   link: '/customer',
    //   fontIcon: 'people',
    //   icon: '',
    //   admin: false,
    // },
  ];

  public static devNavItem: any[] = [
    {
      id: 0,
      name: 'Auctions',
      link: '/dashboard',
      fontIcon: 'gavel',
      icon: '',
      admin: false,
    },
  ];

  public static onChooseNavItem(isAdminPanel: boolean) {
    if (isAdminPanel) {
      this.menuItem = [...this.adminNavItem];
    } else {
      this.menuItem = [...this.devNavItem];
    }
  }

  public static ConvertTime(time: number): string {
    var date = new Date();
    date.setSeconds(time);
    return date.toISOString();
  }

  public static getColor(index:any): string {
    var color = [
      '#f44336',
      '#E91E63',
      '#9C27B0',
      '#673AB7',
      '#3F51B5',
      '#2196F3',
      '#03A9F4',
      '#00BCD4',
      '#009688',
      '#4CAF50',
      '#8BC34A',
      '#CDDC39',
      '#FFEB3B',
      '#FFC107',
      '#FF9800',
      '#FF5722',
      '#795548',
      '#9E9E9E',
      '#607D8B',
    ];
    return color[index % color.length];
  }
  public static getIntTime(value: string) {
    var a = value.split(':'); // split it at the colons
    // minutes are worth 60 seconds. Hours are worth 60 minutes.
    return +a[0] * 60 * 60 + +a[1] * 60;
  }

  public static castBoolToNumber(val: boolean): number {
    if (val == true) {
      return 1;
    } else {
      return 0;
    }
  }

  public static isJSON(str:any) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }
}
