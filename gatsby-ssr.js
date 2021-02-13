import React from "react"
import StoreProvider from "./src/context/storeProvider"

export const wrapRootElement = ({ element }) => (
  <StoreProvider>{element}</StoreProvider>
)
