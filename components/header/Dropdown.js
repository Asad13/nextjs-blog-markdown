import Link from "next/link";
import {useEffect,useRef} from 'react';

const Dropdown = ({items,open}) => {
    const el = useRef(null);
    useEffect(() => {
        if(open){
            el.current.style.maxHeight = el.current.scrollHeight + 'px';
        }else{
            el.current.style.maxHeight = '0px';
        }
    },[open]);
    return (
        <ul ref={el} className={`lg:absolute max-h-0 overflow-hidden flex flex-col bg-slate-200  lg:border-t-4 lg:border-cyan-900 transition-all duration-[350ms]`}>
            {
                items.map(item => (
                    <li key={item.slug}>
                        <Link href={item.slug}>
                            <a className="block lg:inline-block px-4 h-14 pl-8 lg:pl-4 hover:bg-slate-700 hover:text-slate-200 leading-[56px] lg:leading-normal transition-all duration-200 font-semibold border-b-2 lg:border-b-4 border-cyan-900">{item.title}
                            </a>
                        </Link>
                    </li>
                ))
            }
        </ul>
    );
}

export default Dropdown;