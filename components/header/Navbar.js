import {useState,useEffect,useRef} from 'react';
import navitems from './menu';
import NavItem from './NavItem';
import MenuIcon from '../icons/svgs/bars-solid.svg';

const Navbar = () => {
    const [drawerOpen,setDrawerOpen] = useState(false);
    const nav = useRef(null);

    useEffect(() => {
        if(!drawerOpen) return;
        function closeDrawer(event) {
            setDrawerOpen(false);
        }
        window.addEventListener("resize", closeDrawer);
        // clean up
        return () => window.removeEventListener("resize", closeDrawer);
    },[drawerOpen]);

    return (
        <nav>
            <span className="inline-block lg:hidden">
                <MenuIcon className="inline-block text-3xl cursor-pointer" onClick={() => setDrawerOpen(!drawerOpen)}/>
            </span>
            <ul ref={nav} className={drawerOpen ? "fixed top-[56px] left-0 flex flex-col w-[100%] h-auto bg-slate-200  border-0 border-t-4 border-cyan-900" : "hidden lg:flex"}>
                {
                    navitems.map(navitem => <NavItem key={navitem.slug} navitem={navitem} mobile={drawerOpen} setDrawerOpen={setDrawerOpen} />)
                }
            </ul>
        </nav>
    )
}

export default Navbar;