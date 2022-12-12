import React, { useState } from "react";
import '../App.css';
import Child from "./Child";
import Data from "./Data";

const Child2 = () => {

    const [child, setChild] = useState([]);
    const [isShow, setIsShow] = useState(true);
    const [arrowDisplay, setArrowDisplay] = useState(<span>&#8744;</span>);
    const [showData, setShowData] = useState(true);
    const [innerData, setInnerData] = useState(true);

    const addChild = () => {
        setShowData(false);
        setChild([...child, <Child/>]);
        setIsShow(true);
        setArrowDisplay(<span>&#8744;</span>);
    }

    const expandCollapse = () => {
        if(!isShow){
            setInnerData(false);
            setArrowDisplay(<span>&#62;</span>);
            setIsShow(true);
        }
        else {
            setInnerData(true);
            setArrowDisplay(<span>&#8744;</span>);
            setIsShow(false);
        }
    }

  return (
    <>
        <div style={{border:"2px solid #6cacef",margin:"10px 0px 10px 20px"}}>
            <div className="tagElement">
                <div>
                    <button onClick={expandCollapse}>{arrowDisplay}</button>
                    <span>New Child</span>
                </div>
                <div>
                    <button onClick={addChild}>Add Child</button>
                </div>
            </div>


            {innerData ? showData ? <Data/>:<div>{child}</div>: !showData}   
                
        </div>
    </>
  );
};

export default Child2;
