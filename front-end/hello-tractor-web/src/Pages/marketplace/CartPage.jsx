import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';




const CartPage = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col-reverse mt-8 mb-8  md:flex-row gap-6">
                <div className='relative hide-scrollbar mt-5 flex flex-col w-full md:w-[60vw] mx-auto  md:h-[60vh] gap-5'>
                    <div className='w-full'>

                        <div className='w-full flex flex-row justify-between items-center mt-3 pb-2'>
                            <div className='none mr-1 md:mr-2 flex flex-row justify-start items-end'>
                                <span className='font-bold text-gray-900 text-xl md:text-3xl'>My cart</span>

                            </div>

                        </div>
                        <div className='flex items-center text-center justify-center'>

                            <div className='items-center justify-center p-24'>
                                <p className='text-xl font-semibold'>Your cart is Empty!</p>
                                <small>Browse our catalogue and discover our best deals!</small>
                                <div className='w-full h-24 pt-1 pb-1 mt-3 '>
                                    <a className='bg-[#05041F] text-white p-4 rounded-md w-full flex flex-row justify-center items-center'>
                                        Start shopping
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>



                </div>




            </div >
            <Footer />

        </>
    )


}


export default CartPage;