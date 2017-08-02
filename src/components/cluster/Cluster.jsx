import React from 'react';
import { Get } from 'react-axios';
import {MoonLoader} from 'halogen';
import axios from 'axios';
import Flag from '../flag/Flag.jsx';

class Cluster extends React.Component {

    render() {
        return (
            <div id="cluster">
                <h2>Your Cluster</h2>
                <div className="circle">
                     <Get url="https://randomuser.me/api/?results=8">
                        {(error, response, isLoading) => {
                            if(isLoading) {
                                return ( <MoonLoader color="#26A65B" size="100px" className="loader"/>);
                            } else if (response != null) {
                                var retour = [];
                                for (var i=0; i<8; i++) {
                                    if(response.data.results[i]) {
                                        retour.push(
                                            <div key={i} className="profile">
                                                <div className="inner">
                                                    <Flag nat={response.data.results[i].nat} />
                                                    <div className="img-wrapper"><img src={response.data.results[i].picture.large} alt=""/></div>
                                                    <div className="name">{response.data.results[i].name.first}</div>
                                                </div>
                                            </div>
                                        );
                                    } else {
                                        retour.push(
                                            <div key={i} className="profile">
                                                <div className="inner">
                                                    <div className="img-wrapper"><img src="" alt="Unknown"/></div>
                                                    <div className="name">-</div>
                                                </div>
                                            </div>
                                        );
                                    }
                                }
                                return <div>{retour}</div>;
                            }
                            return (<div>Default message before request is made.</div>);
                        }}
                    </Get>  
                </div>
            </div>
        );
    }
}

export default Cluster;