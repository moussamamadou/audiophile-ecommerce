import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import CustomImage from "./CustomImage"
import CustomLink from "./CustomLink"
import CategoryLink from "../section/CategoryLink"
import { Menu, Transition } from "@headlessui/react"

const Navbar = ({ navbar, categoryLink }) => {
  const router = useRouter()
  return (
    <>
      {/* The actual navbar */}
      <nav className="py-6 sm:py-2 bg-dark z-20">
        <div className="container flex flex-row items-center justify-between">
          {/* Content aligned to the left */}
          <div className="flex flex-row items-center w-full justify-between   h-20">
            <div className="lg:hidden">
              <Menu>
                {({ open }) => (
                  <>
                    <Menu.Button>
                      <CustomImage src="/menu.svg" height={30} width={30} />
                    </Menu.Button>
                    <Transition
                      show={open}
                      enter="transition duration-100 ease-out"
                      enterFrom="opacity-0"
                      enterTo=" opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom=" opacity-100"
                      leaveTo=" opacity-0"
                    >
                      <Menu.Items>
                        <div className=" w-full bg-white absolute top-[95px] left-0 pb-10">
                          <div className="container grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-5 py-16 relative">
                            {categoryLink.linkImage.map((mylink) => (
                              <Menu.Item>
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
                                        <CustomImage
                                          src="/arrow-right.svg"
                                          height={20}
                                          width={20}
                                        />
                                      </a>
                                    </Link>
                                  </div>
                                </div>
                              </Menu.Item>
                            ))}
                          </div>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
            </div>
            <Link href="/">
              <a className="h-8 w-32 flex items-center justify-center">
                <CustomImage width="120" height="33" media={navbar.logo} />
              </a>
            </Link>
            {/* List of links on desktop */}
            <ul className="-ml-16 hidden list-none lg:flex flex-row gap-4 items-center justify-center">
              {navbar.link.map((navLink) => (
                <li key={navLink.id}>
                  <CustomLink link={navLink}>
                    <div className=" text-white hover:text-primary uppercase font-medium text-sm tracking-wider">
                      {navLink.text}
                    </div>
                  </CustomLink>
                </li>
              ))}
            </ul>
            <button class="snipcart-checkout">
              <CustomImage src="/cart.svg" height={25} width={25} />
              <span class="snipcart-items-count bg-primary text-sm font-bold rounded-full text-white px-2 py-1 absolute top-[15px] -ml-3"></span>
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
