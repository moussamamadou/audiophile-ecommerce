import Link from "next/link"
import CustomImage from "../elements/CustomImage"

export default function HeroArticle({ heroArticle }) {
  return (
    <div className=".hero bg-dark   z-10">
      <div className="container py-10 relative grid lg:grid-cols-2 xl:grid-cols-3 gap-5 border-0 lg:border-t-2 lg:border-gray-600 lg:border-opacity-50  overflow-hidden">
        <div className="relative lg:hidden">
          <CustomImage media={heroArticle.frontPage} />
        </div>
        <div className="absolute m-auto left-0 right-0 bottom-0 top-0 text-center lg:m-0 lg:text-left lg:relative md:col-span-1 flex flex-col justify-center gap-5 w-10/12 lg:w-2/3 ">
          <div className="overline text-white opacity-50">
            {heroArticle.newProduct && "NEW PRODUCT"}
          </div>
          <h1 className=" text-white">{heroArticle.title}</h1>
          <p className=" text-white opacity-50 mb-5">
            {heroArticle.description}
          </p>
          <div className="flex justify-center items-center lg:justify-start">
            <Link href={`/products/${heroArticle.slug}`}>
              <a className="btn-one">See Product</a>
            </Link>
          </div>
        </div>
        <div className="hidden lg:inline-flex lg:col-span-1 xl:col-span-2 z-0  -mt-20">
          <CustomImage media={heroArticle.frontPage} />
        </div>
      </div>
    </div>
  )
}
