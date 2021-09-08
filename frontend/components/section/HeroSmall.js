import Image from "next/image"
import parse from "html-react-parser"

export default function HeroSmall({ heroSmall }) {
  console.log(heroSmall)
  return (
    <div className=".CtaProductSmall">
      <div className="container my-10 ">
        <div className="flex  flex-col-reverse lg:flex-row flex-1 gap-10 lg:gap-5 ">
          <div className="relative flex flex-col flex-1 justify-center gap-3 p-10 text-center lg:text-left">
            <div className="mb-10">
              <h3>{parse(heroSmall.title)}</h3>
            </div>
            <p>{parse(heroSmall.content)}</p>
          </div>
          <div className="relative rounded-lg overflow-hidden h-[300px] w-full lg:h-[588px] lg:w-1/2">
            <Image src={heroSmall.Image.url} layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
    </div>
  )
}
