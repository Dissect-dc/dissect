import React from "react"
import {Link} from 'gatsby'

import "../pages/global.css"

import berserker from "../images/icons/berserker.png"
import renegade from "../images/icons/renegade.png"
import firebrand from "../images/icons/firebrand.png"
import weaver from "../images/icons/weaver.png"
import soulbeast from "../images/icons/soulbeast.png"

const width = 80;

export default ({data}) => (
    <>
        <div className="row builds-icons">
            <div className="column-icons zoom">
                <Link to="/berserker">
                    <img width={width} className="class-icon"
                         src={berserker} alt="Berserker"/>
                </Link>
            </div>
            <div className="column-icons zoom">
                <Link to="/firebrand">
                    <img width={width} className="class-icon"
                         src={firebrand} alt="Berserker"/>
                </Link>
            </div>
            <div className="column-icons zoom">
                <Link to="/renegade">
                    <img width={width} className="class-icon"
                         src={renegade} alt="Berserker"/>
                </Link>
            </div>
            <div className="column-icons zoom">
                <Link to="/soulbeast">
                    <img width={width} className="class-icon"
                         src={soulbeast} alt="Berserker"/>
                </Link>
            </div>
            <div className="column-icons zoom">
                <Link to="/weaver">
                    <img width={width} className="class-icon"
                         src={weaver} alt="Berserker"/>
                </Link>
            </div>
        </div>
    </>
)

