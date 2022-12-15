import { useState } from 'react'
import { Year } from '../Common/Common'
import './Timeline.scss'

export const Timeline = () => {

    const Grid = [
        {id : 0, year : '2022', title : 'The Reflection of Love', text : 'In 2022, Tomorrowland made its grand return to the beautiful and unique scenery of De Schorre, welcoming more than 600,000 People of Tomorrow to celebrate together during 3 wonderful weekends of magic. The 16th edition of Tomorrowland revolved around a magnificent new tale ‘The Reflection of Love’, symbolizing the positive energy the festival stands for. The whole world united again in one magical place filled with energy and love, embracing the gift of life and reflecting all that is positive from around the globe while enjoying mesmerizing performances of more than 800 of the planet’s finest electronic artists, including Alesso, Amelie Lens, Armin van Buuren, Charlotte de Witte, Dimitri Vegas & Like Mike, Diplo, Eric Prydz, Lost Frequencies, Marshmello, Martin Garrix, Paul Kalkbrenner and many more…'},
    ]

    return(

        <div className="Timeline">

            <div className="Timeline-title">
                <h2 className="Timeline-h2">DOWN MEMORY LANE</h2>
                <p className="Timeline-p">TOMORROWLAND THROUGH THE YEARS</p>
            </div>

            <div className="Timeline-item">
                <Year clase='Timeline-year'>2022</Year>
                <div className="Timeline-container">
                    <div className="Timeline-info">
                        {Grid.map( info =>
                            <Info key={ info.id } {...info}/>
                        )}
                    </div>
                    <Slider />
                </div>
            </div>

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

const Slider = () => {

    const [ foto, setFoto ] = useState(0)
    const change = ( valor ) => setFoto( valor )
    
    const slides = [
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

    const desplazarMenos = () => {
        
        let indice = foto === 0 ? slides.length - 1 : foto - 1
        setFoto( indice )
        // console.log(indice)
    }
    

    const desplazarMas = () => {

        let indice = foto === slides.length - 1 ? 0 : foto + 1
        setFoto ( indice )
        // console.log(indice)

    }

    return(
        <div className="Slider">
            <div className="Slider-container">
                <div className="Slider-hidden">
                    <ul 
                        className="Slider-img"
                        style={ {
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
                    <svg className='Slider-svg' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
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
