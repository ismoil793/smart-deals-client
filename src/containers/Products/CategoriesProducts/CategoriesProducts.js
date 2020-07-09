import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import {getCategories} from "../../../store/actions";
import {connect} from "react-redux"
import LoaderDots from "../../../UI/Preloader/LoaderDots";

class CategoriesProducts extends Component {

   icons = [

   ];

   componentDidMount() {
      this.props.dispatch(getCategories());
   }


   renderCategories = (list) => {

      return list.map((item, i) => {

         let active = "";

         if (this.props.match.params.slug === item.slug) {
            active = "active"
         }

         return (
             <li key={i}>
                <Link className={`${active}`} to={`/products/${item.slug}`}>{item.name}</Link>
             </li>
         )
      })
   };

   render() {

      if (this.props.product && this.props.product.categories) {
         return (
             <div className="category-products-sidebar">
                <h4>Выберите категорию</h4>
                <nav>
                   <ul>
                      {this.renderCategories(this.props.product.categories)}
                   </ul>
                </nav>
             </div>
         )
      }
      return (
          <LoaderDots/>
      )

   }
}

function mapStateToProps(state) {
   return {
      product: state.product_r
   }
}

export default withRouter(connect(mapStateToProps)(CategoriesProducts));