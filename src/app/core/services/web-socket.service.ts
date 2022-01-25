import { Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { environment } from "@env/environment";
import { Dictionary } from "../shared";
import { webSocket, WebSocketSubject } from "rxjs/webSocket";
import { StorageManagerService } from "./storage-manager.service";
import { WebSocketResponse } from "../shared/interfaces";
import { WEB_SOCKET_EVENT } from "../shared/configs/web-socket-event.config";

@Injectable({
  providedIn: "root",
})
export class WebSocketService {
  private interval: any;
  private relativeNow!: Date;
  private now!: Date;
  private readonly WEB_SOCKER_URL = environment.webSocketUrl;
  // private eventBus$: Dictionary<Subject<WebSocketResponse>> = {"Authenticate":"dca85d56-bb6a-4af6-a213-ecd6f0739d5e" , "SetActiveBus" : "1cf2e637-9564-41c0-b0c9-dd2ac528ad81"};
  private eventBus$: Dictionary<Subject<WebSocketResponse>> = {};
  private _wsSubject!: WebSocketSubject<any>;

  constructor(private _storageManagerService: StorageManagerService) {
    this.initEventBus();
  }

  public set wsSubject(value: any) {
    this._wsSubject.next(value);
  }
  init(params: string = "") {
    let url = `${
      this.WEB_SOCKER_URL
    }?Authorization=${this._storageManagerService.getLocalStorage("Token")}`;
    if (params !== "") {
      url += "&" + params;
    }
    this._wsSubject = webSocket({
      url: url,
      openObserver: {
        next: () => {
          this.keepConnectionAlive();
          console.log("ws succesfully connected");
        },
      },
      closeObserver: {
        next: () => {
          console.log("ws disconnected");
        },
      },
    });

    this._wsSubject.subscribe(
      msg => {
        this.relativeNow = new Date();
        if (msg["Success"] != undefined) {
          this.eventBus$[msg["MsgID"]].next(msg);
        } else if (msg["Type"] == "BusPosition") {
          this.eventBus$["BusPosition"].next(msg);
        }
      },
      err => console.log(err),
      () => console.log("_wsSubject complete"),
    );
  }

  initEventBus() {
    Object.keys(WEB_SOCKET_EVENT).forEach(item => {
      this.eventBus$[WEB_SOCKET_EVENT[item]] = new Subject();
    });
  }

  getEvent(event: any): Subject<WebSocketResponse | any> {
    return this.eventBus$[WEB_SOCKET_EVENT[event]];
  }

  keepConnectionAlive() {
    // this.interval = setInterval(() => {
    //   this._wsSubject.next({ code: 7000 });
    // }, 19000);
    // // this.cyclicCheck =
    // setInterval(() => {
    //   this.now = new Date();
    //   // CAUTION: Extremely dangerous operation!
    //   if (this.now.getTime() - this.relativeNow?.getTime() > 42000) {
    //     this.now = new Date();
    //     this.relativeNow = new Date();
    //     location.reload();
    //   }
    // }, 3300);
  }

  closeSocket() {
    try {
      clearInterval(this.interval);
      this._wsSubject.complete();
    } catch (error) {
      console.log("exception handled successfully!");
    }
  }
}
