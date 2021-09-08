import Link from "next/link"
import CustomImage from "../elements/CustomImage"

export default function CtaProductBig({ ctaProductBig }) {
  return (
    <div className=".CtaProductBig">
      <div className="container ">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-5 overflow-hidden bg-primary p-10 lg:p-20 rounded-lg">
          <div className="absolute flex justify-center lg:justify-start top-0 left-0 right-0 mx-auto lg:left-10">
            <CustomImage src="/pattern-circles.svg" height={550} width={550} />
          </div>
          <div className="col-span-1 z-0 flex justify-center ">
            <div className="w-2/3 lg:-mb-40">
              <CustomImage media={ctaProductBig.frontPage} />
            </div>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center text-center lg:items-baseline lg:text-left gap-3 pt-8 z-10">
            <h1 className="text-white">{ctaProductBig.title}</h1>
            <p className="opacity-75 mb-5 text-white">
              {ctaProductBig.description}
            </p>
            <div className="flex">
              <Link href={`/products/${ctaProductBig.slug}`}>
                <a className="btn-tree">See Product</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
