import React from 'react';
import { Get } from 'react-axios';

class HeadProfile extends React.Component {

  render () {
    return (
      <div id="headProfile">
        <Get url="https://randomuser.me/api/?results=8">
  {(error, response, isLoading) => {
      if(isLoading) {
          return  (<div></div>);
      } else if (response != null) {
          var retour = [];
          for (var i=0; i<8; i++) {
              if(response.data.results[i]) {
                  retour.push(
                      <div key={i} className="profile">
                          <div className="inner">
                              <div className="img-wrapper"><img src={response.data.results[i].picture.large} alt=""/></div>
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