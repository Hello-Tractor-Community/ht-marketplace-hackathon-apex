import { Textarea } from "@/components/ui/textarea";
import PropTypes from "prop-types"

const TextAreaField = ({ item }) => {
  return (
    <div>
      <Textarea name={item.name} />
    </div>
  )
}

TextAreaField.propTypes = {
  item: PropTypes.object.isRequired, 
};

export default TextAreaField