import PropTypes from "prop-types";

import { Input } from "@/components/ui/input";

const InputField = ({ name, item, register, error }) => {
  return (
    <div>
      <Input
        {...register(name, {
          required: item.required ? `${item.label} is required` : false,
          valueAsNumber: item.fieldType === "number",
        })}
        type={item?.fieldType}
        name={item.name}
      />
      {error && (
        <p className="text-destructive text-sm mt-1">{error.message}</p>
      )}
    </div>
  );
};

InputField.propTypes = {
  item: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  error: PropTypes.object,
};

export default InputField;
