import { IconContainer } from '../../Common/Common'
import './Footer.scss'

export const Footer =  () => {

    const links = [
        { id:0, text:'©2022 Tomorrowland', link:false },
        { id:1, text:'Website terms of use', link:true },
        { id:2, text:'Privacy Policy', link:true },
        { id:3, text:'Terms & Conditions', link:true },
        { id:4, text:'FAQ & Contact', link:true },
    ]

    const social = [
        { id: 0, name:'Facebook'},        
        { id: 1, name:'Instagram'},
        { id: 2, name:'Twitter'},
        { id: 3, name:'Youtube'},
        { id: 4, name:'TikTok'}        
    ]


    return (
        <div className="Footer">
            <div className="Footer-logo">
                <img src="./assets/footer/logo-footer.png" alt="Tomorrowland Logo" className="Logo-img" />
            </div>
            <div className="Footer-social">
                <ul className="Social-ul">
                    { social.map ( (social) => 
                    <li className='Social-li' key={social.id}>
                        <a href="" className="Social-link"><IconContainer {...social}/></a>
                    </li>
                    )}
                </ul>
            </div>
            <div className="Footer-Links">
                <ul className="Footer-ul">
                    { links.map ( ({id, text, link}) => 
                        <li key={id} className="Footer-li Footer-section">
                            <a className={`Footer-link ${link ? 'active' : ''}`} href="#">{text}</a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}



