import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <Label htmlFor="filterId">
      <Input
        name="filter"
        value={value}
        onChange={onChange}
        id="filterId"
        type="text"
      />
      Find contacts by name
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
