import PropTypes from "prop-types";

import { Input } from "@/components/ui/input"

const InputField = ({ item }) => {
  return (
    <div>
      <Input type={item?.fieldType} name={item.name} required={item?.required} />
    </div>
  )
}

InputField.propTypes = {
  item: PropTypes.object.isRequired, 
};

export default InputField