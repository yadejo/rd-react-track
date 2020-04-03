import React, { useState, useEffect } from "react";
import withMovement from "../hoc/with-movement";

function PokemonThumbnail(props) {
  return (
    <div className="PokemonThumbnail">
      <img alt={props.id} src={props.sprite} onClick={props.onClick}></img>
    </div>
  );
}

export default withMovement(PokemonThumbnail);
