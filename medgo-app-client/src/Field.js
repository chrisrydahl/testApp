// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import './styles/Field.css';

// Stateless component / Functional component
const Field = (props) => (
    <div>
      <TextField
          className="TextField"
          label={props.label}
          type={props.type}
          value={props.value}
          onChange={props.onChange}
          margin="normal"
          variant="outlined"
          helperText={props.error}
      />
  </div>
);

// PropTypes is a way to ensure we are expecting
// certain props that will enable the component to
// function properly.
Field.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  textarea: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
};

Field.defaultProps = {
  textarea: false,
    type: "text",
};

export default Field;
