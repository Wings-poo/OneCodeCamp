import React from 'react';
import clover from '../assets/images/Cookie_clover_card.png';
import creme_brulee from '../assets/images/Cookie_creme_brulee_card.png';
import rockstar from '../assets/images/Cookie_rockstar_card.png';
import icicle_yeti from '../assets/images/Cookie_icicle_yeti_card.png';

const Images = (props) => {
    let imageName = {
        "Clover": clover,
        "Creme Brulee": creme_brulee,
        "Rockstar": rockstar,
        "Icicle Yeti": icicle_yeti
    };

    return (
        <img src={imageName[props.name]} alt="Cookie image"></img> 
    )
}

export default Images
