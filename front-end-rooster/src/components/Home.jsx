import ReactStars from 'react-stars'
import React from 'react'
import Carousel from './carousel'

export default function Home () {

    const ratingChanged = (newRating) => {
        console.log(newRating)
      }

    return(
        <div className="wholeScreen">
            <div className="welcomeScreen">
                    <div className="roosterLogoBox">
                        <h1 className="roosterLogo">RoosterGrin</h1>
                    </div>
                <div className="welcomeContent">
                    
                    <div className="welcomeText">
                        <h1 className="welcomeTo">WELCOME TO</h1>
                        <h2 className="roosterGrin">Rooster Grin</h2>
                    </div>
                    <div className="welcomeButtonBox">
                        <button className="welcomeButton">Explore</button>
                    </div>
                </div>
            </div>
            <div className="sectionOne">
                <div className="leftSection">
                    <div className="leftContent">
                        <h1 className="leftSectionHeader">LOREM IPSUM</h1>
                        <p className="leftSectionBody">Lorem ipsum dolor sit amet, et felis intger. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula, lacus est vehicula donec. Quam in ac quam. Duis et, non arcu imperdiet sem tellus suspendisse. Condimentum non aliquet sed, quique risus vitae semper duis feugiat.</p>
                        <button className="leftSectionButton">Lorem Ipsum</button>
                    </div>
                </div>
                <div className="rightSection">
                </div>
            </div>
            <div className="sectionTwo">
                <div className="leftSectionTwo">
                    <div className="leftContentTwo">
                    <h1 className="leftSectionHeaderTwo">LOREM IPSUM</h1>
                    <button className="leftSectionButtonTwo">BUTTON BUTTON</button>
                    </div>
                </div>
                <div className="rightSectionTwo">
                </div>
            </div>
            <div className="sectionThree">
                <div className="leftSectionThree">
                    <div className="leftContentThree">
                        <h1 className="leftSectionHeaderThree">LOREM IPSUM</h1>
                        <p className="leftSectionBodyThree">Lorem ipsum dolor sit amet, et felis intger. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula, lacus est vehicula donec. Quam in ac quam. Duis et, non arcu imperdiet sem tellus suspendisse. Condimentum non aliquet sed, quique risus vitae semper duis feugiat.</p>
                        <button className="leftSectionButtonThree">Lorem Ipsum</button>
                    </div>
                </div>
                <div className="rightSectionThree">
                        <div className="item1">
                            <div className="svg1"></div>
                            <div className="text1">LOREM</div>
                        </div>
                        <div className="item2">
                            <div className="svg2"></div>
                            <div className="text2">LOREM IPSUM</div>
                        </div>
                        <div className="item3">
                            <div className="svg3"></div>
                            <div className="text3">LOREM IPSUM</div>
                        </div>
                        <div className="item4">
                            <div className="svg4"></div>
                            <div className="text4">LOREM</div>
                        </div>
                </div>
            </div>
            <div className="sectionFour">
                <div className="leftSectionFour">
                </div>
                <div className="rightSectionFour">
                    <div className="rightContentFour">
                        <h1 className="rightSectionHeaderFour">LOREM IPSUM</h1>
                        <p className="rightSectionBodyFour">Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.</p>
                        <button className="rightSectionButtonFour">BUTTON BUTTON</button>
                    </div>
                </div>
            </div>
            <div className="sectionFive">
                <div className="leftSectionFive">
                    <div className="leftContentFive">
                        <h1 className="leftSectionHeaderFive">LOREM IPSUM <br></br>DOLOR SIT AMET</h1>
                        <div className='reactStars'>
                            <ReactStars
                            count={5}
                            value={5}
                            edit={false}
                            size={24}
                            color1={'#f87216'} 
                            color2={'#f87216'}/>
                        </div>
                        
                    </div>
                </div>
                <div className="rightSectionFive">
                        <Carousel />
                </div>
            </div>
            <div className='footer'>
                <div className='footerContent'>
                    <h4>Follow Us:</h4>
                    <div className='socialsContainer'>
                    <div className='instagram'></div>
                    <div className='facebook'></div>
                    </div>
                </div>

            </div>
        </div>
    )
}