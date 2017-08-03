import React from 'react';
import { Get } from 'react-axios';
import {ScaleLoader} from 'halogen';
import ProfileImage from '../profileImage/ProfileImage.jsx';

class HeadProfile extends React.Component {

  render () {
    return (
      <div id="headProfile">
        <Get url="https://randomuser.me/api/?results=8">
  {(error, response, isLoading) => {
      if(isLoading) {
          return  (
              <div>
                <div key={i} className="profile-load">
                    <div className="inner">
                        <ScaleLoader color="#18ffff" size="60px" className="loader"/>
                    </div>
                </div>
            </div>
          );
      } else if (response != null) {
          var retour = [];
          for (var i=0; i<8; i++) {
              if(response.data.results[i]) {
                  retour.push(
                      <div key={i} className="profile">
                          <div className="inner">
                            <ProfileImage user={response.data.results[i]} />
                          </div>
                      </div>
                  );
              } else {
                  retour.push(
                      <div key={i} className="profile">
                          <div className="inner">
                              <div className="img-wrapper"><img src="" alt="Unknown"/></div>
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
    );
  }
}
 
export default HeadProfile;