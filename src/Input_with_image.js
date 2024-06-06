import MultiSelect from  'react-multiple-select-dropdown-lite'
import  'react-multiple-select-dropdown-lite/dist/index.css'
import React, { useState } from "react";

const options = [
    { label: "Grapes", value: "grapes" },
    { label: "Mango", value: "mango" },
    { label: "Strawberry", value: "strawberry"},
  ];
const Input_with_image =() =>{

    const [value, setvalue] = useState('')

    const  handleOnchange  =  val  => {
        setvalue(val)
      }
    
      const  options  = [
        { label:  'Option 1', value:  'option_1'  },
        { label:  'Option 2', value:  'option_2'  },
        { label:  'Option 3', value:  'option_3'  },
        { label:  'Option 4', value:  'option_4'  },
      ]

    return(

        <section className="container-fluid mx-auto">
            <div className="md:flex md:justify-between md:flex-row-reverse md:items-center px-8 lg:px-36 bg-tertiary gap-10 py-12">
                <div className="md:w-1/2">
                    <img src="https://placehold.co/600x400@2x.png" className="w-full" alt="Image Not Found"/> 
                </div>
                <div className="md:w-1/2 pt-12">   
                    <h2 className="heading mb-12">Find a Perfect Gym<br/> Where you'll love to exercise</h2>

                    <div className="relative flex justify-start items-center">
                        <select className="lg:input-one text-base font-semibold w-[600px] py-3 md:py-4 rounded-lg">
                            <option>&nbsp;&nbsp;Strength training</option>
                        </select>
                        <span className="absolute right-2 text-quaternary"><i className="fas fa-chevron-down"></i></span><br/>
                    </div>


                    <div className="relative my-6 flex justify-start items-center">

                        <MultiSelect className="multiselect"
                            onChange={handleOnchange}
                            options={options}
                        />

                    </div>


                    <div className="relative flex justify-start items-center">

                        <MultiSelect className="multiselect"
                            onChange={handleOnchange}
                            options={options}
                        />

                    </div>


                    <div className="text-end pb-14 pt-10">
                        <button className="btn-primary1">Next</button>
                    </div>
                </div>
            
                
            </div>
        </section>
    )
}

export default Input_with_image;