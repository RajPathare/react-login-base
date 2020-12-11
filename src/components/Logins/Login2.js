import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { checkLogin } from '../../actions';


import './Login2.css'

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
                <input {...formProps.input} className="form-control" autoComplete="off" />
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
            <div className="container-fluid">
  <div className="row no-gutter">
    <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
    <div className="col-md-8 col-lg-6">
      <div className="login d-flex align-items-center py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-lg-8 mx-auto">
            <h1>SideScroll App</h1>
              <h3 className="login-heading mb-4">Login</h3>
              <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <div className="form-label-group">
                <p style={{"color":"red"}}>{this.props.loginError}</p>
                <Field name="username" component={this.renderInput} label="Enter username"/> 
                </div>
                <div className="form-label-group">
                <Field name="password" component={this.renderInput} label="Enter password"/>
                </div>
                <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Sign in</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

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