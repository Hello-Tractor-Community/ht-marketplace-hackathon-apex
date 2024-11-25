import { Textarea } from "@/components/ui/textarea";
import PropTypes from "prop-types";

const TextAreaField = ({ name, item, register, error }) => {
  return (
    <div>
      <Textarea
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

TextAreaField.propTypes = {
  item: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  error: PropTypes.object,
};

export default TextAreaField;
