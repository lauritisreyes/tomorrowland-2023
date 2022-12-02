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
                    <p className="Box-text">In 2023 you will witness the rise of a magnificent tale in the history of Tomorrowland's Great Library. Our destination lies high on the horizon. Prepare yourself for a beautiful adventure on July 21 & - 23 and July 28 - 30.</p>
                    <p className="Box-text">Pre-Registration starts on December 7 on <span><a href="#">adscendo.tomorrowland.com.</a></span></p>
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