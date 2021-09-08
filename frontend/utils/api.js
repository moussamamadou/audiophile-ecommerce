export function getStrapiURL(path) {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path)
  try {
    const response = await fetch(requestUrl, {
      method: "GET",
      headers: {
        // update with your user-agent
        "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36",
        Accept: "application/json; charset=UTF-8",
      },
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export async function getCategories() {
  const categories = await fetchAPI("/categories")
  return categories
}

export async function getCategory(slug) {
  const categories = await fetchAPI(`/categories?slug=${slug}`)
  return categories?.[0]
}

export async function getProducts() {
  const products = await fetchAPI("/products")
  return products
}

export async function getProduct(slug) {
  const products = await fetchAPI(`/products?slug=${slug}`)
  return products?.[0]
}

// Get Home Page
export async function getHomePage() {
  const global = await fetchAPI(`/home-page`)
  return global
}

// Get site data from Strapi (metadata, navbar, footer...)
export async function getGlobalData() {
  const global = await fetchAPI(`/global`)
  return global
}
