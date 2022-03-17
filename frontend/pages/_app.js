import './App.module.css'
import './index.css'
import Navbar from '../components/navbar/Navbar.js'
import Footer from '../components/footer/Footer.js'
import Head from "next/head";
/* import SmoothScroll from 'smooth-scroll';

const smoothScroll = new SmoothScroll()

window.smoothScroll = smoothScroll

const scrollTo = (val) => {
    smoothScroll.animateScroll(val)
}

window._scrollTo = (val) => {
    smoothScroll.animateScroll(val)
}

window._scrollToElement = (el) => {
    scrollTo(document.getElementById(el).getBoundingClientRect().top - window.innerHeight / 8 + window.scrollY)
} */

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
                <meta
                    name="description"
                    content="As the University of Southampton Decentralised Society we focus on bringing together likeminded students who are interested in blockchain, web3, crypto, DAO and internet freedom"
                />
                <meta
                    name="og:description"
                    content="As the University of Southampton Decentralised Society we focus on bringing together likeminded students who are interested in blockchain, web3, crypto, DAO and internet freedom"
                />
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
                <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
                <title>Decentralised Society</title>
                <meta name="og:title" content="Decentralised Society" />
                <meta name="og:site_name" content="Decentralised Society" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <link rel="icon" href="/favicon32.png" />
                <meta
                    name="og:image"
                    content="https://soton-dsoc.org/logo711.png"
                />
                <meta
                    name="keywords"
                    content="crypto, web3"
                />
                <meta name="theme-color" content="#FFFFFF" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_US" />
            </Head>
            <Navbar></Navbar>
            <Component {...pageProps} />
            <Footer></Footer>
        </>
    );
}