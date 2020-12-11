import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { checkLogin } from '../../actions';

class Login extends React.Component {

    renderError = (meta) => {

        if(meta.touched && meta.error) 
        {
            return (
                <div className="ui error message">
                    <div className="header">{meta.error}</div>
                </div>
            );
        }
    }

    renderInput = (formProps) => { 
        
        const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error': ''}`;

        return (
            <div className={className}>
                <label>{formProps.label}</label> 
                <input {...formProps.input} autoComplete="off" />
                {this.renderError(formProps.meta)}
            </div>
        )
    }

    onSubmit = (formValues) => {
        console.log(formValues);
        this.props.checkLogin(formValues);
    }


    render(){
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)} >
                <h1>Login</h1>
                <p>{this.props.loginError}</p>
                <Field name="username" component={this.renderInput} label="Enter username"/> 
                <Field name="password" component={this.renderInput} label="Enter password"/>
                <button className="ui button primary">Login</button>
            </form>
        )
    }

}

const validate = (formValues) => {

    const errors = {};

    if(!formValues.username){
        errors.username = 'You must enter a username!';
    }
    if(!formValues.password)
    {
        errors.password = 'You must enter a password!';
    }

    return errors;
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn,
        username: state.auth.username,
        loginError: state.auth.loginError
    }
}

export default connect(mapStateToProps,{
    checkLogin
})(reduxForm({
    form: 'LoginForm',
    validate: validate
})(Login));