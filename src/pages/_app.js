import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>YoruAkio Portfolio</title>
                <meta property="og:title" content="YoruAkio Portfolio" />
                <meta
                    property="og:description"
                    content="Yoru Akio is a self-taught student developer from Indonesia. He is a fullstack developer who loves to build something cool about technology."
                />
                <meta
                    property="og:image"
                    content="https://yoruakio.tech/assets/kio.jpg"
                />
                <meta property="og:url" content="https://yoruakio.tech" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="YoruAkio Portfolio" />
                <meta
                    name="twitter:description"
                    content="Yoru Akio is a self-taught student developer from Indonesia. He is a fullstack developer who loves to build something cool about technology."
                />
                <meta
                    name="twitter:image"
                    content="https://yoruakio.tech/assets/kio.jpg"
                />
                <meta name="twitter:site" content="@yoruakio" />

                <meta
                    name="description"
                    content="Yoru Akio is a self-taught student developer from Indonesia. He is a fullstack developer who loves to build something cool about technology."
                />
                <meta
                    name="keywords"
                    content="next, nextjs, react, tailwind, daisyui, yoru akio, yoruakio, github, developer, growtopia, gtps, gtps-github, student developer, indonesia, indonesian, web developer, fullstack developer"
                />
                <meta name="author" content="Yoru Akio" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
