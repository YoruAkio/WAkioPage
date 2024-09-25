import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta
                    property="og:title"
                    content="Yoru Akio - Fullstack Developer"
                />
                <meta
                    property="og:description"
                    content="Yoru Akio is a self-taugh student developer from indonesia. He is a fullstack developer who loves to build something cool about technology."
                />
                <meta
                    property="og:image"
                    content="https://yourwebsite.com/path/to/image.jpg"
                />
                <meta property="og:url" content="https://yoruakio.tech" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Yoru Akio - Fullstack Developer"
                />
                <meta
                    name="twitter:description"
                    content="Yoru Akio is a self-taugh student developer from indonesia. He is a fullstack developer who loves to build something cool about technology."
                />
                <meta
                    name="twitter:image"
                    content="https://yourwebsite.com/path/to/image.jpg"
                />
                <meta name="twitter:site" content="@yoruakio" />

                <meta
                    name="description"
                    content="Yoru Akio is a self-taugh student developer from indonesia. He is a fullstack developer who loves to build something cool about technology."
                />
                <meta name="keywords" content="next, nextjs, react, tailwind, daisyui, yoru akio, yoruakio, github, developer, growtopia, gtps, gtps-github, student developer, indonesia, indonesian, web developer, fullstack developer" />
                <meta name="author" content="Yoru Akio" />
            </Head>
            <body className="antialiased">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
