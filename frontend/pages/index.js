import { getHomePage } from "../utils/api"
import CategoryLink from "../components/section/CategoryLink"
import HeroArticles from "../components/section/HeroArticle"
import HeroSmalls from "../components/section/HeroSmall"
import CtaProductBig from "../components/section/CtaProductBig"
import CtaProductMedium from "../components/section/CtaProductMedium"
import CtaProductSmall from "../components/section/CtaProductSmall"

const HomePage = ({ homePage, global }) => {
  const { categoryLink } = global
  const {
    HeroArticle,
    HeroSmall,
    ctaProductBig,
    ctaProductMedium,
    ctaProductSmall,
  } = homePage
  console.log(HeroSmall)
  return (
    <div className="flex flex-col gap-10">
      <HeroArticles heroArticle={HeroArticle.product} />
      <CategoryLink categoryLink={categoryLink.linkImage} />
      <CtaProductBig ctaProductBig={ctaProductBig.product} />
      <CtaProductMedium ctaProductMedium={ctaProductMedium.product} />
      <CtaProductSmall ctaProductSmall={ctaProductSmall.product} />
      <HeroSmalls heroSmall={HeroSmall} />
    </div>
  )
}

export async function getStaticProps() {
  const homePage = await getHomePage()
  return { props: { homePage } }
}

export default HomePage
