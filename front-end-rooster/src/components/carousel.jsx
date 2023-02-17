import React from 'react'
import { useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Carousel = () => {
    const [index, setIndex] = useState(0);
    const length = 3;
    const paragraphs = [
        'Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut, pede ut ante, in viverra eros dictum nisl ligula. Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut, pede ut ante, in viverra eros dictum nisl ligula. Cras ac duis nisl magna est sociis, neque in. ras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut, pede ut ante, in viverra eros dictum nisl ligula.',
        'Fugit quam, ut, pede ut ante, in viverra eros dictum nisl ligula. Cras ac duis nisl magna est sociis, neque in. Fugit quam, ut, pede ut ante, in viverra eros dictum nisl ligula. Cras ac duis nisl magna est sociis, neque in. Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut, pede ut ante, in viverra eros dictum nisl ligula. ras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut, pede ut ante, in viverra eros dictum nisl ligula.',
        'pede ut ante, in viverra eros dictum nisl ligula. Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut, pede ut ante, in viverra eros dictum nisl ligula. Cras ac duis nisl magna est sociis, neque in. pede ut ante, in viverra eros dictum nisl ligula. Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut, pede ut ante, in viverra eros dictum nisl ligula. Cras ac duis nisl magna est sociis, neque in.'

    ]
    const authors =[
        'John Doe 08/08/2019',
        'Jane Smith 02/16/2020',
        'Bob George 11/02/2021'
    ]

    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length - 1 : newIndex)
    }

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex)
    }

    let paragraph = null;
    let author = null;
    if (index === 0) {
        paragraph = <p>{paragraphs[0]}</p>
        author = <h3>{authors[0]}</h3>
    } else if (index === 1) {
        paragraph = <p>{paragraphs[1]}</p>
        author = <h3>{authors[1]}</h3>
    } else if (index === 2) {
        paragraph = <p>{paragraphs[2]}</p>
        author = <h3>{authors[2]}</h3>
    }

    return (
        <div className='carousel'>
            
            <div className='carouselContent'>
                <div className='carouselAuthor'>{author}</div>
                <div className='carouselParagraph'>{paragraph}</div>
                <div className='buttons'>
                    <h2 className='carouselButtons' onClick={handlePrevious}> <AiOutlineArrowLeft /> </h2>
                    <h2 className='carouselButtons' onClick={handleNext}> <AiOutlineArrowRight /></h2>

                </div>
            </div>

            
        </div>
    )
}

export default Carousel;