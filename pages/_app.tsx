import type { AppProps } from 'next/app';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
import 'styles/globals.scss';

SwiperCore.use([Navigation]);

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
