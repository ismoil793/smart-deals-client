import React, {Component} from 'react';
import {getCountProductCategory, getProductsInCategory, clearProductsInCategory} from "../../store/actions/product";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import SkeletonUI from "../../UI/Skeleton/SkeletonUI";
import RenderProducts from "../../UI/RenderProducts/renderProducts";

class ProductsList extends Component {

   state = {
      slug: this.props.match.params.slug,
      flag: false
   };

   count = 0;

   componentDidMount() {

      this.setState({
         flag: false
      });

      // Every time when store has no products to render I need to get new products from DB
      if (!this.props.products.list || !this.props.products.count) {
         this.props.dispatch(clearProductsInCategory());
         this.props.dispatch(getProductsInCategory(this.props.match.params.slug, 20, 0));
         this.props.dispatch(getCountProductCategory(this.props.match.params.slug));
      }
      // When category slug changes and it is different from product.category.slug -> rerender component
      else if (this.props.products.list[0].category.slug !== this.props.match.params.slug) {
         this.props.dispatch(clearProductsInCategory());
         this.props.dispatch(getProductsInCategory(this.props.match.params.slug, 20, 0));
         this.props.dispatch(getCountProductCategory(this.props.match.params.slug));
      }
   }

   componentWillUnmount() {
      /* --------------THIS LOGIC IS NO MORE IN USE----------------------
      *  if this.props.products.list[0].category name not equal
      *  to this.props.match.params.slug I should dispatch clearProducts
      *  so that next time componentDidMount will get data from DB
      */
   }


   // instead if UNSAFE_componentWillReceiveProps(nextProps, nextContext):
   static getDerivedStateFromProps(nextProps, prevState) {

      if (nextProps.match.params.slug !== prevState.slug) {

         nextProps.products.loading = true;
         nextProps.dispatch(getProductsInCategory(nextProps.match.params.slug, 20, 0));
         nextProps.dispatch(getCountProductCategory(nextProps.match.params.slug));

         return ({slug: nextProps.match.params.slug})

         //return ({slug: nextProps.match.params.slug, list: nextProps.products.list}) // <- this is setState equivalent
      }

      return null

   }

   renderWarning = () => {
      let count = this.props.products.list.length;

      return this.state.flag && this.count === count ?
          <div
              className={`alert ${this.state.flag ? 'alert-animation' : 'alert-animation-display'} alert-info`}
              role="alert">
             Больше продуктов нет
             <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
             </button>
          </div>
          : null
   };

   loadMore = () => {
      let count = this.props.products.list.length;
      this.props.dispatch(getProductsInCategory(this.state.slug, 10, count, this.props.products.list));

      if (this.count) {
         if (count === this.count) {
            this.setState({
               flag: true
            })
         }
      }
   };


   render() {

      if (this.props.products.list && this.props.products.list.length > 0 && !this.props.products.loading) {

         if (this.props.products.count) {
            this.count = this.props.products.count;
         }

         return (
             <div className="col-lg-12">

                <div className="row">
                   <RenderProducts list={this.props.products.list}/>
                </div>

                <div className="row">
                   {this.renderWarning()}
                   {
                      this.count > 20 ?
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
                   <SkeletonUI comp="renderProducts"/>
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

export default withRouter(connect(mapStateToProps)(ProductsList));