import React from 'react';
import SignupForm from '../../components/signupform/SignupForm.jsx';

class Signup extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div id="signup">
                <div className="main-content">
                    <h2>Sign up now !</h2>
                    <hr/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem rerum et consequatur illo, maiores facere aut numquam quisquam ad suscipit, deserunt soluta placeat, recusandae quibusdam officiis vero cupiditate ratione nihil!</p>
                    <SignupForm />
                </div>
            </div>
        );
    }
}

export default Signup;