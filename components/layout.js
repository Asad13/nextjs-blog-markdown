import Header from "./header/Header";
import Footer from "./footer/Footer";
import Head from "next/head";

const Layout = ({children}) => {
    return (
        <>
            <Head>
                <meta charSet='UTF-8' />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Header/>
            <div className="pt-[56px]">
                {children}
            </div>
            <Footer/>
        </>
    )
}

export default Layout;