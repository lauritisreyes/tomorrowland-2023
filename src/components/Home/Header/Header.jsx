import { FacebookLogo, InstagramLogo, MainLogo, TikTokLogo, TwitterLogo, YoutubeLogo } from '../../Common/Common'
import './Header.scss'


export const Header = () => {

    return (
        <div className="header">
            <TopBar/>
            <NavBar/>
        </div>
    )
}



const TopBar = () => {

    const links = [
        { id:0 , text:'Belgium', chevron: true },
        { id:1 , text:'Winter', chevron: false },
        { id:2 , text:'Events' , chevron: true },
        { id:3 , text:'Music' , chevron: false},
        { id:4 , text:'Foundation' , chevron: false },
        { id:5, text:'Store', chevron: false },
        { id:6, text:'NFT', chevron: false },
        { id:7 , text:'FAQ' , chevron: false },
        { id:8 , text:'More' , chevron: true }
    ]

    // const social = [
    //     { id: 0, type:'Facebook', img:''},        
    //     { id: 1, type:'Instagram', img:''},
    //     { id: 2, type:'Twitter', img:''},
    //     { id: 3, type:'Youtube', img:''},
    //     { id: 4, type:'TikTok', img:''}        
    // ]
    
    return (
        <div className="topBar">

            {/* Left Block */}
            <div className="topBar-leftBlock">

                {/* Name */}
                <a href="" className="topBar-link">
                    <MainLogo/>
                    <span className="link-text">Tomorrowland</span>
                </a>

                {/* Navigation */}
                <nav className="topBar-nav">
                    <ul className="topBar-ul">
                        { links.map ( ({ id, text, chevron }) =>
                            <li key={id} className="topBar-li">
                                <a className="topBar-link" href="">
                                    <span className="link-text">{text}</span>
                                    <span className={`topBar-icon ${ chevron ? 'active' : ''}`}>
                                        <img src="assets/header/chevron.svg" alt="" className="topBar-chevron" />
                                    </span>
                                </a>
                                
                            </li>
                        )}
                    </ul>
                </nav>

                {/* Social */}
                <ul className="topBar-ul">
                    {/* { social.map ( ( {id, type }) => 
                        <li key={id} className="topBar-li">
                            <a className='topBar-link' href="">{type}</a>
                        </li>
                    )} */}
                    <FacebookLogo/>
                    <InstagramLogo/>
                    <TwitterLogo/>
                    <YoutubeLogo/>
                    <TikTokLogo/>
                </ul>

            </div>

            {/* Right Block */}
            <div className="topBar-rightBlock">
                <a href="" className="topBar-link">
                    <span className="link-text">My account</span>
                </a>
            </div>

        </div>
    )

}


const NavBar = () => {

    const section = [
        { id:0, name: 'Festival', symbol: false },
        { id:1, name: 'Dreamville', symbol: false },
        { id:2, name: 'Global Journey', symbol: false },
        { id:3, name: 'My tomorrowland', symbol: true }
    ]

    const language = [
        { id:0, type:'EN'},
        { id:1, type:'NL'},
        { id:2, type:'FR'},
    ]

    const subcategories = [
        { id:0, name: 'Welcome', symbol: false },
        { id:1, name: 'Practical', symbol: false },
        { id:2, name: 'Tickets', symbol: false },
        { id:3, name: 'Line-up', symbol: true },
        { id:4, name: 'Adscendo', symbol: true },
    ]



    return (
        <div className="navBar">


            {/* Nav Bar Sections */}
            <div className="navBar-sections">

                {/* Logo */}
                <a href="" className="sections-link">
                    <span className="link-text">Tomorrowland Belgium</span>
                </a>

                {/* Navigation */}
                <nav className="sections-nav">
                    <ul className="sections-ul">
                        {section.map ( ({id, name}) =>
                            <li className='sections-li' key={id}>
                                <a href="" className="sections-link">{name}</a>
                            </li>
                        )}
                    </ul>
                </nav>

                {/* Language */}
                <ul className="sections-ul">
                    {language.map ( ( {id,type} ) => 
                        <li className='sections-link' key={id}>{type}</li>
                    )}
                </ul>
            </div>


            {/* Nav Bar Submenu */}
            <div className="navBar-submenu">
                <nav className="submenu-nav">
                    <ul className='submenu-ul'>
                        {subcategories.map ( ( {id,name} ) => 
                            <li className='submenu-li' key={id}>
                                <a className='submenu-link' href="">{name}</a>
                            </li>
                        )}
                    </ul>
                </nav>
                <button className='submenu-button'>
                    <span className='button-text'>Pre-Register Now</span>
                </button>
            </div>

        </div>
    )
}



