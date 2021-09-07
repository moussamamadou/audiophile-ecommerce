import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import CustomImage from "./CustomImage"
import CustomLink from "./CustomLink"
import CategoryLink from "../section/CategoryLink"

const Navbar = ({ navbar, categoryLink }) => {
  const router = useRouter()
  const [mobileMenuIsShown, setMobileMenuIsShown] = useState(false)

  return (
    <>
      {/* The actual navbar */}
      <nav className="py-6 sm:py-2 bg-dark z-20">
        <div className="container flex flex-row items-center justify-between">
          {/* Content aligned to the left */}
          <div className="flex flex-row items-center w-full justify-between   h-20">
            <Link href="/">
              <a className="h-8 w-32 flex items-center justify-center">
                <CustomImage width="120" height="33" media={navbar.logo} />
              </a>
            </Link>
            {/* List of links on desktop */}
            <ul className="-ml-16 hidden list-none md:flex flex-row gap-4 items-center justify-center">
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
            <a className="text-white" href="">
              <CustomImage src='/cart.svg' height={25} width={25} />
            </a>
          </div>
          <div className="flex">
            <div className="md:hidden">
              Menu
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile navigation menu panel */}
      {/* {mobileMenuIsShown && (
        <MobileNavMenu
          navbar={navbar}
          closeSelf={() => setMobileMenuIsShown(false)}
      <CategoryLink categoryLink={ categoryLink }/>
        />
      )} */}
    </>
  )
}


export default Navbar
