import React from "react";
import {reduxForm, Field} from "redux-form";
import {connect} from "react-redux";
import {compose} from 'redux';
import * as actions from '../../action/index'



class Signin extends React.Component {

    onSubmit = (formProps) => {
        this.props.signin(formProps,()=>{
            this.props.history.push('/feature');
        });
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <label>Email</label>
                    <Field name="email" autoComplete="off"
                           type="text"
                           component="input"/>
                </fieldset>
                <fieldset>
                    <label>Password</label>
                    <Field name="password" autoComplete="off"
                           type="password"
                           component="input"/>
                </fieldset>
                <div>{this.props.errorMessage}</div>
                <button>Sign IN!</button>
            </form>
        );
    }
}
const mapStateToProps=(state)=>{
    return {
        errorMessage: state.auth.errorMessage
    };
}


export default compose(
    connect(mapStateToProps,actions),
    reduxForm({form:'signin'})
)(Signin);
