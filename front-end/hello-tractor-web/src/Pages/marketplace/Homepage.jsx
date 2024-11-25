import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Hero from '../../components/marketplace/Hero/Hero';
import Listing from '../../components/marketplace/listings/Listing';
import MainLayout from '@/components/layout/MainLayout';
import TopFilter from '@/components/marketplace/Filters/TopFilter';
import Seller from '@/components/marketplace/listings/Sellers';
import TrainedOperators from '@/components/marketplace/listings/TrainedOperators';

const Homepage = () => {
  return (
    <>
      <Navbar />
      <MainLayout>
        <Hero />
        <TopFilter />
        <Listing />
        <Seller />
        <TrainedOperators />
      </MainLayout>
      <Footer />
    </>
  );
};

export default Homepage;
