import React from 'react';
import CategoriesProducts from "./CategoriesProducts/CategoriesProducts";
import Search from "./Search";
import {withRouter} from "react-router-dom";
import RenderProducts from "./RenderProducts/renderProducts";


class Products extends React.Component {

   componentDidMount() {
      window.scrollTo(0, 0)
   }

   render() {

      return (
          <section className="products-container">

             <div className="container">
                <div className="row">
                   <div className="col-md-3">
                      <CategoriesProducts/>
                   </div>

                   <div className="col-md-9">

                      <div className="row">
                         <div className="col-12">
                            <Search/>
                         </div>
                      </div>


                      <div className="row">
                         <RenderProducts />
                      </div>


                   </div>
                </div>
             </div>
          </section>
      )
   }
}


export default withRouter(Products);