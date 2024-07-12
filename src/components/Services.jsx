import React from 'react';
import img from '../assets/serv.png'; 
import img2 from '../assets/amc.png';
import img3 from '../assets/service 3.png';
import img4 from '../assets/service 2.png';

const Services = () => {
    return (
        <div id="services" className="bg-gray-100 py-12">
            <section data-aos="zoom-in-down">
                <div className="my-4 py-4">
                    <pre>&nbsp;</pre>
                    <pre>&nbsp;</pre>
                    <h2 className="my-2 text-center text-3xl text-red-700 uppercase font-bold">services</h2>
                    
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-red-700'></div>
                    </div>
                </div>

                <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                <h2 className="font-semibold my-4 text-2xl text-center">Pumps Services</h2>
                                <p className="text-md font-medium">
                                    We offer servicing for back pull-out end suction pumps, split case pumps, vertical multi-stage pumps, industrial process pumps, vertical turbine pumps (VT), positive displacement pumps, and gear pumps.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                                <h2 className="font-semibold my-4 text-2xl text-center">AMC</h2>
                                <p className="text-md font-medium">
                                    We offer Annual Maintenance Contracts (AMCs) for various systems, including booster applications, transfer applications, fire fighting systems, and irrigation systems. However, we do not cover sewage and dewatering systems under our AMC services.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                <h2 className="font-semibold my-4 text-2xl text-center">General Consultations</h2>
                                <p className="text-md font-medium">
                                    We provide consultation services for pumping systems, offering economical solutions and expert advice to address issues related to pumping systems effectively.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img4} />
                                <h2 className="font-semibold my-4 text-2xl text-center">Irrigation Systems</h2>
                                <p className="text-md font-medium">
                                    We offer installation guidance, fault finding, and solutions specifically tailored for irrigation systems.
                                </p>
                            </div>
                        </div>                    
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services;
