import Link from "next/link"
import Image from "next/image"

export default function CtaProductSmall({ ctaProductSmall }) {
  return (
    <div className=".CtaProductSmall">
      <div className="container ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="relative rounded-lg  overflow-hidden h-[320px] ">
            <Image
              src={ctaProductSmall.frontPage.url}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative bg-neutral flex flex-col justify-center gap-3 p-8 z-10 rounded-lg  h-[320px]">
            <h4 className="">{ctaProductSmall.title}</h4>
            <div className="flex">
              <Link href={`/products/${ctaProductSmall.slug}`}>
                <a className="btn-two">See Product</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
