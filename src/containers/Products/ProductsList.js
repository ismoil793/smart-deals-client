import React, {Component} from 'react';
import {
   getCountProductCategory,
   getProductsInCategory,
   clearProductsInCategory, getSearchProducts
} from "../../store/actions/product";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import SkeletonUI from "../../UI/Skeleton/SkeletonUI";
import RenderProducts from "../../UI/RenderProducts/renderProducts";
import LoaderDots from "../../UI/Preloader/LoaderDots";
import InfiniteScroll from 'react-infinite-scroller';


// import CartButton from "../Cart/CartButton";

class ProductsList extends Component {

   constructor(props) {
      super(props);
      this.state = {
         slug: this.props.match.params.slug,
         flag: false
      };
      this.handleScroll = this.handleScroll.bind(this)
   }

   count = 0;

   deviceWidth = () => {
      let width = window.innerWidth;
      return width < 991;
   };

   updateComponent = (slug) => {
      if (slug !== 'search') {
         this.props.dispatch(clearProductsInCategory());
         this.props.dispatch(getProductsInCategory(slug, 16, 0));
         this.props.dispatch(getCountProductCategory(slug));
      }
   };

   componentDidMount() {

      this.setState({
         flag: false
      });

      // if(!this.props.products.list && this.props.match.params.slug !== 'search') {
      //    window.addEventListener('scroll', this.handleScroll, true);
      // }

      this.updateComponent(this.props.match.params.slug)

      // else if (this.props.products.list[0].category.slug !== this.props.match.params.slug) {
      //    this.updateComponent(this.props.match.params.slug)
      // }
   }

   // instead of UNSAFE_componentWillReceiveProps(nextProps, nextContext):
   static getDerivedStateFromProps(nextProps, prevState) {

      if (nextProps.match.params.slug === 'search') {
         return ({slug: nextProps.match.params.slug})
      } else if (nextProps.match.params.slug !== prevState.slug) {

         window.scrollTo(0, 0);

         nextProps.products.loading = true;
         nextProps.dispatch(clearProductsInCategory());
         nextProps.dispatch(getProductsInCategory(nextProps.match.params.slug, 16, 0));
         nextProps.dispatch(getCountProductCategory(nextProps.match.params.slug));

         return ({slug: nextProps.match.params.slug})
      }
      return null
   }

   componentWillUnmount() {
      // window.removeEventListener('scroll', this.handleScroll, false);
      this.props.dispatch(clearProductsInCategory()); // added bcs previous logic caused problems
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
      this.props.dispatch(getProductsInCategory(this.state.slug, 8, count, this.props.products.list));

      if (this.count) {
         if (count === this.count) {
            this.setState({
               flag: true
            })
         }
      }
   };

   handleScroll(e) {
      // const {scrollTop, clientHeight, scrollHeight} = e.currentTarget;
      // if (scrollHeight - scrollTop === clientHeight) {
      //    let count = this.props.products.list.length;
      //    if (this.count) {
      //       if (count === this.count) {
      //          this.setState({
      //             flag: true
      //          })
      //       } else {
      //          this.props.dispatch(getProductsInCategory(this.state.slug, 8, count, this.props.products.list));
      //       }
      //    }
      // }
      if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 1500)) {
         let count = this.props.products.list ? this.props.products.list.length : 0;
         if (this.count && count && !this.state.flag) {
            if (count === this.count) {
               this.setState({
                  flag: true
               })
            } else if (!this.props.products.getting && this.props.match.params.slug !== 'search') {
               this.props.dispatch(getProductsInCategory(this.state.slug, 8, count, this.props.products.list));
            }
         }
      }
   };


   render() {

      if (this.props.products.list && this.props.products.list.length > 0 && !this.props.products.loading) {

         if (this.props.products.count) {
            this.count = this.props.products.count;
         }

         return (
             <div
                 className="col-lg-12 products-list-scroll"
                 style={{
                    marginBottom: this.props.products.getting ? '40%' : '0%'
                 }}
                 // above styles ar necessary for correcting the style bug issue when scrolling
                 // onScroll={e => this.handleScroll(e)}
             >


                {
                   this.state.slug === "search" ?
                       <div className="row render-products-wrap-transition">
                          <RenderProducts {...this.props} list={this.props.products.list}/>
                       </div>
                       :
                       <InfiniteScroll
                           pageStart={0}
                           loadMore={this.handleScroll}
                           hasMore={this.count > this.props.products.list.length}
                           loader={
                              <div className="row position-relative dots-loader-wrap" key={0}>
                                 <LoaderDots/>
                              </div>
                           }
                       >
                          <div className="row">
                             <RenderProducts {...this.props} list={this.props.products.list}/>
                          </div>
                       </InfiniteScroll>
                }


                {/*{*/}
                {/*   this.props.products.list.length !== this.props.products.count*/}
                {/*   && this.props.match.params.slug !== 'search' ?*/}
                {/*       <div className="row position-relative">*/}
                {/*          <LoaderDots/>*/}
                {/*       </div>*/}
                {/*       : null*/}
                {/*}*/}

                {/*<div className="row">*/}
                {/*   {this.renderWarning()}*/}
                {/*{*/}
                {/*   this.count > 16 ?*/}
                {/*       <div className="col-lg-12">*/}
                {/*          <button className="btn btn-info loadmore-btn" onClick={this.loadMore}>*/}
                {/*             Показать больше*/}
                {/*          </button>*/}
                {/*       </div>*/}
                {/*       : null*/}
                {/*}*/}
                {/*</div>*/}
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