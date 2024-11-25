const TractorOperatorsHero = () => {
    return (
        <div className="relative bg-cover bg-center  mt-0 w-full h-[150px] sm:h-[200px] lg:h-[200px]"
            style={{ backgroundImage: "url('img/7e711154cd7e74defd3269587ffce3a7.png')" }}>
            {/* Overlay and Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 ">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                    Tractor Operators
                </h1>
                <p className="text-sm sm:text-lg mt-2 text-white text-center max-w-[80%]">
                    Find experienced tractor operators ready to support your agricultural needs.
                </p>
            </div>
        </div>
    );
};

export default TractorOperatorsHero;
