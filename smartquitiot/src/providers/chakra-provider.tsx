"use client";

import { ReactNode } from "react";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

interface ChakraProvidersProps {
  children: ReactNode;
}

export function ChakraProviders({ children }: ChakraProvidersProps) {
  return <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>;
}
