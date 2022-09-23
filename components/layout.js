import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <div className="pt-[56px]">
                {children}
            </div>
            <Footer/>
        </>
    )
}

export default Layout;