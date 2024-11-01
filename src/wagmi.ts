import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { avalancheFuji } from "wagmi/chains";
import { appConfig } from "./constant";

export const config = getDefaultConfig({
  appName: appConfig.appName,
  projectId: appConfig.walletConnectProjectID,
  chains: [avalancheFuji],
  ssr: true,
});
