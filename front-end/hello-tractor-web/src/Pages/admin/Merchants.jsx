import { getSellers, updateSeller } from "@/api/seller"; // Ensure getSeller is imported
import { getUser } from "@/api/user";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Merchants = () => {
  const [sellers, setSellers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSellers = async () => {
      try {
        const response = await getSellers();
        const sellerResults = response.results;

        const sellersWithDetails = await Promise.all(
          sellerResults.map(async (seller) => {
            try {
              const userDetails = await getUser(seller.user);
              return { ...seller, userDetails };
              // eslint-disable-next-line no-unused-vars
            } catch (error) {
              toast.error(`Failed to fetch user details for ${seller.id}`);
              return { ...seller, userDetails: null };
            }
          })
        );

        setSellers(sellersWithDetails);
        // eslint-disable-next-line no-unused-vars
      } catch (error) {
        toast.error("Failed to fetch sellers");
      } finally {
        setLoading(false);
      }
    };

    fetchSellers();
  }, []);

  const handleApproval = async (id, approvalStatus) => {
    try {
      const updatedSellers = sellers.map((seller) =>
        seller.id === id ? { ...seller, is_approved: approvalStatus } : seller
      );
      setSellers(updatedSellers);

      // Update the seller in the backend
      const updatedSeller = await updateSeller(id, {
        is_approved: approvalStatus,
      });

      updatedSeller
        ? toast.success(
            `Seller status ${
              approvalStatus ? "revoked" : "approved"
            } successfully`
          )
        : null;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-6 lg:px-12 mb-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-semibold text-3xl md:text-4xl text-gray-800">
          Dealers
        </h2>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="border rounded-lg overflow-hidden dark:border-neutral-700">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                  <thead className="bg-gray-200 dark:bg-neutral-700">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                      ></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                    {sellers.map((seller) => (
                      <tr key={seller.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                          {seller.userDetails?.name || "N/A"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                          {seller.userDetails?.email || "N/A"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                          {seller.is_approved ? "Approved" : "Pending"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                          <Button
                            onClick={() =>
                              handleApproval(seller.id, !seller.is_approved)
                            }
                            className="py-2 px-3 mr-2 font-medium duration-150 rounded-lg"
                          >
                            {seller.is_approved ? "Revoke" : "Approve"}
                          </Button>
                          <Link className="py-2 px-3 font-medium text-blue-600 hover:text-blue-500 border border-blue-500 duration-150 hover:bg-gray-50 rounded-lg">
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
      )}
    </div>
  );
};

export default Merchants;
