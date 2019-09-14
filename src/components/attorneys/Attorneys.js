import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './AttorneyStyle.css';
import Team1 from '../images/team1.jpeg';
import Team2 from '../images/team2.jpeg';
import Team3 from '../images/team3.jpg';
import Team4 from '../images/team4.jpeg';
import Team5 from '../images/team5.jpeg';


export default function Attorneys() {
    return (
        <div>
            <section className='container'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <h3>Meet Our Team</h3>
                        <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                 Dolorum porro veniam pariatur impedit facilis ex cupiditate 
                                 ut ea enim blanditiis.
                        </p>
                    </div>
                </div>
            </section>
            <div className='container'>
            {/* Attorney Section */}
                <section className='row mb-3'>
                    <div className='col-10 mx-auto col-md-6 '>
                        <div className='card'>
                            <img className='img-card-responsive card-top team-member mx-auto my-auto' src={Team1}/>
                        </div>
                    </div>
                    <div className='col-10 mx-auto col-md-6'>
                        <h3>John Doe</h3>
                        <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                 Dolorum porro veniam pariatur impedit facilis ex cupiditate 
                                 ut ea enim blanditiis
                        </p>
                        <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                 Dolorum porro veniam pariatur impedit facilis ex cupiditate 
                                 ut ea enim blanditiis.
                                 Dolorum porro veniam pariatur impedit facilis ex cupiditate 
                                 ut ea enim blanditiis.
                        </p>
                    </div>
                </section>
                            {/* Attorney Section */}
                            <section className='row mb-3'>
                    <div className='col-10 mx-auto col-md-6 '>
                        <div className='card'>
                            <img className='img-card-responsive card-top team-member
                             mx-auto my-auto' src={Team2}/>
                        </div>
                    </div>
                    <div className='col-10 mx-auto col-md-6'>
                        <h3>John Doe</h3>
                        <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                 Dolorum porro veniam pariatur impedit facilis ex cupiditate 
                                 ut ea enim blanditiis
                        </p>
                        <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                 Dolorum porro veniam pariatur impedit facilis ex cupiditate 
                                 ut ea enim blanditiis.
                                 Dolorum porro veniam pariatur impedit facilis ex cupiditate 
                                 ut ea enim blanditiis.
                        </p>
                    </div>
                </section>
                            {/* Attorney Section */}
                <section className='row mb-3'>
                    <div className='col-10 mx-auto col-md-6 '>
                        <div className='card'>
                            <img className='img-card-responsive card-top team-member  
                            mx-auto my-auto' src={Team3}/>
                        </div>
                    </div>
                    <div className='col-10 mx-auto col-md-6'>
                        <h3>John Doe</h3>
                        <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                 Dolorum porro veniam pariatur impedit facilis ex cupiditate 
                                 ut ea enim blanditiis
                        </p>
                        <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                 Dolorum porro veniam pariatur impedit facilis ex cupiditate 
                                 ut ea enim blanditiis.
                                 Dolorum porro veniam pariatur impedit facilis ex cupiditate 
                                 ut ea enim blanditiis.
                        </p>
                    </div>
                </section>
                            {/* Attorney Section */}
                <section className='row mb-3'>
                    <div className='col-10 mx-auto col-md-6 '>
                        <div className='card'>
                            <img className='img-card-responsive card-top team-member 
                            mx-auto my-auto' src={Team4}/>
                        </div>
                    </div>
                    <div className='col-10 mx-auto col-md-6'>
                        <h3>Jane Doe</h3>
                        <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                 Dolorum porro veniam pariatur impedit facilis ex cupiditate 
                                 ut ea enim blanditiis
                        </p>
                        <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                 Dolorum porro veniam pariatur impedit facilis ex cupiditate 
                                 ut ea enim blanditiis.
                                 Dolorum porro veniam pariatur impedit facilis ex cupiditate 
                                 ut ea enim blanditiis.
                        </p>
                    </div>
                </section>
                            {/* Attorney Section */}
                <section className='row mb-3'>
                    <div className='col-10 mx-auto col-md-6 '>
                        <div className='card'>
                            <img className='img-card-responsive card-top team-member 
                            mx-auto my-auto' src={Team5}/>
                        </div>
                    </div>
                    <div className='col-10 mx-auto col-md-6'>
                        <h3>Janet Doe</h3>
                        <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                 Dolorum porro veniam pariatur impedit facilis ex cupiditate 
                                 ut ea enim blanditiis
                        </p>
                        <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                 Dolorum porro veniam pariatur impedit facilis ex cupiditate 
                                 ut ea enim blanditiis.
                                 Dolorum porro veniam pariatur impedit facilis ex cupiditate 
                                 ut ea enim blanditiis.
                        </p>
                    </div>
                </section>

            </div>
        </div>
    )
}
