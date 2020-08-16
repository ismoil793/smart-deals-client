import React, { Component } from "react";
import { connect } from "react-redux";
import { auth } from "../store/actions/user";
import Loader from "../UI/Preloader/loader";
import LoadingBar from "react-top-loading-bar";

// Auth(Component, reload)

// This is an HOC component, on every route change I check if user is authenticated

// reload true means that if user is not authenticated it will be redirected to login page
// if reload is false it means user is already logged in and redirected to his dashboard
// if there is no reload user can access those pages without authentication

export default function (ComposedClass, reload) {

   class AuthenticationCheck extends Component {

      _isMounted = false;

      state = {
         loading: true,
         progress: 0
      };


      //// checking if user is authenticated
      componentDidMount() {
         window.scrollTo(0, 0);
         this._isMounted = true;

         if (this._isMounted) {
            setTimeout(() => {
               this.setState({
                  progress: 100
               })
            }, 200);
         }

         if (this.props.user.authLogin && this.props.user.authLogin.id) {
            this.setState({ loading: false });
         } else {
            this.props.dispatch(auth());
            this.setState({ loading: false });
         }
      }

      static getDerivedStateFromProps(nextProps, prevState) {

         if (nextProps.user.authLogin && nextProps.user.authLogin.isAuth) {
            const isAuth = nextProps.user.authLogin.isAuth;
            if (!isAuth) {
               if (reload) {
                  nextProps.history.push("/login")
               }
            } else {
               if (reload === false) {
                  nextProps.history.push("/profile")
               }
            }
            return ({ loading: false })
         }
         return null
      }

      // UNSAFE_componentWillReceiveProps(nextProps) {
      //
      //    this.setState({loading: false});
      //
      //    if (!nextProps.user.authLogin.isAuth) {
      //       if (reload) {
      //          this.props.history.push("/login");
      //       }
      //    } else {
      //       if (reload === false) {
      //          this.props.history.push("/profile")
      //       }
      //    }
      // }

      componentWillUnmount() {
         this._isMounted = false;
      }


      render() {
         if (this.state.loading) {
            return <Loader />
         }
         return (
            <React.Fragment>
               <LoadingBar
                  color='#45C0AE'
                  height={4}
                  transitionTime={200}
                  loaderSpeed={400}
                  waitingTime={800}
                  progress={this.state.progress}
                  // loaderSpeed={1000}
                  onLoaderFinished={() => {
                  }}
               />
               <ComposedClass {...this.props} user={this.props.user} />
            </React.Fragment>
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