import '../styles/globals.css'
import NextNProgress from "nextjs-progressbar";
import React from 'react';


export default function MyApp({Component, pageProps}) {

    return(
        <>
            <NextNProgress color="#29D" startPosition={0.3} stopDelayMs={200} height={3}/>
            <Component {...pageProps} />

        </>
    )
}