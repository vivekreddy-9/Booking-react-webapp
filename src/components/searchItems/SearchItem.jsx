import './searchItem.css'

const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img src="https://cf.bstatic.com/xdata/images/hotel/square200/399769533.webp?k=106a76c2bae9c3283c7287805f0789dcd4faebfcb5645f044e549702d85f7a5b&o=&s=1" 
        alt="" className='siImage' />
        <div className="siDesc">
            <div className="siTitle">Orsay Cosy Studio</div>
            <div className="siDistance">500m from Airport</div>
            <div className="siTaxiOp">Free Airport Taxi</div>
            <span className="siSubtitle">Studio Apartment with Air-conditioning</span>
            <span className="siFeatures">Entire apartment • 1 bedroom • 1 bathroom • 16m²</span>
            <span className="siCancelOp">FreeCancellation</span>
            <span className="siCancelOpSubtitle">You can cancel later, so lock this great price today</span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailsTexts">
                <div className="siPrice">₹ 11,451</div>
                <div className="siTaxOp">Includes taxes and fees</div>
                <button className='siCheckButton'>See Availability</button>
            </div>
        </div>

    </div>
  )
}

export default SearchItem
