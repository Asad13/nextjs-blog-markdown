import Head from "next/head";
import {getCategories} from "../components/header/menu";

const Category = ({category}) => {
    // Next : create more markdown files to make a list in each category
    return (
        <>
            <Head>
                <title>{`Asad's Notes | ${category.title}`}</title>
                <meta name="description" content={category.title} />
            </Head>
            <h1 className="text-amber-400 font-black text-center mb-4 text-lg md:text-2xl lg:text-3xl antialiased">{category.title}</h1>
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

    return {
        props: {
            category
        }
    }
}

export default Category;