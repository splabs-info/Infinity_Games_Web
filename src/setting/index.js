
import { develop, production, staging } from "./environment";
export const ACCESS_TOKEN_KEY = "CBt3gpbqeMdWPNG1";
export const DEVICE_KEY = "uU5tEUmAgvBWArsv";
export const SCOPES_KEY = "AhBcmvr1EkMdPnL5";
export const S3_URL = "/images/";
export const image_url =
  "https://6f7daba956414f5fa57231546ac07221.s3.ap-southeast-1.amazonaws.com";
export const explorer_url = "https://bscscan.com/tx";

export const hostname = window.location.hostname.replace("www.", "");

const configs = {
  localhost: develop,
  "infinity-games.feliciastation.com": develop,
};
export const config = configs[hostname] ? configs[hostname] : production;
export const { API, ETHERSCAN_LINK, MAIN_MENUS, BLOCKCHAIN } = config;
export const PROJECT_LOCATION = "GLOBAL";