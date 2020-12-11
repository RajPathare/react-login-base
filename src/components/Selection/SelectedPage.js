import React from 'react';
import './paper.css';

import { Link } from 'react-router-dom';

import history from '../../history';

class SelectedPage extends React.Component {

    logoutFunc = () => {
        console.log('logout invoked!');
        localStorage.clear();
        history.push('/login');
    }


    render(){
        return (
            <div className="main-panel">
      <nav className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
        <div className="container-fluid">
          <div className="navbar-wrapper">
            <div className="navbar-toggle">
              <button type="button" className="navbar-toggler">
                <span className="navbar-toggler-bar bar1"></span>
                <span className="navbar-toggler-bar bar2"></span>
                <span className="navbar-toggler-bar bar3"></span>
              </button>
            </div>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-bar navbar-kebab"></span>
            <span className="navbar-toggler-bar navbar-kebab"></span>
            <span className="navbar-toggler-bar navbar-kebab"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navigation">
            <ul className="navbar-nav">
              <li className="nav-item">
                <p>
                  <button className="ui button red" onClick={()=>this.logoutFunc()}>Logout</button>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="content">
        <div className="row">
          <div className="col-md-12">
            <div className="card ">
              <div className="card-header ">
                <h5 className="card-title">Selected card details</h5>
                <p className="card-category">Check your card details</p>
              </div>
              <div className="card-body ">
                Selected item - {this.props.selectedItem}
                <br/><br/>
                <Link to="/dashboard" className="ui button primary">Back to selection</Link>
              </div>
              <div className="card-footer ">
                <hr/>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer footer-black  footer-white ">
        <div className="container-fluid">
          <div className="row">
            
            <div className="credits ml-auto">
              <span className="copyright">
                © <script>
                  document.write(new Date().getFullYear())
                </script> SideScroll App
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
        )
    }
}

export default SelectedPage;