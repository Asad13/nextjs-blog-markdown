import FooterSocialIcon from './FooterSocialIcon';
import icons from '../icons/svgs/social/socialIcons';

const Footer = () => {
    return (
        <footer className="bg-slate-200 py-4">
            <div>
                <h3 className="font-700 text-lg md:text-xl text-center mb-2">Follow Me On</h3>
                <div className="flex justify-center items-center">
                    {
                        icons.map((icon,index) => <FooterSocialIcon key={index} icon={icon} />)
                    }
                </div>
            </div>
            <span className="block w-[90%] h-[1px] bg-slate-800 mx-auto my-4"></span>
            <div>
                <p className="text-sm text-center font-black">&copy; 2022 - {new Date().getFullYear()} Asad Mujumder</p>
            </div>
        </footer>
    )
}

export default Footer;