import React from "react";
import './Movie.css';
import smallIMG from '../img/small_img.jpeg'
import smallGIRL from '../img/small_girl.jpeg'
import blackboy from '../img/black_man_pic.jpeg';
import whiteGIRL from '../img/white_girl..jpeg';

const Movie = () =>{
    const array = [
        {
            img : smallIMG,
            backIMG : blackboy,
            movieName : "Bright",
            years : "2017,David Ayer",
            duration : "117 min",
            genre : "Action,Crime,Fantasy",
            description : "Set in a world where fantay creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for."
        },
        {
            img : smallGIRL,
            backIMG : whiteGIRL,
            movieName : "Tomb Raider",
            years : "2018,Roar Uthaug",
            duration : "125 min",
            genre : "Action,Fantasy",
            description : "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared."
        },
    ] 

    return(
        <>
            {
                array.map((curElm) => {
                    return (
                        <>
                            <div className="main" style={{backgroundImage : `url(${curElm.backIMG})`}} >
                                <div className="div1">
                                    <img alt="smallIMG" width={"200px"} height={"230px"} src={curElm.img}/>
                                    <div>
                                        <div className="nameAndYear">
                                            <h1>{curElm.movieName}</h1>
                                            <h2 className="color">{curElm.years}</h2>
                                        </div>
                                        <div className="durationAndGenre">
                                            <h2 className="h2_border">{curElm.duration}</h2>
                                            <h2 className="color left">{curElm.genre}</h2>
                                        </div>
                                    </div>
                                </div>

                                <div className="div2">
                                    <h2>{curElm.description}</h2>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </>
    );
}

export default Movie;