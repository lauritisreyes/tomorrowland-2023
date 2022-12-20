import './Intro.scss'

export const Intro = () => {
    return(

        <div className="Intro">
            <div className="Intro-vid">
                <video className="Intro-video" autoPlay muted loop src="/assets/TMLBE_Loop.mp4"></video>
            </div>
            <div className="Box">
                <div className="Box-info">
                    <p className="Box-text">People of Tomorrow,</p>
                    <p className="Box-text">In 2023 you will witness the rise of a magnificent tale in the history of Tomorrowland's Great Library. Our destination lies high on the horizon. Prepare yourself for a beautiful adventure on July 21 - 23 and July 28 - 30.</p>
                    <p className="Box-text">Learn more about Tomorrowland 2023 - Adscendo on <a href="#" className="Box-link">adscendo.tomorrowland.com.</a></p>
                    <p className="Box-text">Pre-register for the Tomorrowland 2023 ticket sales in your <a href="#" className="Box-link">Tomorrowland Account.</a></p>
                </div>
                <div className="Box-weekend">
                    <div className="Box-weekend1">
                        <h2 className="Box-weekendTitle">Weekend 1</h2>
                        <p className="Box-weekendText">21 - 23 July 2023</p>
                    </div>
                    <div className="Box-weekend2">
                        <h2 className="Box-weekendTitle">Weekend 2</h2>
                        <p className="Box-weekendText">28 - 30 July 2023</p>
                    </div>
                </div>
            </div>
        </div>

    )
}