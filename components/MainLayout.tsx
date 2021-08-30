import Link from 'next/link'
import Head from "next/head";

interface MainLayoutProps {
    children?: any
    title?: string | number
}

export function MainLayout({children, title='next APP'}: MainLayoutProps) {
    return(
    <>
       <Head>
                <title>{title} - Next Course</title>
                <meta name="description" content="adsadasdsad sdasdasdasdasd asdasd"/>
       </Head>
        <nav>
            <Link href={'/'} >Home</Link>
            <Link href={'/about'} >About</Link>
            <Link href={'/posts'} >Posts</Link>
        </nav>
        <main>
            {children}
        </main>

        <style jsx global>
                {`
                    nav {
                    position: fixed;
                    height: 60px;
                    background: darkblue;
                    left: 0;
                    top: 0;
                    right: 0;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    }
                    nav a {
                      color: #fff !important;
                      text-decoration: none;
                    }
                    main {
                    margin-top: 60px;
                    padding: 1rem;
                    }
                `}
            </style>
    </>
    )
}