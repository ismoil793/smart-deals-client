import React, {Component} from 'react';
import {getCountProductCategory, getProductsInCategory} from "../../../store/actions/index";
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import {FaPlusCircle, FaMinusCircle} from "react-icons/fa"
import LoaderDots from "../../../UI/Preloader/LoaderDots";

class RenderProducts extends Component {

   state = {
      slug: "",
      list: []
   };

   flag = false;
   count = 0;

   componentDidMount() {

      this.flag = false;

      if (!this.props.products.list && !this.props.products.count) {
         if (this.state.list && this.state.list.length > 0) {
            this.props.dispatch(getProductsInCategory(this.props.match.params.slug, 4, 0, this.state.list));
            this.props.dispatch(getCountProductCategory(this.props.match.params.slug));
         } else {
            this.props.dispatch(getProductsInCategory(this.props.match.params.slug, 4, 0));
            this.props.dispatch(getCountProductCategory(this.props.match.params.slug));
         }
      }

   }


   static getDerivedStateFromProps(nextProps, prevState) {

      if (nextProps.match.params.slug !== prevState.slug) {

         if (prevState.list && prevState.list.length > 0) {
            nextProps.dispatch(getProductsInCategory(nextProps.match.params.slug, 4, 0));
         }
         nextProps.dispatch(getCountProductCategory(nextProps.match.params.slug));

         return ({slug: nextProps.match.params.slug, list: nextProps.products.list}) // <- this is setState equivalent
      }
      return null
   }


   // UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
   //    if (nextProps.match.params.slug !== this.state.slug) {
   //
   //       this.props.dispatch(getProductsInCategory(nextProps.match.params.slug, 4, 0));
   //       this.props.dispatch(getCountProductCategory(nextProps.match.params.slug));
   //
   //       this.setState({
   //          slug: nextProps.match.params.slug
   //       });
   //
   //       this.flag = false;
   //
   //    }
   // }

   renderWarning = () => (
       this.flag ?
           <div
               className={`alert ${this.flag ? 'alert-animation' : ''} alert-info`} role="alert">
              Больше продуктов нет
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                 <span aria-hidden="true">&times;</span>
              </button>
           </div>
           : null
   );

   renderProducts = (list) => {

      if (list && list.length > 0) {
         return list.map((item, i) => (
             <div key={i} className="col-md-6">
                <div className="product-in-category">
                   <Link to={`/products/${this.state.slug}/${item.id}`} className="img-prod">
                      <img className="img-fluid" src={`/images/products/product-${i + 1}.jpg`}
                           alt="Product img"/>
                      <div>
                         <p>
                            {
                               item.name.length > 24
                                   ? `${item.name.slice(0, 20)}...`
                                   : item.name
                            }
                         </p>
                         <span>цена: {item.price} / шт</span>
                      </div>
                   </Link>
                   <div className="cart-buttons">
                      <button><FaMinusCircle /></button>
                      <button><FaPlusCircle /></button>
                   </div>
                </div>
             </div>
         ))
      }
   };

   loadMore = () => {
      let count = this.props.products.list.length;
      this.props.dispatch(getProductsInCategory(this.state.slug, 2, count, this.props.products.list));

      if (this.count) {
         if (count === this.count) {
            this.flag = true
         }
      }
   };


   render() {

      if (this.props.products.list && this.props.products.list.length > 0 && this.props.products.count) {

         this.count = this.props.products.count;

         return (
             <div className="col-lg-12">


                <div className="row">
                   {this.renderProducts(this.props.products.list)}
                </div>


                <div className="row">

                   {this.renderWarning()}

                   {
                      this.count > 3 && !this.flag ?
                          <div className="col-lg-12">
                             <button className="btn btn-info loadmore-btn" onClick={this.loadMore}>
                                Показать больше
                             </button>
                          </div>
                          : null
                   }

                </div>


             </div>
         );
      } else {
         return (
             <div className="col-lg-12">
                <div className="row">
                   <div className="col-lg-12">
                      <LoaderDots/>
                   </div>
                </div>
             </div>
         )
      }

   }
}

function mapStateToProps(state) {
   return {
      products: state.product_r
   }
}

export default withRouter(connect(mapStateToProps)(RenderProducts));