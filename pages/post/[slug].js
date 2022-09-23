import Head from "next/head";
import {getAllPaths,getPostData} from "../../lib/posts";

const Post = ({postData}) => {
    return (
        <>
            <Head>
                <title>{`Asad's Notes | ${postData.title}`}</title>
                <meta name="description" content="First Blog" />
            </Head>
            <main className="container mx-auto px-6 py-4 md:px-8 lg:px-10">
                <h1 className="text-amber-400 font-black text-center mb-4 text-lg md:text-2xl lg:text-3xl antialiased">
                    {postData.title}
                </h1>
                <div dangerouslySetInnerHTML={{__html: postData.contentHTML}}></div>
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
    const postData = await getPostData(params.slug);

    return {
        props: {
            postData
        }
    }
}

export default Post;