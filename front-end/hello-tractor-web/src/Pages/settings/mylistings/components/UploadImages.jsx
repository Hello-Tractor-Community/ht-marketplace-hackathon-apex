
const UploadImages = () => {
  return (
    <div>
      <h2 className="font-medium text-xl my-3">Upload Tractor Images</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
      <label htmlFor="upload-images">
        <div className="border rounded-xl border-dotted border-primary bg-primary-tint-80 p-10 cursor-pointer hover:shadow-md">
          <h2 className="text-xl lg:text-2xl text-center text-secondary">+</h2>
        </div>
      </label>
      <input type="file" multiple={true} id="upload-images" className="opacity-0" />
    </div>
    </div>
  )
}

export default UploadImages