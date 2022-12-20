import { Intro } from "./Intro/Intro"
import { Timeline } from "./Timeline/Timeline"

import { Footer } from './Footer/Footer.jsx'
import {Header} from './Header/Header.jsx'
import { Info } from './Info/Info.jsx'


export const Home = () => {
    return (
        <>
            <Header/>
            <Intro />
            <Info/>
            <Timeline />
            <Footer/>
        </>
    )
}