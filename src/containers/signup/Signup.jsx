import React from 'react';
import SignupForm from '../../components/signupform/SignupForm.jsx';
import { Card, CardHeader, CardTitle, CardText, CardActions } from 'material-ui/Card';

class Signup extends React.Component {

    render() {
        return (
            <div id="signup">
                <div className="main-content">
                    <Card className="card">
                        <CardTitle className="title" title="Sign up now !" subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem rerum et consequatur illo, maiores facere aut numquam quisquam ad suscipit, deserunt soluta placeat, recusandae" />
                        <CardText>
                            <SignupForm />
                        </CardText>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Signup;