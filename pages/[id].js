import Head from "next/head";
import PostCard from '../components/utils/PostCard';
import {getCategories} from "../components/header/menu";
import {getSortedPostsData} from '../lib/posts';

const Category = ({category,posts}) => {
    return (
        <>
            <Head>
                <title>{`Asad's Notes | ${category.title}`}</title>
                <meta name="description" content={category.title} />
            </Head>
            <h1 className="text-amber-400 font-black text-center mb-4 text-lg md:text-2xl lg:text-3xl antialiased">{category.title}</h1>
            <main className="container mx-auto px-6 py-4 md:px-8 lg:px-10">
                <section className="flex justify-around items-center flex-col md:flex-row flex-wrap">
                    {
                        posts.map(post => <PostCard key={post.id} post={post} />)
                    }
                </section>
            </main>
        </>
    )
}

export async function getStaticPaths(){
    const paths = getCategories().map(category => {
        return {
            params: {
                id: category.slug
            }
        }
    });

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}){
    const category = getCategories().find(category => params.id === category.slug);
    const posts = getSortedPostsData(category.slug);

    return {
        props: {
            category,
            posts
        }
    }
}

export default Category;