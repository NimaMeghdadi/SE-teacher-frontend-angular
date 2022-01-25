export class ParamsHandler {
  private _params: {
    [key: string]: any;
  } = {};

  public clear() {
    this._params = [];
    return this;
  }

  public addParam(key: string, value: any) {
    if (value !== undefined && value !== null) {
      this._params[key] = value;
    }
    return this;
  }

  public get getParams() {
    return this._params;
  }

  public get urlParamaters(): string {
    const objectPropertyKeys = Object.keys(this._params);
    let objectJSON = "";
    for (const objectName of objectPropertyKeys) {
      if (this._params[objectName] !== "") {
        objectJSON +=
          objectName + "=" + encodeURIComponent(this._params[objectName]) + "&";
      }
    }
    return objectJSON.substring(0, objectJSON.length - 1);
  }

  public static eup(object: any): string {
    let url = "";
    url = JSON.stringify(object, (key, value) => {
      if (value !== null) {
        return value;
      }
    });
    return btoa(url);
  }

  public static dup<T>(url: string): T {
    return JSON.parse(atob(url));
  }

  public count() {
    if (this._params) {
      const objPropName = Object.getOwnPropertyNames(this._params);
      return objPropName.length;
    } else {
      return 0;
    }
  }

  public toJson(): object {
    return this._params;
  }
}
