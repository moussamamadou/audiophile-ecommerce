import Link from "next/link"
import Image from "next/image"

export default function CtaProductMedium({ ctaProductMedium }) {
  return (
    <div className=".CtaProductMedium">
      <div className="container ">
        <div className="relative gap-5 overflow-hidden p-10 md:p-20 rounded-lg h-[320px]">
          <div className="relative flex flex-col justify-center gap-3 pt-8 z-10">
            <h4 className="">{ctaProductMedium.title}</h4>
            <div className="flex">
              <Link href={`/products/${ctaProductMedium.slug}`}>
                <a className="btn-two">See Product</a>
              </Link>
            </div>
          </div>
          <Image
            src={ctaProductMedium.frontPage.url}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  )
}
