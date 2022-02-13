import React, { useRef } from "react";
import './css/services.css'
export const Services = () => {
    return (
        <div className="Main-div">
            <div className="fst">
                <h1 className="cl">Collect</h1>
                <p className="p1">We're highly into collecting data and cleaning it leaving only the most important data that's gonna help us make a wise decision via Dataware-house and Data-Sets</p>
            </div>
            <div className="nd">
                <h1 className="c2">Process</h1>
                <p className="p2">We cover in this section convering data , unification , and predictive analystic and alot more</p>
                </div>
            <div className="rd">
                    <h1 className="c3">Visualise</h1>
                    <p className="p3">creating interactive tools and static infographics that can be consumed online or in print</p>
                </div>
        </div>
    )
}