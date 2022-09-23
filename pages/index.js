import Head from 'next/head';
import Image from 'next/image';
import background from '../public/images/background.jpg';
import PostCard from '../components/home/PostCard';
import {getSortedPostsData} from '../lib/posts';

// temp
const post = {
  slug: "first-blog",
  src: '/images/blog/japan.jpg',
  alt: "Japan",
  title: "Two Forms of Pre-rendering",
  date: '2022-09-20',
  excerpt: 'Next.js has two forms of pre-rendering'
}

export default function Home({posts}) {
  return (
    <>
      <Head>
        <title>{`Asad's Notes | Home`}</title>
        <meta name="description" content="A tech and programming blog by Asad Mujumder" />
      </Head>
      <div className="w-full h-[80vh] relative">
        <Image 
          src={background} 
          alt=""
          priority
          layout='fill'
          objectFit='cover'
        />
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full text-center">
          <h1 className="text-amber-400 font-black text-3xl md:text-4xl lg:text-5xl antialiased">
            A Technology and Programming Blog
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold py-4 antialiased" style={{textShadow: '2px 2px #ff0000'}}>By Asad Mujumder</h2>
        </div>
      </div>
      <main className="container mx-auto px-6 py-4 md:px-8 lg:px-10">
        <section>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold py-6 antialiased text-center">Top Posts</h2>
          <div className="flex justify-around items-center flex-col md:flex-row flex-wrap">
            {
              posts.map(post => <PostCard key={post.slug} post={post} />)
            }
            <PostCard post={post} />
            <PostCard post={post} />
          </div>
        </section>
        <section className="py-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold py-6 antialiased text-center">Recent Posts</h2>
          <div className="flex justify-around items-center flex-col md:flex-row flex-wrap">
            <PostCard post={post} />
            <PostCard post={post} />
            <PostCard post={post} />
            <PostCard post={post} />
          </div>
        </section>
      </main>
      {/* Subscription Section*/}
      <section>

      </section>
    </>
  )
}

export async function getStaticProps(){
  const posts = getSortedPostsData();
  return {
    props: {
      posts
    }
  }
}
