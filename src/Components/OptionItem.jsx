import React from "react";
import { dinning } from "../assets";
import { foodD } from "../assets";

function OptionItem({ activePage, setActivePage }) {
  const tab = [
    {
      id: 1,
      name: "Dining",
      activeImage:
        "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
      backDroup: "#E5F3F3",
      inActiveImage: `${dinning}`,
    },
    {
      id: 2,
      name: "Delivery",
      backDroup: "#FCEECO",
      activeImage: `https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png`,
      inActiveImage: `https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png`,
    },
    {
      id: 3,
      name: "NightLife",
      backDroup: "#FCEECO",
      activeImage: `https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png`,
      inActiveImage: `https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png`,
    },
  ];

  return (
    <div className="container">
      <div className="container-child">
        {tab.map((curreEle) => {
          return (
            <div
              onClick={() => setActivePage(curreEle.name)}
              className={`tab-item absoultae-center
                ${activePage === curreEle.name && "activePage"} `}
            >
              <div
                className="tab-image-container"
                style={{
                  backgroundColor: `${
                    activePage === curreEle.name ? curreEle.backDroup : ""
                  }`,
                }}
              >
                <img src={activePage === curreEle.name ? curreEle.activeImage : curreEle.inActiveImage} alt= {curreEle.name}  className="tab-image"/>
              </div>
              <div className="tab-name">
                <h3 className={`${activePage===curreEle.name ? "activeTab" : "InActiveTab"}`}>{curreEle.name}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OptionItem;
