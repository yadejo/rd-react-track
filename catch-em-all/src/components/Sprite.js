import React from 'react';

function Sprite(props) {
    return (
        <img alt={props.id} src={props.sprite} onClick={() => console.log(props.url)}></img>
    )
}

export default Sprite;
