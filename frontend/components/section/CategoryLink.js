import React from "react"
import Link from "next/link"
import CustomImage from "../elements/CustomImage"

export default function CategoryLink({ categoryLink }) {
  return (
    <div className=".CategoryLink">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-5 py-16 relative">
        {categoryLink.map((mylink) => (
          <div
            className="relative flex flex-col justify-between items-center h-full z-10"
            key={mylink.id}
          >
            <div className="absolute h-2/3 w-full bottom-[-35px] left-0 bg-neutral rounded-lg z-0"></div>
            <div className="w-1/2">
              <CustomImage media={mylink.image} />
            </div>
            <div className=" relative">
              <h6>{mylink.text}</h6>
              <Link href={mylink.url}>
                <a className=" flex justify-center items-center mt-2 z-10">
                  <span>Shop </span>
                  <CustomImage src="/arrow-right.svg" height={20} width={20} />
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
