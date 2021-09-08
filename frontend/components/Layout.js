import Footer from "./elements/Footer"
import Navbar from "./elements/Navbar"

const Layout = ({ children, global }) => {
  const { navbar, footer, categoryLink } = global
  return (
    <div className="flex justify-center bg-light">
      <div className="flex flex-col min-h-screen w-full">
        <Navbar navbar={navbar} categoryLink={categoryLink} />
        <main className="flex-grow">{children}</main>
        <Footer footer={footer} />
      </div>
      <script
        async
        src="https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.js"
      ></script>
      <div
        id="snipcart"
        data-config-modal-style={"side"}
        data-api-key="N2UxOGQ5Y2MtYjVhMC00OTNmLWJmZGYtY2NhMjk3MWZlYTdkNjM3NjY1MDkxMDk0NTU1NzEz"
        hidden
      ></div>
    </div>
  )
}

export default Layout
