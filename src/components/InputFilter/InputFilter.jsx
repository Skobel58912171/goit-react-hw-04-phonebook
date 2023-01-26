import PropTypes from 'prop-types';
import { Label } from './InputFilter.styled';
import { Input } from './InputFilter.styled';

const InputFilter = ({ onChange, value }) => {
  return (
    <>
      <Label>
        Find contacts by name
        <br />
        <Input type="text" onChange={onChange} value={value} />
      </Label>
    </>
  );
};
InputFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default InputFilter;
