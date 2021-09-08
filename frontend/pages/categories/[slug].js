import Head from "next/head"
import { useRouter } from "next/router"
import ProductsList from "../../components/section/ProductsList"
import { getCategories, getCategory } from "../../utils/api"
import CategoryLink from "../../components/section/CategoryLink"

const CategoryPage = ({ category, global }) => {
  const { categoryLink } = global
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading category...</div>
  }

  return (
    <div>
      <Head>
        <title>{category.name} | Category</title>
      </Head>
      <div className=".hero bg-dark   z-10">
        <div className="container py-10 md:py-20 border-0 lg:border-t-2 lg:border-gray-600 lg:border-opacity-50 text-center ">
            <h1 className="text-white">{category.name}</h1>
        </div>
      </div>
      <ProductsList products={category.products} />
      <CategoryLink categoryLink={categoryLink.linkImage} />
    </div>
  )
}

export default CategoryPage

export async function getStaticProps({ params }) {
  const category = await getCategory(params.slug)
  return { props: { category } }
}

export async function getStaticPaths() {
  const categories = await getCategories()
  return {
    paths: categories.map((_category) => {
      return {
        params: { slug: _category.slug },
      }
    }),
    fallback: true,
  }
}
