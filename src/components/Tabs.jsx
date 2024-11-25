import React, { useState } from 'react';

const Tabs =() => {
    const [activeTab, setActiveTab] =useState("Qoute");
    
    // Function to render content based on active tab
    const renderContent = () => {
        switch(activeTab){
            case 'Quote':
                return <div>
                            <div className="tab-header">
                                <p>Get instant quote for your freight forwarding service</p>
                            </div>
  {/*************************************** vehical-container  *************************************/} 
  <div className="grid-container">
                            <div className="Vehical-container my-col-8 p-2">
{/******************************************* row one *************************/}
                                
                                    <div className="Vehical vehical-col">
                                    <img src="src/assets/images/air-freight.png" className='mx-auto'  alt="some" width="50px"/>
                                    <h4 className="v-text">Air Freight</h4>
                                    </div>
                                    <div className="Vehical">
                                    <img src="src/assets/images/ocean-freight.png" className='mx-auto' alt="some" width="50px"/>
                                    <h4 className="v-text">Ocean Freight</h4>
                                    </div>
                                
{/************************************ row tow *********************************/}  

                                    <div className="Vehical vehical-col">
                                    <img src="src/assets/images/rail.png" className='mx-auto' alt="some" width="50px"/>
                                    <h4 className="v-text">Rail Rate</h4>
                                    </div>
                                    <div className="Vehical">
                                    <img src="src/assets/images/truck.png" className='mx-auto' alt="some" width="50px"/>
                                    <h4 className="v-text">Truck Rate</h4>
                                    </div>

                            </div>

                                
 {/******************************* Qoute-for-all-mode ***********************************************/}
                            <div className="vehical-qoute my-col-4">
                                <p>Don’t have a preference?</p>
                                <div className="qoute-all"><a href="">Qoute for all mode</a></div>
                                <br/>
                                <div className="temprature">
                                    <a href="">Temperature-Controlled,</a>
                                    <br/>
                                    <a href="">Logistic Solution</a>
                                </div>
                            </div>
</div>
                      </div>
{/***********************************************************************************************************/}
{/******************************************************* Book **********************************************/}

            case 'Book':
                return <div>
                             <div className="tab-header">
                                <p>Place a booking with just a few clicks</p>
                            </div>
                            <div className="my-grid-container">
                                <div className="Book my-col-6">
                                    <p className="book-p">Start booking with Zenith Eclipse</p>
                                    <div className="qoute-all"><a href="">Sign Up</a></div>
                                </div>
                                <div className="Book my-col-6">
                                    <p className="book-p">Already have an account</p>
                                    <div className="qoute-all"><a href="">Book Now</a></div>
                                </div>

                            </div>
                      </div>
            case 'Tracking':
                return <div></div>
            default:
                return <div>
                            <div className="tab-header">
                                <p>Get instant quote for your freight forwarding service</p>
                            </div>
  {/*************************************** vehical-container  *************************************/} 
  <div className="grid-container">
                            <div className="Vehical-container my-col-8 p-2">
{/******************************************* row one *************************/}
                                
                                    <div className="Vehical vehical-col">
                                    <img src="src/assets/images/air-freight.png" className='mx-auto'  alt="some" width="50px"/>
                                    <h4 className="v-text">Air Freight</h4>
                                    </div>
                                    <div className="Vehical">
                                    <img src="src/assets/images/ocean-freight.png" className='mx-auto' alt="some" width="50px"/>
                                    <h4 className="v-text">Ocean Freight</h4>
                                    </div>
                                
{/************************************ row tow *********************************/}  

                                    <div className="Vehical vehical-col">
                                    <img src="src/assets/images/rail.png" className='mx-auto' alt="some" width="50px"/>
                                    <h4 className="v-text">Rail Rate</h4>
                                    </div>
                                    <div className="Vehical">
                                    <img src="src/assets/images/truck.png" className='mx-auto' alt="some" width="50px"/>
                                    <h4 className="v-text">Truck Rate</h4>
                                    </div>

                            </div>

                                
 {/******************************* Qoute-for-all-mode ***********************************************/}
                            <div className="vehical-qoute my-col-4">
                                <p>Don’t have a preference?</p>
                                <div className="qoute-all"><a href="">Qoute for all mode</a></div>
                                <br/>
                                <div className="temprature">
                                    <a href="">Temperature-Controlled,</a>
                                    <br/>
                                    <a href="">Logistic Solution</a>
                                </div>
                            </div>
</div>
                      </div>

 {/***************************************************************************************************/}
 {/***************************************************************************************************/}

        }
    }
    return (
        <div className="tabs-container">
            {/* Tab buttons */}
            <div className="tabs">
                <button onClick={() => setActiveTab('Quote')} className={activeTab === 'Quote' ? 'active' : ''}><i class="fa fa-clock-o"></i>&nbsp;Quote</button>
                <button onClick={() => setActiveTab('Book') } className={activeTab === 'Book' ? 'active' : ''}><i class="fas fa-tablet-alt"></i>&nbsp;Book</button>
                <button onClick={() => setActiveTab('Tracking')} className={activeTab === 'Tracking' ? 'active' : ''}><i className="fas fa-map-marker-alt"></i>&nbsp;Tracking</button>  
            </div>
            
            {/* Content display */}
            <div className="tab-content">
                {renderContent()}
            </div>
        </div>
    );
}

export default Tabs;