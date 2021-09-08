import Head from "next/head"
import { useRouter } from "next/router"
import Image from "next/image"
import { getProducts, getProduct } from "../../utils/api"
import { getStrapiMedia } from "../../utils/medias"
import CategoryLink from "../../components/section/CategoryLink"
import CustomImage from "../../components/elements/CustomImage"
import parse from "html-react-parser"

import "photoswipe/dist/photoswipe.css"
import "photoswipe/dist/default-skin/default-skin.css"

import { Gallery, Item } from "react-photoswipe-gallery"

const ProductPage = ({ product, global }) => {
  const { categoryLink } = global
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading product...</div>
  }

  return (
    <>
      <Head>
        <title>{product.title} | Product</title>
      </Head>
      <div className="w-full p-5 flex flex-col justify-between">
        <div
          className={`container my-10 flex  flex-col lg:flex-row  flex-1 gap-10 lg:gap-24 `}
        >
          <div className=" relative  w-full lg:w-1/2 rounded-lg ">
            {" "}
            <div className="hidden lg:inline-flex">
              <CustomImage media={product.image} />
            </div>
            <div className="inline-flex lg:hidden h-[500px]">
              <Image src={product.image.url} layout="fill" objectFit="cover" />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center gap-5">
            <div className="overline  opacity-50">
              {product.newProduct && "NEW PRODUCT"}
            </div>
            <h2 className=" ">{product.title}</h2>
            <p className="  opacity-50 mb-5">{product.description}</p>
            <h3 className=" mb-1">$ {product.price}</h3>
            <div className="flex justify-center items-center lg:justify-start">
              {product.status === "published" ? (
                <button
                  className="snipcart-add-item btn-one mt-4"
                  data-item-id={product.id}
                  data-item-price={product.price}
                  data-item-url={process.env.NEXT_PUBLIC_DOMAIN + router.asPath}
                  // data-item-url={'http://b41b-78-201-21-129.ngrok.io' + router.asPath}
                  data-item-description={product.description}
                  data-item-image={getStrapiMedia(
                    product.image.formats.thumbnail.url
                  )}
                  data-item-name={product.title}
                  v-bind="customFields"
                >
                  Add to cart
                </button>
              ) : (
                <div className="text-center mr-10 mb-1" v-else>
                  <div
                    className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
                    role="alert"
                  >
                    <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
                      Coming soon...
                    </span>
                    <span className="font-semibold mr-2 text-left flex-auto">
                      This article is not available yet.
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="container flex flex-col lg:flex-row gap-20 lg:gap-32 mb-10">
        <div className=" max-w-4xl">
          <h2 className="mb-7">Features</h2>
          <div className="">{parse(product.features)}</div>
        </div>
        <div className="w-full lg:w-max flex flex-col md:flex-row lg:flex-col">
          <h2 className="w-full md:w-1/2 lg:w-max mb-7">In the Box</h2>
          <div className="w-full md:w-1/2 lg:w-max">
            {product.boxContent.map((content) => (
              <div className="" key={content.id}>
                <p>
                  <span className="text-primary mr-2">
                    {content.quantity}x{" "}
                  </span>{" "}
                  {content.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container">
        <Gallery>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10' >
            {product.images.map((image) => (
              <Item
                key={image.id}
                original={image.url}
                thumbnail={image.url}
                width={image.width}
                height={image.height}
              >
                {({ ref, open }) => (
                  <img ref={ref} onClick={open} src={image.url} className='object-cover w-full'/>
                )}
              </Item>
            ))}
          </div>
        </Gallery>
      </div>
      <CategoryLink categoryLink={categoryLink.linkImage} />
    </>
  )
}

export default ProductPage

export async function getStaticProps({ params }) {
  const product = await getProduct(params.slug)
  return { props: { product } }
}

export async function getStaticPaths() {
  const products = await getProducts()
  return {
    paths: products.map((product) => {
      return {
        params: { slug: product.slug },
      }
    }),
    fallback: true,
  }
}
