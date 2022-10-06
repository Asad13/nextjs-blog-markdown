import Head from "next/head";
import Image from "next/image";
import FormattedDate from "../../components/utils/Date";
import {getAllPaths,getPostData} from "../../lib/posts";
import styles from '../../styles/Post.module.css';

const Post = ({postData}) => {
    return (
        <>
            <Head>
                <title>{`Asad's Notes | ${postData.title}`}</title>
                <meta name="description" content={postData.title} />
            </Head>
            <main className="container mx-auto px-6 py-4 md:px-8 lg:px-40 2xl:px-[12%]">
                <h1 className="text-amber-400 font-black text-center mb-4 text-lg md:text-2xl lg:text-3xl antialiased">
                    {postData.title}
                </h1>
                <div className='overflow-hidden w-full h-[33vh] md:h-[60vh] lg:h-[80vh] mb-2'>
                    <Image src={postData.src} alt={postData.alt} layout="responsive" width={1920} height={1080} objectFit="cover" />
                </div>
                <div className="text-center mb-4 xl:mt-2 lg:text-right"><FormattedDate dateString={postData.date} /></div>
                <div className={styles.post} dangerouslySetInnerHTML={{__html: postData.contentHTML}}></div>
            </main>
        </>
    )
}

export async function getStaticPaths(){
    const paths = getAllPaths();

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}){
    const postData = await getPostData(params.id);

    return {
        props: {
            postData
        }
    }
}

export default Post;