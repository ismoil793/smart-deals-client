import React from 'react';
import {getCategories} from "../../store/actions";
import {FaEye} from "react-icons/fa"
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import Loader from "../../UI/Preloader/loader";
import LoaderDots from "../../UI/Preloader/LoaderDots";


class CategoriesHome extends React.Component {

   componentDidMount() {
      this.props.dispatch(getCategories())
   }

   renderCategoriesHome = (posts) => {

      if (posts.categories && posts.categories.length > 0) {
         return posts.categories.map((item, i) => (
             <div key={i} className="col-md-6 col-lg-3">
                <div className="product">
                   <Link to={`/products/${item.slug}`} className="img-prod">
                      <img className="img-fluid" src={`/images/products/product-${i + 1}.jpg`}
                           alt="Category name"/>
                      <div className="overlay"></div>
                   </Link>
                   <div className="text py-3 px-3 text-center">
                      <h3><a href="#">{item.name}</a></h3>
                      <div className="bottom-area d-flex px-3">
                         <div className="m-auto d-flex">
                            <Link to={`/products/${item.slug}`}
                                  className="add-to-cart d-flex justify-content-center align-items-center text-center">
                               <span>Подробнее <FaEye/></span>
                            </Link>
                         </div>
                      </div>
                   </div>
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
             <li key={i}>
                <Link className={`${active}`} to={`/products/${item.slug}`}>{item.name}</Link>
             </li>
         )
      })
   };

