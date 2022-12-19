import { useState } from 'react'
import { Year } from '../Common/Common'
import './Timeline.scss'

export const Timeline = () => {

    
    const timelineItems = [
        { 
            id : 0 ,
            year : '2022',
            title : 'The Reflection of Love',
            text : 'In 2022, Tomorrowland made its grand return to the beautiful and unique scenery of De Schorre, welcoming more than 600,000 People of Tomorrow to celebrate together during 3 wonderful weekends of magic. The 16th edition of Tomorrowland revolved around a magnificent new tale ‘The Reflection of Love’, symbolizing the positive energy the festival stands for. The whole world united again in one magical place filled with energy and love, embracing the gift of life and reflecting all that is positive from around the globe while enjoying mesmerizing performances of more than 800 of the planet’s finest electronic artists, including Alesso, Amelie Lens, Armin van Buuren, Charlotte de Witte, Dimitri Vegas & Like Mike, Diplo, Eric Prydz, Lost Frequencies, Marshmello, Martin Garrix, Paul Kalkbrenner and many more…',
            slides : [
                { id : 0, url : '/assets/2022-1.jpg', title : 'Photo1'},
                { id : 1, url : '/assets/2022-2.jpg', title : 'Photo2'},
                { id : 2, url : '/assets/2022-3.jpg', title : 'Photo3'},
                { id : 3, url : '/assets/2022-4.jpg', title : 'Photo4'},
                { id : 4, url : '/assets/2022-5.jpg', title : 'Photo5'},
                { id : 5, url : '/assets/2022-6.jpg', title : 'Photo6'},
                { id : 6, url : '/assets/2022-7.jpg', title : 'Photo7'},
                { id : 7, url : '/assets/2022-8.jpg', title : 'Photo8'},
                { id : 8, url : '/assets/2022-9.jpg', title : 'Photo9'},
            ]
        },
        { 
            id : 1 ,
            year : '2021',
            title : 'Arround the World',
            text : 'Following the huge success of its first ever digital edition in 2020, Tomorrowland brought back the spectacular two-day digital music festival experience on July 16 & 17, 2021, welcoming the most spectacular group of entertainers in the universe ‘The Amicorum Spectaculum’. The magnificent second edition of Tomorrowland – Around the World was adapted to all time zones and brought together a stellar line-up featuring more than 40 of the planet’s biggest names in electronic dance music, while the People of Tomorrow from all corners of the globe united again as one in one place – celebrating the spectacle of friendship.',
            slides : [
                { id : 0, url : '/assets/2021-1.jpg', title : 'Photo1'},
                { id : 1, url : '/assets/2021-2.jpg', title : 'Photo2'},
                { id : 2, url : '/assets/2021-3.jpg', title : 'Photo3'},
                { id : 3, url : '/assets/2021-4.jpg', title : 'Photo4'},
                { id : 4, url : '/assets/2021-5.jpg', title : 'Photo5'},
                { id : 5, url : '/assets/2021-6.jpg', title : 'Photo6'},
                { id : 6, url : '/assets/2021-7.jpg', title : 'Photo7'},
            ]
        },
    ]

    return(

        <div className="Timeline">

            <div className="Timeline-title">
                <h2 className="Timeline-h2">DOWN MEMORY LANE</h2>
                <p className="Timeline-p">TOMORROWLAND THROUGH THE YEARS</p>
            </div>

            { timelineItems.map( item =>

                <div className="Timeline-item">
                    <Year clase='Timeline-year'>{ item.year }</Year>
                    <div className="Timeline-container">
                        <div className="Timeline-info">
                        {/* <Info year={item.year} title={item.title} text={item.text} /> */}
                        <Info { ...item }></Info>
                    </div>
                    {/* <Slider slides={ item.slides } /> */}
                    <Slider {...item} />
                </div>
            </div>
            )}
            
            

        </div>

    )
}

const Info = ({ year, title, text}) => {
    return(
        <div className="InfoCard">
            <p className="InfoCard-year">{ year }</p>
            <h3 className="InfoCard-h3">{ title }</h3>
            <p className="InfoCard-text">{ text }</p>
        </div>
    )
}

const Slider = ({ slides }) => {

    const [ foto, setFoto ] = useState(0)
    const change = ( valor ) => setFoto( valor )
    

    const desplazarMenos = () => {
        
        let indice = foto === 0 ? slides.length - 1 : foto - 1
        setFoto( indice )
    }
    

    const desplazarMas = () => {

        let indice = foto === slides.length - 1 ? 0 : foto + 1
        setFoto ( indice )

    }

    return(
        <div className="Slider">
            <div className="Slider-container">
                <div className="Slider-hidden">
                    <ul 
                        className="Slider-img"
                        style={ {
                            width : `${ slides.length * 100 }%`,
                            transform : `translateX(-${ 100 / slides.length * foto}%)`
                        } }>
                        {slides && slides.map( ({ id, url, title }) =>
                            <li 
                                key={id} 
                                className="Slider-photo">
                                <img src={url} alt={title} loading='lazy' />
                            </li>
                        )}
                    </ul>

                    <ul className="Slider-control">
                        { slides && slides.map( ({ id }) =>
                             <li 
                                key={id} 
                                onClick={ ()=> change(id)}
                                className="Slider-control-part"></li>
                        ) }
                    </ul>
                </div>

                <button onClick={desplazarMenos} className="Slider-btn Slider-btn-left">
                    <svg className='Slider-svg' xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg>
                </button>

                <button onClick={desplazarMas} className="Slider-btn Slider-btn-right">
                    <svg className='Slider-svg' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </button>
            </div>

        </div>
    )
}
