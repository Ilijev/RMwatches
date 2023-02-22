import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import LandingBanner from "../../components/landingBanner/LandingBanner";
import styles from './homePage.module.css'
import Card from "../../components/card/card";
import dummy_data from '../../watches_dummy_data.json';
import {NavLink} from "react-router-dom";

type Props = {};

export default function Home({}: Props) {

    const [cardsData] = useState(dummy_data.watches.slice(0, 9));

    return (
        <>
            <LandingBanner/>
            <div className="container">
                <div className="row py-3 justify-content-between">
                    <div className="col-6">
                        <h3>OUR LAST PRODUCTS</h3>
                    </div>
                    <div className="col-4">
                        <select className="form-select" aria-label="Default select">
                            <option>Default</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                </div>
                {
                    cardsData.length &&
                    <div className="row py-3">
                        {
                            cardsData.map((watch, index) => {
                                return (
                                    <div key={index} className='col-sm-6 col-md-4 py-2'>
                                        <Card id={watch.id}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
                <div className="row justify-content-center py-3">
                    <NavLink to='/products' className="col-4 btn btn-outline-dark">VIEW ALL</NavLink>
                </div>
            </div>
        </>
    );
}
