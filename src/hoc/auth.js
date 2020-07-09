import React, {Component} from "react";
import {connect} from "react-redux";
import {auth} from "../store/actions";
import Loader from "../UI/Preloader/loader";


// Auth(Component, reload)

// reload true means that if user is not authenticated it will be redirected to login page
// if reload is false it means user is already logged in and redirected to his dashboard
// if there is no reload user can access those pages without authentication

export default function (ComposedClass, reload) {

   class AuthenticationCheck extends Component {

      state = {
         loading: true,
      };

      //// checking if user is authenticated

      componentDidMount() {
         this.props.dispatch(auth());
      }

      UNSAFE_componentWillReceiveProps(nextProps) {
         this.setState({loading: false});

         if (!nextProps.user.authLogin.isAuth) {
            if (reload) {
               this.props.history.push("/login");
            }
         } else {
            if (reload === false) {
               this.props.history.push("/profile")
            }
         }
      }


      render() {
         if (this.state.loading) {
            return <Loader />
         }
         return (
             <ComposedClass {...this.props} user={this.props.user}/>
         )
      }
   }

   function mapStateToProps(state) {
      return {
         user: state.user_r
      }
   }

   return connect(mapStateToProps)(AuthenticationCheck);

}