import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux/index";

const IceCreamContainer = (props) => {
  return (
    <div>
      <h2>Number of Ice-Cream - {props.numOfIceCreams}</h2>
      <button onClick={props.buyCake}>Buy Ice Cream</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => {
      dispatch(buyIceCream());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
