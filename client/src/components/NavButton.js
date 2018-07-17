import React from 'react';
import Button from '@material-ui/core/Button';


function NavButton(props) {
  return (
    <Button onClick={props.handleClick} variant="contained" color="primary">
      {props.buttonName}
    </Button>
  );
}

export default NavButton;
