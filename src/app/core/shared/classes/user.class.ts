export class User {
  AccountID: number = 0;
  AccountName: string = "";
  ApplicationID: number = 0;
  CellPhone: string = "";
  Email: string = "";
  FormalName: string = "";
  Token: string = "";
  GUID: string = "";
  IsMainAccount: string = "";
  MapAPI: number = 0;
  MapConfig: string = "";
  RoleID: number = 0;
  RoleName: string = "";
  UnitOfDistance: number = 0;
  UserID: number = 0;
  UserKindID: number = 0;
  UserName: string = "";
  FirstLetterOfUserName: string = "";

  constructor(user: User | null = null) {
    if (user) {
      this.AccountID = user.AccountID;
      this.AccountName = user.AccountName;
      this.ApplicationID = user.ApplicationID;
      this.CellPhone = user.CellPhone;
      this.Email = user.Email;
      this.FormalName = user.FormalName;
      this.Token = user.GUID;
      this.IsMainAccount = user.IsMainAccount;
      this.MapAPI = user.MapAPI;
      this.MapConfig = user.MapConfig;
      this.RoleID = user.RoleID;
      this.RoleName = user.RoleName;
      this.UnitOfDistance = user.UnitOfDistance;
      this.UserID = user.UserID;
      this.UserKindID = user.UserKindID;
      this.UserName = user.UserName;
      this.FirstLetterOfUserName = user.UserName.charAt(0) ?? "";
    }
  }
}
