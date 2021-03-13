import React from 'react';
import Radio from '@material-ui/core/Radio';
import PropTypes from 'prop-types';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


const RadioButtonsGroup = ({value, onChange})  => {

  return (
    <FormControl component="fieldset">
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={onChange}>
        <FormControlLabel value="Talent" control={<Radio />} label="Saya Seorang Talent" />
        <FormControlLabel value="Pencari Talent" control={<Radio />} label="Saya Seorang Pencari Talent" />
      </RadioGroup>
    </FormControl>
  );
}

RadioButtonsGroup.defaultProps = {
  value: '',
  onChange: () => {},
}

RadioButtonsGroup.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string
}

export default RadioButtonsGroup


