import React from 'react';
import Categories from "../Categories/Categories";
import Search from "./Search";
import {withRouter} from "react-router-dom";
import RenderProducts from "./ProductsList";
import {Helmet} from "react-helmet";


class Products extends React.Component {

   componentDidMount() {
      window.scrollTo(0, 0)
   }

   render() {

      return (
          <section className="products-container">

             <Helmet>
                <title>Продукты и Товары на любой вкус</title>
                <meta name="description" content="Продукты по категориям" />
             </Helmet>

             <div className="container container-changed">
                <div className="row">
                   <div className="col-lg-3 col-md-5">
                      <Categories componentName={"Products"}/>
                   </div>

                   <div className="col-lg-9 col-md-7">

                      <div className="row">
                         <div className="col-12">
                            <Search/>
                         </div>
                      </div>


                      <div className="row">
                         <RenderProducts/>
                      </div>


                   </div>
                </div>
             </div>
          </section>
      )
   }
}


export default withRouter(Products);