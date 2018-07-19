import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

function NavButton(props) {
  const { buttonName, handleClick } = props;
  return (
    <Button onClick={handleClick} variant="contained" color="primary">
      {buttonName}
    </Button>
  );
}

NavButton.propTypes = {
  buttonName: PropTypes.string,
  handleClick: PropTypes.func,
};

NavButton.defaultProps = {
  buttonName: '',
  handleClick: null,
};

export default NavButton;
