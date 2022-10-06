import Link from "next/link";
import Image from "next/image";
import FormattedDate from "./Date";

const PostCard = ({post}) => {
    return (
        <div className="group basis-full max-w-full min-h-full mb-8 md:basis-[45%] md:max-w-[45%] lg:basis-[22.5%] lg:max-w-[22.5%] shadow-lg rounded-lg hover:ring focus:ring">
            <Link href={`/post/${post.id}`}>
                <a className='block'>
                    <div className='overflow-hidden rounded-t-lg'>
                    <Image src={post.src} alt={post.alt} layout="responsive" width={1920} height={1080} className='transition ease-in-out duration-300 group-hover:scale-125' />
                    </div>
                    <div className='text-center  h-[80px] overflow-hidden align-middle pt-5 pb-2 font-semibold group-hover:text-purple-700 focus:text-purple-700'>{post.title}</div>
                    <p className="px-4 pb-6 group-hover:text-purple-700 focus:text-purple-700">{post.excerpt.trim()}...</p>
                    <div className="text-center mb-2">
                        <span className="inline-block"><FormattedDate dateString={post.date} /></span>
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default PostCard;