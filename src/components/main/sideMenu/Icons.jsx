import React from "react";
import IconButton from "./IconsButton";

import BikeIcon from "/src/assets/icons/sideMenu/bike.png";
import FitnessIcon from "/src/assets/icons/sideMenu/fitness.png";
import SwimIcon from "/src/assets/icons/sideMenu/swim.png";
import YogaIcon from "/src/assets/icons/sideMenu/yoga.png";

function Icons() {
  return (
    <>
      <div className="iconGroup">
        <IconButton
          icon={YogaIcon}
          alt="Icone yoga"
        />
        <IconButton
          icon={SwimIcon}
          alt="Icone natation"
        />
        <IconButton
          icon={BikeIcon}
          alt="Icone vélo"
        />
        <IconButton
          icon={FitnessIcon}
          alt="Icone fitness"
        />
      </div>
    </>
  );
}

export default Icons;
