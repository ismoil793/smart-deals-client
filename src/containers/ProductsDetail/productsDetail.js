import React, {Component} from 'react';
import {connect} from "react-redux"
import {clearProduct, getProduct} from "../../store/actions/product";
import SkeletonUI from "../../UI/Skeleton/SkeletonUI";
import {Link} from "react-router-dom";
import ReactImageMagnify from 'react-image-magnify';

class ProductsDetail extends Component {

   componentDidMount() {
      this.props.dispatch(getProduct(this.props.match.params.slug, this.props.match.params.id))
   }

   componentWillUnmount() {
      this.props.dispatch(clearProduct())
   }

   render() {

      if (this.props.product && this.props.product.oneProduct) {
         let product = this.props.product.oneProduct;
         return (
             <section className="product-detail-page">
                <div className="container">
                   <div className="row">

                      <div className="col-md-4">
                         <div className="product-detail-left">
                            <div className="breadcrumbs b">
                               <span>Категория:</span> <Link to={`/products/${product.category.slug}`}>{product.category.name}</Link>
                            </div>
                            <ReactImageMagnify {...{
                               smallImage: {
                                  alt: `${product.name}`,
                                  isFluidWidth: true,
                                  src: `http://164.90.216.97${product.image}`,
                               },
                               largeImage: {
                                  src: `http://164.90.216.97${product.image}`,
                                  width: 1200,
                                  height: 1800
                               },
                               enlargedImageContainerDimensions: {
                                  width: '200%',
                                  height: '100%'
                               },
                               imageClassName: 'img-prod',
                               isHintEnabled: true,
                               hintTextMouse: 'Наведите, чтобы увеличить',
                               shouldHideHintAfterFirstActivation: false
                            }} />
                         </div>
                      </div>

                      <div className="col-md-1"></div>

                      <div className="col-md-7">
                         <div className="product-detail-right">
                            <h5>
                               Торговая марка: <span>"{product.trade_mark}"</span>
                            </h5>
                            <p>
                               Описание к продукту: <span>{product.description}</span>
                            </p>
                            <p>
                               Продукт: <span>{product.name}</span>
                            </p>
                            <p>
                               Цена: <span>{product.price} сум</span>
                            </p>
                            <button>Добавить в корзину</button>
                         </div>
                      </div>

                   </div>
                </div>
             </section>
         );
      } else {
         return <SkeletonUI comp="productDetail"/>
      }

   }
}

function mapStateToProps(state) {
   return {
      product: state.product_r
   }
}

export default connect(mapStateToProps)(ProductsDetail);