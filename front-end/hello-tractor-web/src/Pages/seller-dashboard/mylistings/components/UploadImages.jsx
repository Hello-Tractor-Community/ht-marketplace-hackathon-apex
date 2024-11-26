import { useImageContext } from "@/context/ImageContext/useImageContext";
import { IoMdCloseCircle } from "react-icons/io";
import PropTypes from "prop-types";

const UploadImages = ({ setSelectedFiles, selectedFiles }) => {
  // eslint-disable-next-line no-unused-vars
  const { addImageUrl, removeImageUrl, imageUrls } = useImageContext();

  const onFileSelected = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles((prev) => [...prev, ...files]);
  };

  const onImageRemove = (imageUrl) => {
    const result = selectedFiles.filter((item) => item !== imageUrl);
    setSelectedFiles(result);
  };

  return (
    <div>
      <h2 className="font-medium text-xl my-3">Upload Tractor Images</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {selectedFiles.map((file, index) => {
          const fileUrl = URL.createObjectURL(file);
          return (
            <div key={index} className="relative">
              <IoMdCloseCircle
                className="absolute m-2 text-xl text-destructive cursor-pointer"
                onClick={() => onImageRemove(file)}
              />
              <img
                src={fileUrl}
                alt={file.name}
                className="w-full h-[130px] object-cover rounded-xl"
              />
            </div>
          );
        })}
        <label htmlFor="upload-images">
          <div className="flex border rounded-xl items-center justify-center h-[130px] border-dotted border-primary bg-primary-tint-80 p-10 cursor-pointer hover:shadow-md">
            <h2 className="text-xl lg:text-2xl text-center text-secondary">
              +
            </h2>
          </div>
        </label>
        <input
          type="file"
          multiple={true}
          id="upload-images"
          className="opacity-0"
          onChange={onFileSelected}
        />
      </div>
    </div>
  );
};

UploadImages.propTypes = {
  setSelectedFiles: PropTypes.func.isRequired,
  selectedFiles: PropTypes.array.isRequired,
};

export default UploadImages;
