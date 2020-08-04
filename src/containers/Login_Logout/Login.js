import React, {Component} from 'react';
import {connect} from "react-redux"
import {loginUser} from "../../store/actions/user";
import {FaUserAlt, FaLock} from "react-icons/fa"
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";

class Login extends Component {

   state = {
      email: "",
      password: "",
      error: "",
      success: false
   };


   submitForm = (e) => {
      e.preventDefault();
      this.props.dispatch(loginUser(this.state));
   };

   handleInputEmail = (e) => {
      this.setState({
         email: e.target.value
      })
   };

   handleInputPassword = (e) => {
      this.setState({
         password: e.target.value
      })
   };

   UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.user && nextProps.user.login && nextProps.user.login.isAuth) {
         this.props.history.push("/products/napitki")
      }
   }

   render() {

      let user = this.props.user;

      return (
          <section className="login-user">

             <Helmet>
                <title>Авторизация</title>
                <meta name="description" content="Авторизация Smart Deals" />
             </Helmet>

             <div className="container">
                <div className="row">
                   <div className="col-md-12">

                      <form className="login-box" onSubmit={this.submitForm} autoComplete="on">

                         <h2>Войти</h2>

                         <div className="form-group">
                            <FaUserAlt/>
                            <input
                                type="email"
                                className="form-control box-input"
                                placeholder="Ваш e-mail"
                                value={this.state.email}
                                onChange={this.handleInputEmail}
                            />
                         </div>

                         <div className="form-group">
                            <FaLock />
                            <input
                                type="password"
                                placeholder="Ваш пароль"
                                className="form-control box-input"
                                value={this.state.password}
                                onChange={this.handleInputPassword}
                            />
                         </div>

                         <div className="buttons">
                            <Link className="btn btn-primary form-control" to="/register">Регистрация</Link>
                            <button className="btn btn-primary form-control" type="submit">Войти</button>
                         </div>



                         {
                            user.login ?
                                <div className="error alert alert-danger mt-3">
                                   <div>{user.login.message}</div>
                                </div>
                                : null
                         }

                      </form>

                   </div>
                </div>
             </div>
          </section>
      );
   }
}

function mapStateToProps(state) {
   return {
      user: state.user_r
   }
}

export default connect(mapStateToProps)(Login);