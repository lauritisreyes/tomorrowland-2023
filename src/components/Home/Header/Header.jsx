import './Header.scss'


export const Header = () => {

    



    return (
        <div className="Cabecera">
            <TopBar/>
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
        { id:8 , text:'Jobs' , chevron: false }
    ]

    const social = [
        { id: 0, type:'Facebook', img:''},        
        { id: 1, type:'Instagram', img:''},
        { id: 2, type:'Twitter', img:''},
        { id: 3, type:'Youtube', img:''},
        { id: 4, type:'TikTok', img:''}        
    ]
    
    return (
        <div className="topBar">


            <div className="topBar-leftBlock">

                <a href="" className="topBar-name">
                    <div className="topBar-logo">
                        <img src="" alt="" className="topBar-icon" />
                        <span className="topBar-link">Tomorrowland</span>
                    </div>
                </a>

                <nav className="topBar-nav">
                    <ul className="topBar-ul">
                        { links.map ( ({ id, text }) =>
                            <li key={id} className="topBar-li">
                                <a className="topBar-link" href="">{text}
                                </a>
                            </li>
                        )}
                    </ul>
                </nav>

                <ul className="topBar-ul">
                    { social.map ( ( {id, type }) => 
                        <li key={id} className="topBar-li">
                            <a className='topBar-link' href="">{type}</a>
                        </li>
                    )}
                </ul>

            </div>

            <div className="topBar-rightBlock">
                <a href="" className="topBar-link">My account</a>
            </div>

        </div>
    )

}
