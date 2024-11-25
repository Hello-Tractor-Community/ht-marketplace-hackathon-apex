import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MainLayout from '@/components/layout/MainLayout';
import TrainedOperators from '@/components/marketplace/listings/TrainedOperators';
import TractorOperatorsHero from '@/components/marketplace/listings/TractorOperatorsHero';
import TractorOperatorTopFilter from '@/components/marketplace/Filters/TractorOperatorTopFilter';
// import TractorOperatorsSideFilter from '@/components/marketplace/Filters/TractorOperatorsSideFilter';



const TractorOperators = () => {
    return (
        <>
            <Navbar />
            <TractorOperatorsHero />
            <MainLayout>
                <TractorOperatorTopFilter />
                {/* <TractorOperatorsSideFilter /> */}
                <TrainedOperators />
            </MainLayout>
            <Footer />
        </>
    );
};

export default TractorOperators;
