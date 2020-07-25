import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const ReactModal = ({isOpen, productItem, setOpen}) => {
   // const [open, setOpen] = React.useState(isOpen);

   return (
       <React.Fragment>
          <Modal open={isOpen} onClose={() => setOpen(false)} center>

             <div className="product-modal">
                <h2>{productItem.name}</h2>
                <p>
                   {productItem.description}
                </p>
             </div>

          </Modal>
       </React.Fragment>
   )
};

export default ReactModal;