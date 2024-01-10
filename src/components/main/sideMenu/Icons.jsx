import React from "react";
import BikeIcon from "/src/assets/icons/bike.png";
import FitnessIcon from "/src/assets/icons/fitness.png";
import SwimIcon from "/src/assets/icons/swim.png";
import YogaIcon from "/src/assets/icons/yoga.png";

function Icons() {
  return (
    <>
      <div className="iconGroup">
        <img src={YogaIcon} alt="Icone yoga" />
        <img src={SwimIcon} alt="Icone natation" />
        <img src={BikeIcon} alt="Icone velo" />
        <img src={FitnessIcon} alt="Icone fitness" />
      </div>
    </>
  );
}

export default Icons;