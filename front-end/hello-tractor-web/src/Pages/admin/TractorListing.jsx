import { getTractor, getTractors, updateTractor } from "@/api/tractor";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const TractorListing = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchTractors = async () => {
      try {
        const response = await getTractors({ is_active: true });
        const tractorsResults = response.results;

        const tractorsWithDetails = await Promise.all(
          tractorsResults.map(async (tractor) => {
            try {
              const tractorDetails = await getTractor(tractor.id);
              return { ...tractor, tractorDetails };
              // eslint-disable-next-line no-unused-vars
            } catch (error) {
              toast.error(`Failed to fetch user details for ${tractor.id}`);
              return { ...tractor, tractorDetails: null };
            }
          })
        );

        setListings(tractorsWithDetails);
      } catch (err) {
        console.log(err);
        toast.error("Failed to load listings.");
      }
    };

    fetchTractors();
  }, []);

  console.log(listings);

  const handleApproval = async (id, approvalStatus) => {
    try {
      // Optimistically update the UI
      const updatedTractors = listings.map((tractor) =>
        tractor.id === id
          ? {
              ...tractor,
              tractorDetails: {
                ...tractor.tractorDetails,
                is_approved: approvalStatus,
              },
            }
          : tractor
      );
      setListings(updatedTractors);

      // Update the backend
      await updateTractor(id, { is_approved: approvalStatus });

      toast.success(
        `Tractor status ${approvalStatus ? "approved" : "revoked"} successfully`
      );
    } catch (error) {
      console.error("Failed to update tractor approval status:", error);

      // Revert UI update in case of error
      const revertedTractors = listings.map((tractor) =>
        tractor.id === id
          ? {
              ...tractor,
              tractorDetails: {
                ...tractor.tractorDetails,
                is_approved: !approvalStatus,
              },
            }
          : tractor
      );
      setListings(revertedTractors);

      toast.error(
        "Failed to update tractor approval status. Please try again."
      );
    }
  };

  return (
    <div className="px-6 lg:px-12 mb-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-semibold text-3xl md:text-4xl text-gray-800">
          Tractor Listing
        </h2>
      </div>
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="border rounded-lg overflow-hidden dark:border-neutral-700">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                <thead className="bg-gray-200 dark:bg-neutral-700">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase "
                    >
                      Name
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase "
                    >
                      Address
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase "
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase "
                    ></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  {listings.map((listing, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                        {listing.tractorDetails?.name}
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                        {listing.tractorDetails?.location || "Not available"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                        Ksh. {listing.tractorDetails?.price}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <Button
                          onClick={() =>
                            handleApproval(
                              listing.tractorDetails?.id,
                              !listing.tractorDetails?.is_approved // Toggle the current approval state
                            )
                          }
                          className="py-2 px-3 mr-2 font-medium duration-150 rounded-lg"
                        >
                          {listing.tractorDetails?.is_approved
                            ? "Revoke"
                            : "Approve"}
                        </Button>
                        <Link
                          v-if="hasSpecificRole('View Customer')"
                          class="py-2 px-3 font-medium text-blue-600 hover:text-blue-500 border border-blue-500 duration-150 hover:bg-gray-50 rounded-lg"
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TractorListing;
