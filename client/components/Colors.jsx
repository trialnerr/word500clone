import React from 'react';
import * as actions from '../actions/actions';
import { useDispatch, useSelector } from 'react-redux';


function Colors() {
  const dispatch = useDispatch();
  const currentColor = useSelector((state) => state.game.currentColor);

  function colorChangeHandler(color) {
    dispatch(actions.changeColorActionCreator(color));
  }

  function ColorButton({ color }) {
    return (
      <button
        onClick={() => colorChangeHandler(color)}
        className={`colorBtn ${color}`}
      ></button>
    );
  }

  return (
    <div className="colorsContainer">
      <div>
        <h3 className = {`${currentColor}`}>ColorPicker</h3>
        <div className="colorsWrapper">
          <ColorButton color="green" />
          <ColorButton color="yellow" />
          <ColorButton color="red" />
          <ColorButton color="white" />
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Colors;
