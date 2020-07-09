import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import HeaderSmall from "./headerSmall";
import HeaderMainItems from "./headerMainItems";
import {connect} from "react-redux"
import $ from "jquery"


class Header extends Component {

   componentDidMount() {

      $('.mouse-icon').click(function () {
         $('html,body').stop().animate(
             {scrollTop: 0}, 'slow', 'swing'
         );
      });


      $('.navbar-toggler').click(function () {
         $("#ftco-nav").toggle()
      })

   }

   render() {
      return (
          <header>

             <HeaderSmall/>
             <HeaderMainItems user={this.props.user}/>

          </header>
      );
   }
}

function mapStateToProps(state) {
   return {
      user: state.user_r
   }
}

export default withRouter(connect(mapStateToProps)(Header));