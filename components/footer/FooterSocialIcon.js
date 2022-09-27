const FooterSocialIcon = ({icon}) => {
    return (
        <a href={icon.link} target="_blank" rel="noreferrer" className="flex justify-center items-center group w-10 h-10 mx-1 border-2 border-slate-800 rounded-full hover:bg-slate-800 transition duration-100"><icon.element className="text-lg group-hover:text-white group-hover:text-2xl transition duration-300" /></a>
    )
}

export default FooterSocialIcon;