import PropTypes from "prop-types"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const DropdownField = ({ item }) => {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={item.label} />
      </SelectTrigger>
      <SelectContent>
        {item?.options?.map((option, index) => (
          <SelectItem key={index} value={option}>{option}</SelectItem>
        ))}
      </SelectContent>
  </Select>
  )
}

DropdownField.propTypes = {
  item: PropTypes.object.isRequired, 
};

export default DropdownField