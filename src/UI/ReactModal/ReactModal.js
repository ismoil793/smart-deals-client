import React from 'react';
import 'react-responsive-modal/styles.css';
import {Modal} from 'react-responsive-modal';
import {Link} from 'react-router-dom';
import {AiOutlinePlusSquare, AiOutlineMinusSquare} from 'react-icons/ai'

const ReactModal = ({isOpen, productItem, setOpen}) => {
   // const [open, setOpen] = React.useState(isOpen);

   return (
       <React.Fragment>
          <Modal open={isOpen} onClose={() => setOpen(false)} center>

             <div className="product-modal">
                <img src={productItem.image} alt={productItem.name}/>
                <h4>{productItem.trade_mark} {productItem.name}</h4>
                <p>
                   {productItem.description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero qui quia
                   ratione sed, sint vero!
                </p>
                <p>
                   Цена за 1 ед. {productItem.price} сум
                </p>
                <p>
                   Минимальная покупка: 1л x 12
                   <br/>{productItem.price * 12} сум
                </p>
                <div className="cart-buttons">
                   <span>Количество:&nbsp;&nbsp;1</span>
                   <div>
                      <button className="btn"><AiOutlineMinusSquare /></button>
                      <button className="btn"><AiOutlinePlusSquare /></button>
                   </div>
                </div>
                <p>
                   Итого:&nbsp;&nbsp;{productItem.price * 12} сум
                </p>
                <Link className="btn btn-info" to="/cart">Перейти в корзину</Link>
             </div>

          </Modal>
       </React.Fragment>
   )
};

export default ReactModal;