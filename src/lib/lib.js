import clientConfig from "../../client-config"
import imageUrlBuilder from "@sanity/image-url"

const builder = imageUrlBuilder(clientConfig.sanity)

export function imageUrlFor(source) {
  return builder.image(source)
}

export const isMobile = windowWidth => windowWidth < 780

export const isSSR = typeof window === "undefined"

export const formatPrice = amount => {
  let price = (amount / 100).toFixed(2)
  let numberFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  })
  return numberFormat.format(price)
}
