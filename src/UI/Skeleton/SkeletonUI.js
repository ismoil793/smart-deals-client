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

   const renderproductDetailSkeleton = () => {
      return (
          <div className="container">
             <div className="row">

                <div className="col-md-4">
                   <Skeleton width="100%" count={1} height={350}/>
                </div>

                <div className="col-md-1"></div>

                <div className="col-md-7">
                   <Skeleton className="d-block mb-2" width="50%" count={5} height={30}/>
                </div>

             </div>
          </div>
      )
   };

   const switchCaseSkeleton = (comp) => {
      switch (comp) {
         case('renderProducts'):
            return renderProductsSkeleton();
         case('productDetail'):
            return renderproductDetailSkeleton();
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