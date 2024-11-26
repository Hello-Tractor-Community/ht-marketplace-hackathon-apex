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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { toast } from "react-toastify";
import IconField from "./components/IconField";
import { useImageContext } from "@/context/ImageContext/useImageContext";
import { supabase } from "@/config/supabase/client";
import { createTractor } from "@/api/tractor";
import { useNavigate } from "react-router-dom";
import useSellerContext from "@/context/SellerContext/useSellerContext";
import { useState } from "react";

const capitalizeSentence = (message) => {
  if (!message) return "";
  return message.charAt(0).toUpperCase() + message.slice(1).toLowerCase();
};

const generateZodSchema = (details, featuresList) => {
  const detailsSchema = details.reduce((schema, field) => {
    if (field.required) {
      schema[field.name] =
        field.fieldType === "number"
          ? z
              .number({
                invalid_type_error: capitalizeSentence(
                  `${field.label} must be a number.`
                ),
              })
              .min(0, {
                message: capitalizeSentence(
                  `${field.label} must be a positive number.`
                ),
              })
          : field.fieldType === "dropdown"
          ? z.enum(field.options, {
              required_error: capitalizeSentence(`${field.label} is required.`),
            })
          : z.string().min(1, {
              message: capitalizeSentence(`${field.label} is required.`),
            });
    } else {
      schema[field.name] =
        field.fieldType === "number"
          ? z.number().optional()
          : z.string().optional();
    }
    return schema;
  }, {});

  const featuresSchema = featuresList.reduce((schema, feature) => {
    schema[feature.name] = z.boolean().optional();
    return schema;
  }, {});

  return z.object({
    ...detailsSchema,
    features: z.object(featuresSchema),
  });
};

const FormSchema = generateZodSchema(
  listingDetails.tractorDetails,
  features.features
);

const AddListing = () => {
  const { addImageUrl } = useImageContext();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const { sellerProfile } = useSellerContext();
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      ...Object.fromEntries(
        listingDetails.tractorDetails.map((field) => [
          field.name,
          field.fieldType === "number" ? 0 : "",
        ])
      ),
      features: Object.fromEntries(
        features.features.map((feature) => [feature.name, false])
      ),
    },
  });

  const onSubmit = async (formData) => {
    try {
      const uploadedImageUrls = [];

      for (const file of selectedFiles) {
        const sanitizedFileName = file.name.replace(/\s+/g, "-").toLowerCase();
        const filePath = `public/${sanitizedFileName}`;

        // eslint-disable-next-line no-unused-vars
        const { data, error } = await supabase.storage
          .from("tractor-images")
          .upload(filePath, file);

        if (error)
          throw new Error(`Failed to upload ${file.name}: ${error.message}`);

        const publicUrl = supabase.storage
          .from("tractor-images")
          .getPublicUrl(filePath).data.publicUrl;

        if (publicUrl) {
          uploadedImageUrls.push({
            url: publicUrl,
            alt: sanitizedFileName,
          });
        }
      }

      uploadedImageUrls.forEach((url) => addImageUrl(url));

      const { color, ...otherDetails } = formData;
      const apiPayload = {
        ...otherDetails,
        images: uploadedImageUrls,
        seller: sellerProfile.id,
        specifications: {
          color: color,
        },
      };

      const createdTractor = await createTractor(apiPayload);
      console.log("Created tractor:", createdTractor);

      toast.success("Form submitted successfully!");
      return navigate("/seller-dashboard", { replace: true });
    } catch (error) {
      console.error("Error during upload or API call:", error);
      toast.error("Failed to upload images or submit data.");
    }
  };

  return (
    <div>
      <Navbar />
      <MainLayout>
        <h2 className="font-bold text-4xl">Add New Listing</h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="p-10 mt-10 border rounded-xl"
          >
            {/* Tractor Details */}
            <div>
              <h2 className="font-medium text-xl mb-6">Tractor Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {listingDetails.tractorDetails.map((item, index) => (
                  <div key={index}>
                    <label
                      htmlFor={item.name}
                      className="text-sm flex gap-2 items-center mb-1"
                    >
                      <IconField icon={item.icon} />
                      {item.label}
                      {item.required && (
                        <span className="text-primary-sunsetBlaze text-md">
                          *
                        </span>
                      )}
                    </label>
                    {item.fieldType === "text" ||
                    item.fieldType === "number" ? (
                      <InputField
                        name={item.name}
                        item={item}
                        register={form.register}
                        error={form.formState.errors[item.name]}
                      />
                    ) : item.fieldType === "dropdown" ? (
                      <DropdownField
                        name={item.name}
                        item={item}
                        register={form.register}
                        form={form}
                        error={form.formState.errors[item.name]}
                      />
                    ) : item.fieldType === "textarea" ? (
                      <TextAreaField
                        name={item.name}
                        item={item}
                        register={form.register}
                        error={form.formState.errors[item.name]}
                      />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
            <Separator className="my-6" />
            {/* Features List */}
            <div>
              <h2 className="font-medium text-xl my-6">Features</h2>
              <div className="grid grid-cols-2 md:grid-cols-3">
                {features.features.map((item, index) => (
                  <FormField
                    key={index}
                    control={form.control}
                    name={`features.${item.name}`}
                    render={({ field }) => (
                      <FormItem className="flex flex-row space-x-3 space-y-0 my-1 items-center text-center">
                        <FormControl>
                          <Checkbox
                            className="items-center text-center"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel className="text-sm" htmlFor={item.name}>
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                ))}
              </div>
            </div>
            {/* Tractor Images */}
            <Separator className="my-6" />
            <UploadImages
              setSelectedFiles={setSelectedFiles}
              selectedFiles={selectedFiles}
            />
            <div className="mt-10 flex justify-end">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      </MainLayout>
    </div>
  );
};

export default AddListing;