   render() {

      switch (this.props.componentName) {
         case "Home":
            if (this.props.product && this.props.product.categories) {

               return (
                   <div className="main-products">

                      <div className="container">

                         <div className="row d-none">
                            <div className="col-md-6 col-lg-3">
                               <div className="product">
                                  <a href="#" className="img-prod"><img className="img-fluid"
                                                                        src="/images/products/product-1.jpg"
                                                                        alt="Colorlib Template"/>
                                     <span className="status">30%</span>
                                     <div className="overlay"></div>
                                  </a>
                                  <div className="text py-3 px-3 text-center">
                                     <h3><a href="#">Напитки</a></h3>
                                     {/*<div className="d-flex">*/}
                                     {/*   <div className="pricing">*/}
                                     {/*      <p className="price"><span className="mr-2 price-dc">$120.00</span><span*/}
                                     {/*          className="price-sale">$80.00</span></p>*/}
                                     {/*   </div>*/}
                                     {/*</div>*/}
                                     <div className="bottom-area d-flex px-3">
                                        <div className="m-auto d-flex">
                                           <a href="#"
                                              className="add-to-cart d-flex justify-content-center align-items-center text-center">
                                              <span>Подробнее <FaEye/></span>
                                           </a>
                                           {/*<a href="#"*/}
                                           {/*   className="buy-now d-flex justify-content-center align-items-center mx-1">*/}
                                           {/*   <span><FaEye/></span>*/}
                                           {/*</a>*/}

                                           {/*<a href="#" className="heart d-flex justify-content-center align-items-center ">*/}
                                           {/*   <span><i className="ion-ios-heart"></i></span>*/}
                                           {/*</a>*/}
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                               <div className="product">
                                  <a href="#" className="img-prod">
                                     <img className="img-fluid" src="/images/products/product-2.jpg"
                                          alt="Colorlib Template"/>
                                     <div className="overlay"></div>
                                  </a>
                                  <div className="text py-3 px-3 text-center">
                                     <h3><a href="#">Бакалея</a></h3>
                                     <div className="bottom-area d-flex px-3">
                                        <div className="m-auto d-flex">
                                           <a href="#"
                                              className="add-to-cart d-flex justify-content-center align-items-center text-center">
                                              <span>Подробнее <FaEye/></span>
                                           </a>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                               <div className="product">
                                  <a href="#" className="img-prod"><img className="img-fluid"
                                                                        src="/images/products/product-3.jpg"
                                                                        alt="Colorlib Template"/>
                                     <div className="overlay"></div>
                                  </a>
                                  <div className="text py-3 px-3 text-center">
                                     <h3><a href="#">Хозяйственные товары</a></h3>
                                     <div className="bottom-area d-flex px-3">
                                        <div className="m-auto d-flex">
                                           <a href="#"
                                              className="add-to-cart d-flex justify-content-center align-items-center text-center">
                                              <span>Подробнее <FaEye/></span>
                                           </a>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                               <div className="product">
                                  <a href="#" className="img-prod"><img className="img-fluid"
                                                                        src="/images/products/product-4.jpg"
                                                                        alt="Colorlib Template"/>
                                     <div className="overlay"></div>
                                  </a>
                                  <div className="text py-3 px-3 text-center">
                                     <h3><a href="#">Растительные масла</a></h3>
                                     <div className="bottom-area d-flex px-3">
                                        <div className="m-auto d-flex">
                                           <a href="#"
                                              className="add-to-cart d-flex justify-content-center align-items-center text-center">
                                              <span>Подробнее <FaEye/></span>
                                           </a>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                               <div className="product">
                                  <a href="#" className="img-prod"><img className="img-fluid"
                                                                        src="/images/products/product-5.jpg"
                                                                        alt="Colorlib Template"/>
                                     <span className="status">30%</span>
                                     <div className="overlay"></div>
                                  </a>
                                  <div className="text py-3 px-3 text-center">
                                     <h3><a href="#">Молочная продукция</a></h3>
                                     <div className="bottom-area d-flex px-3">
                                        <div className="m-auto d-flex">
                                           <a href="#"
                                              className="add-to-cart d-flex justify-content-center align-items-center text-center">
                                              <span>Подробнее <FaEye/></span>
                                           </a>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                               <div className="product">
                                  <a href="#" className="img-prod"><img className="img-fluid"
                                                                        src="/images/products/product-6.jpg"
                                                                        alt="Colorlib Template"/>
                                     <div className="overlay"></div>
                                  </a>
                                  <div className="text py-3 px-3 text-center">
                                     <h3><a href="#">Макаронные изделия</a></h3>
                                     <div className="bottom-area d-flex px-3">
                                        <div className="m-auto d-flex">
                                           <a href="#"
                                              className="add-to-cart d-flex justify-content-center align-items-center text-center">
                                              <span>Подробнее <FaEye/></span>
                                           </a>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                               <div className="product">
                                  <a href="#" className="img-prod"><img className="img-fluid"
                                                                        src="/images/products/product-7.jpg"
                                                                        alt="Colorlib Template"/>
                                     <div className="overlay"></div>
                                  </a>
                                  <div className="text py-3 px-3 text-center">
                                     <h3><a href="#">Сладости</a></h3>
                                     <div className="bottom-area d-flex px-3">
                                        <div className="m-auto d-flex">
                                           <a href="#"
                                              className="add-to-cart d-flex justify-content-center align-items-center text-center">
                                              <span>Подробнее <FaEye/></span>
                                           </a>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                               <div className="product">
                                  <a href="#" className="img-prod"><img className="img-fluid"
                                                                        src="/images/products/product-8.jpg"
                                                                        alt="Colorlib Template"/>
                                     <div className="overlay"></div>
                                  </a>
                                  <div className="text py-3 px-3 text-center">
                                     <h3><a href="#">Чай / Кофе</a></h3>
                                     <div className="bottom-area d-flex px-3">
                                        <div className="m-auto d-flex">
                                           <a href="#"
                                              className="add-to-cart d-flex justify-content-center align-items-center text-center">
                                              <span>Подробнее <FaEye/></span>
                                           </a>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>
                         </div>


                         <div className="row">
                            {this.renderCategoriesHome(this.props.product)}
                         </div>

                      </div>
                   </div>
               )
            } else {
               return (
                   <Loader/>
               );
            }
         case "Products":
            if (this.props.product && this.props.product.categories) {
               return (
                   <div className="category-products-sidebar">
                      <h4>Выберите категорию</h4>
                      <nav>
                         <ul>
                            {this.renderCategoriesProducts(this.props.product.categories)}
                         </ul>
                      </nav>
                   </div>
               )
            } else {
               return (
                   <LoaderDots/>
               )
            }
         default:
            return null
      }
   }
}

function mapStateToProps(state) {
   return {
      product: state.product_r
   }
}

export default withRouter(connect(mapStateToProps)(CategoriesHome));