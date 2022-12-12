import './Info.scss'

export const Info = () => {

    const cards = [
        { id:0, cardType:'A', title:'Tomorrowland', description: 'Enter a fascinating story to be written during Tomorrowland 2023', buttonText:'tickets'},
        { id:1, cardType:'A', title:'Dreamville', description: 'A vibrant city that welcomes tens of thousands festival visitors after an exuberant day at Tomorrowland.', buttonText:'More Info'},
        {id:2, cardType:'B', title:'We are...', description: 'The People of Tomorrow. We believe in enjoying life to the fullest without having to compromise everything. We are responsible for the generation of tomorrow and respect each other and Mother Nature.', caption: 'The people of tomorrow'},
        {id:3, cardType:'B', title:'We believe...', description: 'in a commitment to create a reality that relates positively with Mother Nature and contributes to the well-being of the next generations. Let’s engage with each other and do something good today, for which we will be grateful for tomorrow.'},
        { id:4, cardType:'A', title:'Global Journey', description:'Travel from every corner of the world, all united in a once in a lifetime travel experience that brings you to Tomorrowland, including your Tomorrowland ticket.', buttonText:'More Info'},
        { id:5, cardType:'A', title:'Practical', description:'Discover all practical information on Tomorrowland and prepare for your new magical adventure.', buttonText:'More Info'}
    ]

    return (
        <div className="info">
            <ul className="info-ul">
                { cards.map ( (cards) => 
                    <li key={cards.id} className="info-card">
                        { (cards.cardType === 'A') ? <CardA {...cards} className='card-typeA'/> : <CardB {...cards} className='card-typeB'/>}
                    </li>
                )}
            </ul>
        </div>
    )
}



const CardA = ({title,description, buttonText}) => {
    return (
        <a href="" className="card-link">
            <span className="card-title">{title}</span>
            <p className="card-description">{description}</p>
            <span className="card-button">{buttonText}</span>
        </a>

    )
}

const CardB = ({caption, title, description}) => {

    return (
        <>
            <span className='card-caption'>{caption}</span>
            <span className="card-title">{title}</span>
            <p className="card-description">{description}</p>
        </>
    )
}