import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Team2 from '../images/team2.jpeg';


export default function Skills() {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-10 mx-auto col-md-4'>
                    { /* Card section  */}
                        <div className='card'>
                            <img src={Team2} alt='talk' className='card-img card-img-top'/>
                        </div>
                        <div className='card-footer'>
                            <h5 className='text-center htag'>Exelence</h5>
                        </div>
                        <div className='card-body'>
                        <p> ut ea enim blanditiis nam cum quae laudantium nesciunt beatae 
                             perspiciatis, tenetur vitae nulla!</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
