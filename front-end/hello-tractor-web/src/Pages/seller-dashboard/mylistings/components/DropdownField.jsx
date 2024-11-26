import PropTypes from "prop-types";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const DropdownField = ({ name, item, register, error, form }) => {
  const handleValueChange = (value) => {
    form.setValue(name, value); // Update the value in the form state
    if (value) {
      form.clearErrors(name); // Clear the error if a valid value is selected
    }
  };

  return (
    <div>
      <Select
        {...register(name, {
          required: item.required ? `${item.label} is required` : false,
          validate: (value) =>
            value && value !== "placeholder"
              ? true
              : `${item.label} is required`,
        })}
        onValueChange={handleValueChange} // Custom value change handler
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder={`Select ${item.label}`} />
        </SelectTrigger>
        <SelectContent>
          {/* Placeholder value */}
          <SelectItem value="placeholder" disabled>
            Select {item.label}
          </SelectItem>
          {/* Options */}
          {item.options.map((option, index) => (
            <SelectItem key={index} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && (
        <p className="text-destructive text-sm mt-1">{`Select one ${item.label.toLowerCase()} option`}</p>
      )}
    </div>
  );
};

DropdownField.propTypes = {
  item: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  error: PropTypes.object,
};

export default DropdownField;
