import {Html,Head,Main,NextScript} from 'next/document';

export default function Document(){
    return (
        <Html lang="en">
            <Head>
                <meta name='subject' content='technology and programming blog' />
                <meta name='author' content='Asad Mujumder, asaduzzaman.anik.me@gmail.com' />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}