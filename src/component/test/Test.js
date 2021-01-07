import React from "react";
import data from "./data.json";
import Board from "react-trello";

let Test = () => {
    return (

        <div className="Test">
            <div className="container-fluid">
                <div className="row">
                    <div className="landing-page">
                        <div className="wrapper">
                            <div className="col col-md-8 col-sm-4 col-lg-12">
                                <Board data={data} draggable editable canAddLanes/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Test;
