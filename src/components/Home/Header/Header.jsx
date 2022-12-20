import { ChevronDown, ChevronRight, Gotolink, IconContainer, MainLogo } from '../../Common/Common'
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
        { id:3 , text:'Terra Solis' , chevron: false},
        { id:4 , text:'Store' , chevron: false },
        { id:5, text:'Music', chevron: false },
        { id:6, text:'Foundation', chevron: false },
        { id:7 , text:'FAQ' , chevron: false },
        { id:8 , text:'More' , chevron: true },
        { id:9, text:'Tomorrowland', chevron: true}
    ]

    const social = [
        { id: 0, name:'Facebook'},        
        { id: 1, name:'Instagram'},
        { id: 2, name:'Twitter'},
        { id: 3, name:'Youtube'},
        { id: 4, name:'TikTok'}        
    ]
    
    return (
        <div className="TopBar">

            {/* Left Block */}
            <div className="TopBar-leftBlock">

                {/* Name */}
                <a href="" className="TopBar-link TopBar-main">
                    <MainLogo/>
                    <span className="Link-text Link-logo">Tomorrowland</span>
                </a>

                {/* Navigation */}
                <nav className="TopBar-nav">
                    <ul className="TopBar-ul">
                        { links.map ( ({ id, text, chevron }) =>
                            <li key={id} className="TopBar-li TopBar-categories">
                                <a className="TopBar-link" href="">
                                    <span className="Link-text">{text}</span>
                                    <span className={`TopBar-icon ${ chevron ? 'active' : ''}`}>
                                        <ChevronDown/>
                                    </span>
                                </a>
                                
                            </li>
                        )}
                    </ul>
                </nav>

                {/* Social */}
                <ul className="TopBar-ul">
                    { social.map ( (social) => 
                        <li key={social.id} className="TopBar-li Li-social">
                            <a className='TopBar-link Link-social' href=""><IconContainer {...social}/></a>
                        </li>
                    )} 
                </ul>
            </div>

            {/* Right Block */}
            <div className="TopBar-rightBlock">
                <a href="" className="TopBar-link">
                    <span className="Link-text">My account</span>
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
        { id:3, name: 'Line-up', symbol: false },
        { id:4, name: 'Adscendo', symbol: true },
    ]

    const navbarSelect = 0
    const submenuSelect = 0
    const languageSelect = 0



    return (
        <div className="NavBar">


            {/* Nav Bar Sections */}
            <div className="NavBar-sections">

                {/* Logo */}
                <a href="" className="Sections-link">
                    <div className="Link-logoimage">
                        <img src="./assets/header/main-logo-dark.png" alt="Tomorrowland Logo" className="Logoimage-symbol" />
                    </div>
                    <span className="Link-text Link-logo">Tomorrowland</span>
                    <span className='Logo-highlight'>Belgium</span>
                </a>

                {/* Navigation */}
                <nav className="Sections-nav">
                    <ul className="Sections-ul ">
                        {section.map ( ({id, name, symbol}) =>
                            <li className={`Sections-li Link-lineEffect light ${navbarSelect === id ? 'activeSection' : ''}`} key={id}>
                                <a href="" className="Sections-link">
                                    <span className="Link-text">{name}</span>
                                    <span className={`Link-icon Icon-gotolink ${symbol ? 'active' : ''}`}><Gotolink/></span>
                                </a>
                            </li>
                        )}
                    </ul>
                </nav>

                {/* Language */}
                <ul className="Sections-ul Sections-language">
                    {language.map ( ( {id,type} ) => 
                        <li className={`Sections-link Link-lineEffect light ${languageSelect === id ? 'activeLanguage' : ''}`} key={id}>
                            <a href="" className="Link-text Language-link">{type}</a>
                            </li>
                    )}
                </ul>

                {/* Movil */}
                <div className="NavBar-movil">
                    <span className="Movil-word">Menu</span>
                    <div className="Movil-burger">
                        <div className="Burger-rectangle"></div>
                        <div className="Burger-rectangle"></div>
                        <div className="Burger-rectangle"></div>
                    </div>
                </div>
            </div>


            {/* Nav Bar Submenu */}
            <div className="NavBar-submenu">
                <nav className="Submenu-nav">
                    <ul className='Submenu-ul'>
                        {subcategories.map ( ( {id,name, symbol} ) => 
                            <li className={`Submenu-li Link-lineEffect ${submenuSelect === id ? 'activeSubmenu' : ''}`} key={id}>
                                <a className="Submenu-link" href="">
                                    <span className="Link-text">{name}</span>
                                    <span className={`Link-icon Icon-gotolink ${symbol ? 'active' : ''}`}><Gotolink/></span>
                                </a>
                            </li>
                        )}
                    </ul>
                </nav>
                <button className='Submenu-button'>
                    <div className="Button-container">
                        <span className="Button-icon hidden">
                            <ChevronRight/>
                        </span>
                        <span className='Button-text'>Pre-Register Now</span>
                        <span className="Button-icon">
                            <ChevronRight/>
                        </span>
                    </div>
                </button>
            </div>

        </div>
    )
}



