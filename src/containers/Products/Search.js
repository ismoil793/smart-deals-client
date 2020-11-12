import React, { Component } from 'react';
import { FaSearch } from "react-icons/fa";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
import { clearProductsInCategory, getSearchProducts } from "../../store/actions/product";

class Search extends Component {

   state = {
      search: ''
   };

   componentDidMount() {
      if (this.props.match.params.slug === 'search') {
         if (this.props.location.search) {
            let search = this.props.location.search.replace("?", "");
            this.props.dispatch(getSearchProducts(search));
         }
      }
   }

   componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll, false);
      this.props.dispatch(clearProductsInCategory())
   }

   submitForm = (e) => {
      e.preventDefault();
      if (this.state.search !== '' && this.state.search.length > 0) {
         this.props.products.loading = true;
         this.props.dispatch(getSearchProducts(this.state.search));
         this.props.history.push(`/products/search?${this.state.search}`)
      }
   };

   searchHandler = (e) => {
      this.setState({
         search: e.target.value
      })
   };

   render() {

      return (
         <div className="products-search">
            <h4>Поиск</h4>
            <form className="search-form" onSubmit={this.submitForm}>

               <input
                  onChange={this.searchHandler}
                  type="text"
                  placeholder="Название товара или бренда..."
                  value={this.state.search}
               />
               <button type="submit"><FaSearch /></button>

            </form>
         </div>
      );
   }
}

function mapStateToProps(state) {
   return {
      products: state.product_r
   }
}

export default withRouter(connect(mapStateToProps)(Search));