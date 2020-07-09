import React, {Component} from 'react';
import AOS from 'aos';
import "aos/dist/aos.css"

class Animation extends Component {

   componentDidMount() {
      AOS.init({
         once: true
      });
   }

   render() {
      return (
         <React.Fragment>
            {this.props.children}
         </React.Fragment>
      );
   }
}

export default Animation;