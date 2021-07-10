import React, { Fragment, useEffect, useState } from "react";
const Categories = (props) => {
  const [dealDetails, setDealDetails] = useState(null);
  useEffect(() => {
    // console.log("in categoty ------------->", props.dealDetails);
    if (props.dealDetails != null) {
      setDealDetails(props.dealDetails);
    }
  }, [props.dealDetails]);
  return (
    <Fragment>
      {dealDetails != null && (
        <Fragment>
          <img src={dealDetails.user.avatar} alt="img"></img>
          <h6>{dealDetails.user.name}</h6>
          <p>Title :{" " + dealDetails.title}</p>

          <p>Price :{" " + dealDetails.price}</p>
          <p>{dealDetails.description}</p>
          {dealDetails.media.map((img, index) => {
                      return (
                        <img key={"img" + index} src={img} alt="img" style={{ width: "25%" }} />
                      );
                    })}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Categories;
