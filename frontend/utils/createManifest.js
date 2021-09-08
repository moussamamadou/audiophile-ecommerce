const axios = require('axios').default;
const fs = require('fs')
function getStrapiURL(path) {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`
}
async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path)
  try {
    const response = await axios.get(requestUrl)
    const data = response.data
    return data
  } catch (error) {
    console.log(error)
  }
}

async function getGlobalData() {
  const global = await fetchAPI(`/global`)
  return global
}

async function createManifestsFromCMS() {
  const global = await getGlobalData()

  fs.writeFile("./data/global-manifest.json", JSON.stringify(global), (err) => {
    if (err) throw err
    console.info("Global data manifest written to file")
  })
}

async function main() {
  try {
    await createManifestsFromCMS()
  } catch (err) {
    throw new Error(err)
  }
}

main()
