import React from 'react';
import 'react-responsive-modal/styles.css';
import {Modal} from 'react-responsive-modal';
import {Link} from 'react-router-dom';
import {AiOutlinePlusSquare, AiOutlineMinusSquare} from 'react-icons/ai'
import PriceRefactor from "../PriceRefactor/PriceRefactor";

const ReactModal = ({isOpen, productItem, setOpen}) => {
   // const [open, setOpen] = React.useState(isOpen);

   return (
       <React.Fragment>
          <Modal open={isOpen} onClose={() => setOpen(false)} center>

             <div className="product-modal">
                <img src={productItem.image} alt={productItem.name}/>
                <h4>{productItem.trade_mark} {productItem.name} {productItem.measurement}</h4>
                <p>
                   {productItem.description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero qui quia
                   ratione sed, sint vero!
                </p>
                {/*<p>*/}
                {/*   Цена за 1 ед. {productItem.price} сум*/}
                {/*</p>*/}
                <p className="minimum-buy">
                   Минимальная покупка: {productItem.minimum_quantity}шт x {productItem.price}
                   <br/>
                   <span><PriceRefactor price={productItem.minimum_quantity_price} /> сум</span>
                </p>
                <div className="cart-buttons">
                   <span>Количество:&nbsp;&nbsp;0</span>
                   <div>
                      <button className="btn"><AiOutlineMinusSquare /></button>
                      <button className="btn"><AiOutlinePlusSquare /></button>
                   </div>
                </div>
                <Link className="btn btn-info" to="/cart">Перейти в корзину</Link>
             </div>

          </Modal>
       </React.Fragment>
   )
};

export default ReactModal;