import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ListingDetail from "@/components/marketplace/listings/ListingDetail";
import { getTractor } from "@/api/tractor";

const ListingDetails = () => {
  const { id } = useParams(); // Get tractor ID from the URL
  const [tractor, setTractor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTractorDetails = async () => {
      try {
        const response = await getTractor(id);
        if (!response) {
          throw new Error("Failed to fetch tractor details");
        }
        setTractor(response);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTractorDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading tractor details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          {tractor ? (
            <ListingDetail tractor={tractor} />
          ) : (
            <p>Tractor not found.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ListingDetails;
