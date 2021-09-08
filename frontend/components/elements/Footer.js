import CustomImage from "./CustomImage"
import CustomLink from "./CustomLink"
import Link from "next/link"

const Footer = ({ footer }) => {
  return (
    <footer className="mt-10">
      <nav className="border-gray-200 border-b-2 py-10 bg-dark">
        <div className="container flex flex-col items-center justify-between gap-5">
          {/* Content aligned to the left */}
          <div className="flex flex-col lg:flex-row  items-center w-full justify-between h-20 ">
            <Link href="/">
              <a className="h-8 w-32 flex items-center justify-center">
                <CustomImage width="120" height="33" media={footer.logo} />
              </a>
            </Link>
            <ul className="hidden list-none md:flex flex-row gap-4 items-center justify-center">
              {footer.link.map((footerLink) => (
                <li key={footerLink.id}>
                  <CustomLink link={footerLink}>
                    <div className=" text-white hover:text-primary uppercase font-medium text-sm tracking-wider">
                      {footerLink.text}
                    </div>
                  </CustomLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <div className=" text-white font-extralight grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className=" opacity-50 ">{footer.bigText}</div>
              <div className="flex gap-5 justify-center lg:justify-end items-center">
                <Link href="/">
                  <a>
                    <CustomImage src="/github.svg" height={30} width={30} />
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <CustomImage src="/linkedin.svg" height={30} width={30} />
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <CustomImage src="/facebook.svg" height={30} width={30} />
                  </a>
                </Link>
              </div>
            </div>
            <div className="text-white font-bold text-center lg:text-left opacity-50">
              <div className="">{footer.smallText}</div>
            </div>
          </div>
        </div>
      </nav>
    </footer>
  )
}

export default Footer
