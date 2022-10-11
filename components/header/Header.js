import Link from "next/link";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header className="fixed flex z-10 h-14 w-full px-6 md:px-8 items-center justify-between bg-slate-200 dark:bg-slate-800">
            <Link href="/">
                <a className="font-bold text-2xl hover:text-red-700 transition-all" >{`Asad's Notes`}</a>
            </Link>
            <Navbar/>
        </header>
    )
}

export default Header;