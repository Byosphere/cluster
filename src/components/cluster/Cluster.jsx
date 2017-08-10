import React from 'react';
import { Get } from 'react-axios';
import {MoonLoader} from 'halogen';
import axios from 'axios';
import Flag from '../flag/Flag.jsx';
import {Link} from 'react-router-dom';
import ProfileImage from '../profileImage/ProfileImage.jsx';
import Badge from 'material-ui/Badge'

class Cluster extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div id="cluster">
                <div className="circle">
                     <Get url="https://randomuser.me/api/?results=8">
                        {(error, response, isLoading) => {
                            if(isLoading) {
                                return ( <MoonLoader color="#26A65B" size="100px" className="loader"/>);
                            } else if (response != null) {
                                var retour = [];
                                for (var i=0; i<8; i++) {
                                    if(response.data.results[i]) {
                                        var currentItem = response.data.results[i];
                                        retour.push(
                                            <div key={i} className="profile">
                                                <div className="inner">
                                                    <Flag nat={currentItem.nat} />
                                                    <ProfileImage user={currentItem} />
                                                    <Badge style={{position:'static', padding:0}} badgeContent={4} primary={true}>
                                                        <div className="name">{currentItem.name.first}</div>
                                                    </Badge>
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