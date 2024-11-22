import Navbar from "@/components/Navbar";
import listingDetails from "@/lib/tractorDetails.json";
import features from "@/lib/features.json";
import InputField from "./components/InputField";
import DropdownField from "./components/DropdownField";
import TextAreaField from "./components/TextAreaField";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import UploadImages from "./components/UploadImages";
import MainLayout from "@/components/layout/MainLayout";

const AddListing = () => {
  return (
    <div>
      <Navbar />
      <MainLayout>
        <h2 className="font-bold text-4xl mb-8">Add New Listing</h2>
        <form action="" className="p-10 mt-10 border rounded-xl shadow-lg">
          <section className="mb-10">
            <h3 className="font-medium text-xl mb-6">Tractor Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {listingDetails.tractorDetails.map((item, index) => (
                <div key={index}>
                  <label htmlFor={item?.id} className="block text-sm mb-2">
                    {item?.label}
                  </label>
                  {/* Dynamically Render Fields Based on Type */}
                  {item.fieldType === "text" || item.fieldType === "number" ? (
                    <InputField item={item} />
                  ) : item.fieldType === "dropdown" ? (
                    <DropdownField item={item} />
                  ) : item.fieldType === "textarea" ? (
                    <TextAreaField item={item} />
                  ) : null}
                </div>
              ))}
            </div>
          </section>

          {/* Features Section */}
          <Separator className="my-8" />
          <section className="mb-10">
            <h3 className="font-medium text-xl mb-6">Features</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {features.features.map((item, index) => (
                <div className="flex gap-2 items-center" key={index}>
                  <Checkbox id={`feature-${index}`} />
                  <label htmlFor={`feature-${index}`} className="text-sm">
                    {item.label}
                  </label>
                </div>
              ))}
            </div>
          </section>

          {/* Tractor Images Section */}
          <Separator className="my-8" />
          <section className="mb-10">
            <UploadImages />
          </section>

          {/* Submit Button */}
          <div className="mt-8 flex justify-end">
            <Button variant="primary">Submit</Button>
          </div>
        </form>
      </MainLayout>
    </div>
  );
};

export default AddListing;