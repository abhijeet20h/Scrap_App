import React from 'react'
// import bootstrap from 'bootstrap';
import img1 from '../assets/IndiaMap.png';
import img2  from '../assets/Price.png';
import img3 from '../assets/Support.png';
import './Services.css'
// import img1 from './assets/Support.png.png';
const Serviecs = () => {
    return (
        <div>
            <div className="container-fluid pb-4 pt-1 bg-gray hidden-xs hidden-sm">
                <div className='container text-deco'>
                    <div className='row'>
                        <div className='col-12 text-center pt-3 pb-2'>
                            <p className="merriw heading-text"><h1>Why choose us?</h1></p>
                        </div>
                        <div className="col-xl-4 col-md-6 col-12 text-center mb-3  ">
                        <a href="#" class="hvr-float-shadow">
                            <div className="card img-hover-zoom">
                                <img src={img1} alt="" />
                                    <div className="card-body">
                                        <h4>Pan India Service</h4>
                                    </div>
                            </div>
                        </a>   
                        </div>
                        <div className="col-xl-4 col-md-6 col-12 text-center mb-3">
                        <a href="#" className=''>
                            <div className="card img-hover-zoom">
                                <img src={img2} alt="" />
                                    <div className="card-body">
                                    <h4>Good Price</h4>
                                    </div>
                            </div>
                        </a>   
                        </div>
                        <div className="col-xl-4 col-md-6 col-12 text-center mb-3">
                        <a href="#">   
                            <div className="card img-hover-zoom none">
                                <img src={img3} alt="" />
                                    <div className="card-body">
                                    <h4>24/7 Customer Support</h4>
                                    </div>
                            </div>
                        </a>    
                        </div>
                    </div>
                </div>
            </div>
        </div>  
      );
}

export default Serviecs

