import { NextSeo } from "next-seo"
import { getStrapiMedia } from "../../utils/medias"

const Seo = ({ metadata }) => {
  // Prevent errors if no metadata was set
  if (!metadata) return null

  return (
    <NextSeo
      title={metadata.metaTitle}
      description={metadata.metaDescription}
      openGraph={{
        // Title and description are mandatory
        title: metadata.metaTitle,
        description: metadata.metaDescription,
        // Only include OG image if we have it
        // Careful: if you disable image optimization in Strapi, this will break
        ...(metadata.shareImage && {
          images: {
            url: getStrapiMedia(metadata.shareImage.url),
            width: metadata.shareImage.width,
            height: metadata.shareImage.height,
          },
        }),
      }}
    />
  )
}

export default Seo
