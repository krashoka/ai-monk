import React, { useState } from "react";
import '../App.css';
import Child2 from "./child2";
import Data from "./Data";

const Child = () => {

    const [child, setChild] = useState([]);
    const [isShow, setIsShow] = useState(true);
    const [arrowDisplay, setArrowDisplay] = useState(<span>&#8744;</span>);
    const [showData, setShowData] = useState(true);
    const [innerData, setInnerData] = useState(true);

    const addChild = () => {
        setShowData(false);
        setChild([...child, <Child2/>]);
        setIsShow(true);
        setArrowDisplay(<span>&#8744;</span>);
    }

    const expandCollapse = () => {
        if(!isShow){
            setIsShow(true);
            setInnerData(false);
            setArrowDisplay(<span>&#62;</span>);
        }
        else {
            setIsShow(false);
            setInnerData(true);
            setArrowDisplay(<span>&#8744;</span>);
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

export default Child;
