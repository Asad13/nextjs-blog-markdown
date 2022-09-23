import Link from "next/link";
import Dropdown from "./Dropdown";
import CaretDownIcon from '../icons/svgs/caret-down-solid.svg';
import PlusIcon from '../icons/svgs/plus-solid.svg';
import MinusIcon from '../icons/svgs/minus-solid.svg';
import {useState,useEffect,useRef} from 'react';

const NavItem = ({navitem,mobile}) => {
    const [open,toggle] = useState(false);
    const dropdown = useRef(null);

    useEffect(() => {
        if(!open) return;
        function handleClick(event) {
            if (!dropdown.current?.contains(event.target)) {
                toggle(false);
            }
        }
        window.addEventListener("click", handleClick);
        // clean up
        return () => window.removeEventListener("click", handleClick);
    },[open]);

    return (
        <>
            {
                navitem.dropdowns ? 
                (<li className="relative" ref={dropdown} onClick={() => toggle(!open)}>
                    <span className="block lg:inline">
                        <a className="block border-b-2 border-cyan-900 lg:border-0 lg:inline-block px-4 h-14 leading-[56px] hover:bg-slate-700 hover:text-slate-200 transition-all duration-200 cursor-pointer font-semibold">{navitem.title}{navitem.dropdowns && <><CaretDownIcon className="hidden lg:inline-block mb-1 ml-1 pointer-events-none" />{open ? <MinusIcon className="inline-block lg:hidden float-right h-14 pointer-events-none" /> : <PlusIcon className="inline-block lg:hidden float-right h-14 pointer-events-none" />}</>}
                        </a>
                    </span>
                    {open && <Dropdown items={navitem.dropdowns} open={open}/>}
                </li>) :
                (<li>
                    <Link href={navitem.path}>
                        <a className="block lg:inline-block border-b-2 border-cyan-900 lg:border-0 px-4 h-14 leading-[56px] hover:bg-slate-700 hover:text-slate-200 transition-all duration-200 font-semibold">{navitem.title}
                        </a>
                    </Link>
                 </li>)
            }
        </>
    );
}

export default NavItem;