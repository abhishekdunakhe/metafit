const Hero =() =>{
    return(
        <section className="container-fluid mx-auto">

            <div className="lg:px-36 text-white bg-black lg:h-[85vh] h-[80vh] px-6">

                <h1 className="lg:text-5xl font-bold lg:pt-40 pt-32 text-3xl">Find a Perfect Gym<br/> Where you'll love to exercise</h1>

                <div className="rounded-lg lg:mt-20 mt-10">

                    <div className="relative flex items-center bg-white rounded-lg md:w-[529px] lg:w-[572px]">
                        <span className="bg-white text-xl px-3 lg:py-2">
                            <i className="fas fa-dumbbell text-96 text-quaternary"></i>
                        </span>
                        <input type="text" placeholder="   Search Gym in your Locality" className="input-one text-black text-sm lg:text-lg"/>
                        <span className="absolute lg:right-8 right-3">
                            <i className="fas fa-search text-quaternary lg:text-2xl"></i>
                        </span>
                    </div>

                    <div className="md:flex md:items-center mt-5 text-end">
                        <div className="relative rounded-lg flex items-center border md:w-[572px] bg-white text-black mb-10 md:mb-0">
                            <span className="bg-white text-xl px-3 lg:py-2">
                                <i className="fas fa-dumbbell text-96 text-quaternary"></i>
                            </span>
                            <select className="input-one lg:text-lg text-sm text-quaternary">
                                <option className="lg:p-4">&nbsp;&nbsp;&nbsp;Gym Type One</option>
                                <option className="lg:p-4">&nbsp;&nbsp;&nbsp;Gym Type Two</option>
                                <option className="lg:p-4">&nbsp;&nbsp;&nbsp;Gym Type Three</option>
                            </select>
                            <span className="absolute lg:right-8 right-3">
                                <i className="fas fa-chevron-down text-quaternary lg:text-2xl"></i>
                            </span>
                        </div>
                        <button className="btn-primary md:ms-4">Explore</button>
                    </div>

                </div>

            </div>  

        </section>
    )
}

export default Hero;