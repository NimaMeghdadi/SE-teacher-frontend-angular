// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  BASE_URL: "https://stageapi.dibuses.com/",
  // BASE_URL: "http://192.168.2.138:8080/",
  APP_NAME: "",
  WSS_ENDPOINT: "ws://notification.dirides.com:6652",
  HomeUrl: "https://stage.dibuses.com/#/login",
  webSocketUrl:"wss://notif1.dibuses.com:8080/"
};
