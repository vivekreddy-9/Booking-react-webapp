import React from 'react'
import './featured.css'
const featured = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img src="https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Paris" className='featuredImg'/>
            <div className="featuredTitles">
            <h1>Cochin</h1>
            <h2>326 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://images.pexels.com/photos/706352/pexels-photo-706352.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Mumbai" className='featuredImg'/>
            <div className="featuredTitles">
            <h1>Mumbai</h1>
            <h2>450 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://images.pexels.com/photos/3574440/pexels-photo-3574440.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Shimla" className='featuredImg'/>
            <div className="featuredTitles">
            <h1>Shimla</h1>
            <h2>522 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default featured
