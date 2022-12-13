import { ChevronRight } from '../../Common/Common'
import './Info.scss'

export const Info = () => {

    const cards = [
        { id:0, cardType:'A', title:'Tomorrowland', description: 'Enter a fascinating story to be written during Tomorrowland 2023', buttonText:'tickets', background:'./assets/info/tomorrowland-2022-mainstage.jpg'},
        { id:1, cardType:'A', title:'Dreamville', description: 'A vibrant city that welcomes tens of thousands festival visitors after an exuberant day at Tomorrowland.', buttonText:'More Info', background:'./assets/info/dreamville.jpg'},
        {id:2, cardType:'B', title:'We are...', description: 'The People of Tomorrow. We believe in enjoying life to the fullest without having to compromise everything. We are responsible for the generation of tomorrow and respect each other and Mother Nature.', caption: 'The people of tomorrow'},
        {id:3, cardType:'B', title:'We believe...', description: 'in a commitment to create a reality that relates positively with Mother Nature and contributes to the well-being of the next generations. Let’s engage with each other and do something good today, for which we will be grateful for tomorrow.', caption:'The people of tomorrow'},
        { id:4, cardType:'A', title:'Global Journey', description:'Travel from every corner of the world, all united in a once in a lifetime travel experience that brings you to Tomorrowland, including your Tomorrowland ticket.', buttonText:'More Info', background:'./assets/info/global-journey-2018.jpg'},
        { id:5, cardType:'A', title:'Practical', description:'Discover all practical information on Tomorrowland and prepare for your new magical adventure.', buttonText:'More Info', background:'./assets/info/tomorrowland-2020.jpg'}
    ]

    return (
        <div className="Info">
            <ul className="Info-ul">
                { cards.map ( (cards) => 
                    <li key={cards.id} className="Info-card">
                        { (cards.cardType === 'A') ? <CardA {...cards} className='Card-A'/> : <CardB {...cards} className='Card-B'/>}
                    </li>
                )}
            </ul>
        </div>
    )
}


const CardA = ({title,description, buttonText, background}) => {
    return (
        <a href="#" className="Card-container Card-link">
            <div className="Card-content">
                <span className="Content-title">{title}</span>
                <p className="Content-description">{description}</p>
                <span className="Content-button">
                    <span className="Button-text">{buttonText}</span>
                    <span className="Button-icon">
                        <ChevronRight/>
                    </span>
                </span>
            </div>
            <div className="Card-background">
                <img className='Background-img' src={background} alt="Tomorrowland" />
            </div>
        </a>

    )
}

const CardB = ({caption, title, description}) => {

    return (
        <div className='Card-container'>
            <div className="Card-content">
                <span className='Content-caption'>{caption}</span>
                <span className="Content-titleB">{title}</span>
                <p className="Content-descriptionB">{description}</p>
            </div>
        </div>
    )
}