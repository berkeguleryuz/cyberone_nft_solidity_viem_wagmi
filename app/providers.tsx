"use client";

import type React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider, Theme } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

import { config } from "../wagmi";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  const cyberTheme: Theme = {
    blurs: {
      modalOverlay: "blur(8px)",
    },
    colors: {
      accentColor: "#00D7FE",
      accentColorForeground: "#000000",
      actionButtonBorder: "#00D7FE",
      actionButtonBorderMobile: "#00D7FE",
      actionButtonSecondaryBackground: "#00D7FE",
      closeButton: "#000000",
      closeButtonBackground: "#00D7FE",
      connectButtonBackground: "#00D7FE",
      connectButtonBackgroundError: "#FF494A",
      connectButtonInnerBackground: "#00D7FE",
      connectButtonText: "#000000",
      connectButtonTextError: "#FFFFFF",
      connectionIndicator: "#00D7FE",
      downloadBottomCardBackground: "#121212",
      downloadTopCardBackground: "#1F1F1F",
      error: "#FF494A",
      generalBorder: "#303030",
      generalBorderDim: "#202020",
      menuItemBackground: "#0f868e",
      modalBackdrop: "rgba(0, 0, 0, 0.7)",
      modalBackground: "#00D7FE",
      modalBorder: "#303030",
      modalText: "#000000",
      modalTextDim: "#000000",
      modalTextSecondary: "#000000",
      profileAction: "#00D7FE",
      profileActionHover: "#00B7DB",
      profileForeground: "#1A1A1A",
      selectedOptionBorder: "#00D7FE",
      standby: "#00D7FE",
    },
    fonts: {
      body: "Codystar", 
      
    },
    radii: {
      actionButton: "8px",
      connectButton: "8px",
      menuButton: "8px",
      modal: "16px",
      modalMobile: "16px",
    },
    shadows: {
      connectButton: "0px 4px 12px rgba(0, 215, 254, 0.3)",
      dialog: "0px 8px 32px rgba(0, 0, 0, 0.5)",
      profileDetailsAction: "0px 2px 6px rgba(0, 215, 254, 0.2)",
      selectedOption: "0px 2px 6px rgba(0, 215, 254, 0.3)",
      selectedWallet: "0px 2px 6px rgba(0, 215, 254, 0.2)",
      walletLogo: "0px 2px 16px rgba(0, 0, 0, 0.25)",
    },
  };
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={cyberTheme} locale="en">
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "#1A1A1A",
                color: "#FFFFFF",
                border: "1px solid #303030",
                borderRadius: "8px",
              },
            }}
          />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
