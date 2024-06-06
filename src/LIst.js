const List =({ listdata }) => {
    console.log(listdata.layout);
  
    return(
        <section className="container-fluid mx-auto">

            <div className={`md:flex lg:px-36 py-12 md:justify-between md:items-center px-8 bg-[${listdata.bgColor}] gap-10`}>

                <div className={`md:w-1/2 pb-12 md:pb-0 ${listdata.layout==='imageRight' ? 'order-1' :'order-2' }`}>
                    <img src="https://placehold.co/600x400@2x.png" className="full" alt="Image Not Found"/>
                </div>

                <div className={`md:w-1/2 ${listdata.layout==='imageRight' ? 'order-2' :'order-1' }`}>
                    <h2 className="heading">{listdata.title}</h2>
                    <p className="pt-8 pb-12 md:text-2xl pr-12 md:pr-0">{listdata.description}</p>
                    <button className="btn-primary1">{listdata.btntext}</button>
                </div>

            </div>

        </section>
    )
}

export default List;