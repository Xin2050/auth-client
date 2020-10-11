import React from 'react';
import {connect} from 'react-redux';
import {signout} from "../../action";

class Signout extends React.Component {

    componentDidMount() {
        this.props.signout();
    }

    render() {
        return (
            <div>
                We'll see you soon!
            </div>
        );
    }
}


export default connect(null,{signout})(Signout);