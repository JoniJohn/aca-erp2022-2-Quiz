import React from "react";
import Space from "../custom_components/Space";

function SummaryView() {
    return (
        <div className="container">
            <Space></Space>
            <h2>Quiz Summary</h2>
            <h4>Below are your results for the quiz.</h4>
            <div className="border border-info rounded-3 p-3">

            </div>
        </div>
    );
}

export default SummaryView;