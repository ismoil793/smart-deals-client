import React from 'react';
import Skeleton from "react-loading-skeleton";


const SkeletonUI = (props) => {

   const renderProductsSkeleton = () => {
      let skeleton = [];

      for (let i = 0; i < 8; i++) {
         skeleton.push(
             (<div className="col-md-6" key={i}>
                <div className="d-flex">

                   <div className="w-100">
                      <Skeleton circle={false} height={130} width={"90%"}/>
                   </div>

                   <div className="w-100">
                      <Skeleton count={3} height={20}/>
                   </div>

                </div>

             </div>)
         )
      }
      return skeleton;
   };

   const switchCaseSkeleton = (comp) => {
      switch (comp) {
         case('renderProducts'):
            return renderProductsSkeleton();
         case('productDetail'):
            return (<Skeleton count={1} height={20}/>);
         default:
            return null
      }
   };

   return (
       <React.Fragment>
          {switchCaseSkeleton(props.comp)}
       </React.Fragment>
   );
};

export default SkeletonUI;