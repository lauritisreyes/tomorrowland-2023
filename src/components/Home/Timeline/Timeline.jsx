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
        { 
            id : 2 ,
            year : '2020',
            title : 'Around the World and 31.12.2020',
            text : 'An exceptional and challenging year called for new ventures to explore… On the cancellation of Tomorrowland Winter in France and the summer edition in Belgium due to COVID-19, Tomorrowland took a leap into the wonderful digital world, opening the doors to the future on the magical island of Papilionem with the first edition of Tomorrowland Around the World on July 25 & 26. Closing off the year in style with a magical New Year’s Eve celebration, people from all corners of the world counted down to 2021 and danced into the new year at Tomorrowland 31.12.2020.',
            slides : [
                { id : 0, url : '/assets/2020-000.jpg', title : 'Photo1'},
                { id : 1, url : '/assets/2020-001.jpg', title : 'Photo2'},
                { id : 2, url : '/assets/2020-002.jpg', title : 'Photo3'},
                { id : 3, url : '/assets/2020-003.jpg', title : 'Photo4'},
                { id : 4, url : '/assets/2020-004.jpg', title : 'Photo5'},
                { id : 5, url : '/assets/2020-005.jpg', title : 'Photo6'},
                { id : 6, url : '/assets/2020-006.jpg', title : 'Photo7'},
                { id : 7, url : '/assets/2020-007.jpg', title : 'Photo7'},
            ]
        },
        { 
            id : 3 ,
            year : '2019',
            title : 'The Book of Wisdom – The Return',
            text : 'After a first magical edition of Tomorrowland Winter in Alpe d’Huez (March 2019), the 15th Year Celebration edition in Belgium welcomed back one of the most legendary stories ever told. 400,000 People of Tomorrow wrote their own chapter in The Book of Wisdom and witnessed performances by Dimitri Vegas & Like Mike, The Chainsmokers, Martin Garrix, Lost Frequencies, Armin van Buuren, Afrojack and many other incredible artists.',
            slides : [
                { id : 0, url : '/assets/2019-1.jpg', title : 'Photo1'},
                { id : 1, url : '/assets/2019-2.jpg', title : 'Photo2'},
                { id : 2, url : '/assets/2019-3.jpg', title : 'Photo3'},
                { id : 3, url : '/assets/2019-4.jpg', title : 'Photo4'},
                { id : 4, url : '/assets/2019-5.jpg', title : 'Photo5'},
                { id : 5, url : '/assets/2019-6.jpg', title : 'Photo6'},
                { id : 6, url : '/assets/2019-7.jpg', title : 'Photo7'},
                { id : 7, url : '/assets/2019-8.jpg', title : 'Photo7'},
                { id : 8, url : '/assets/2019-9.jpg', title : 'Photo7'},
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

                    <ul 
                        className="Slider-control">
                        { slides && slides.map( ({ id }) =>
                             <li 
                                key={id} 
                                onClick={ ()=> change(id)}
                                className={ `Slider-control-part ${ foto === id ? 'isActive' : ''}` }
                                style={ {
                                    width : `${ slides.length * 100 }%`
                                } } >
                                </li>
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
