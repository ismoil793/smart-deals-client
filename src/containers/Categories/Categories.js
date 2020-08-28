import React from 'react';
import { getCategories } from "../../store/actions/product";
import { FaShoppingBag, FaSprayCan, FaWineBottle } from "react-icons/fa"
import { GiWaterDrop, GiMilkCarton, GiNoodles, GiCakeSlice, GiCoffeeCup } from "react-icons/gi"
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import Loader from "../../UI/Preloader/loader";
import LoaderDots from "../../UI/Preloader/LoaderDots";
import Skeleton from "react-loading-skeleton";


class Categories extends React.Component {

   icons = [
      <FaWineBottle />,
      <FaShoppingBag />,
      <FaSprayCan />,
      <GiMilkCarton style={{ fontSize: '18px' }} />,
      <GiNoodles style={{ fontSize: '18px' }} />,
      <GiCakeSlice style={{ fontSize: '18px' }} />,
      <GiCoffeeCup style={{ fontSize: '18px' }} />,
      <GiWaterDrop />
   ];

   componentDidMount() {
      this.props.dispatch(getCategories())
   }

   renderCategoriesHome = (posts) => {

      if (posts.categories && posts.categories.length > 0) {
         return posts.categories.map((item, i) => (
            <div key={i} className="col-6 col-md-6 col-lg-3">
               <div className="product">
                  <Link to={`/products/${item.slug}`} className="img-prod">
                     <img className="img-fluid" src={item.image}
                        alt="Category name" />
                  </Link>
                  {/*<div className="text py-3 px-3 text-center">*/}
                  {/*   <h3><Link to={`/products/${item.slug}`}>{item.name}</Link></h3>*/}
                  {/*   <div className="bottom-area d-flex px-3">*/}
                  {/*      <div className="m-auto d-flex">*/}
                  {/*         <Link to={`/products/${item.slug}`}*/}
                  {/*               className="add-to-cart d-flex justify-content-center align-items-center text-center">*/}
                  {/*            <span>Подробнее <FaEye/></span>*/}
                  {/*         </Link>*/}
                  {/*      </div>*/}
                  {/*   </div>*/}
                  {/*</div>*/}
               </div>
            </div>
         ))
      }
   };

   renderCategoriesProducts = (list) => {

      return list.map((item, i) => {

         let active = "";

         if (this.props.match.params.slug === item.slug) {
            active = "active"
         }

         return (
            <li className="col-6 col-md-12" key={i}>
               <Link className={`${active}`} to={`/products/${item.slug}`}>
                  {this.icons[i]}&nbsp;
                   <span>
                     {item.name}
                  </span>
               </Link>
            </li>
         )
      })
   };

   render() {

      switch (this.props.componentName) {
         case "Home":
            if (this.props.product && this.props.product.categories && this.props.product.categories.length > 0) {

               return (
                  <div className="main-products">

                     <div className="container">

                        <div className="row">
                           {this.renderCategoriesHome(this.props.product)}
                        </div>

                     </div>
                  </div>
               )
            } else {
               return (
                  <Loader />
               );
            }
         case "Products":
            if (this.props.product && this.props.product.categories && this.props.product.categories.length > 0) {
               return (
                  <div className="category-products-sidebar">
                     <h4>Выберите категорию</h4>
                     <nav>
                        <ul className="row">
                           {this.renderCategoriesProducts(this.props.product.categories)}
                        </ul>
                     </nav>
                  </div>
               )
            } else {
               return (
                  <div className="category-products-sidebar">
                     <h4>Выберите категорию</h4>
                     <nav>
                        <ul>
                           <Skeleton count={4} height={50} width="100%" />
                        </ul>
                     </nav>
                  </div>
               )
            }
         default:
            return <LoaderDots />
      }
   }
}

function mapStateToProps(state) {
   return {
      product: state.product_r
   }
}

export default withRouter(connect(mapStateToProps)(Categories));