import Link from "next/link"
import Image from "next/image"
import CustomImage from "../elements/CustomImage"

const ProductsList = ({ products }) => {
  console.log(products)
  return (
    <div className={`.ProductList flex flex-col `}>
      {products.map((_product, key) => (
        <div
          key={_product.id}
          className={`container relative my-10 flex flex-col ${
            key % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          }  lg:flex-1  gap-16 lg:gap-24  `}
        >
          <div className=" relative  w-full lg:w-1/2">
            <div className="hidden lg:inline-flex rounded-lg overflow-hidden ">
              <CustomImage media={_product.image} />
            </div>
            <div className="inline-flex lg:hidden h-[500px] rounded-lg overflow-hidden">
              <Image
                src={_product.image.url}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center gap-5 ">
            <div className="overline  opacity-50">
              {_product.newProduct && "NEW PRODUCT"}
            </div>
            <h2 className=" ">{_product.title}</h2>
            <p className="  opacity-50 mb-5">{_product.description}</p>
            <div className="flex justify-center items-center lg:justify-start">
              <Link href={`/products/${_product.slug}`}>
                <a className="btn-one">See Product</a>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductsList
