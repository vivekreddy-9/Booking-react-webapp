import './featuredProperties.css'

const FeaturedProperties = () => {
    return (
        <div className='fp'>
            <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1" alt="" className="fpImg"/>
                <span className="fpName">7Seasons Apartments </span>
                <span className="fpCity">Terézváros, Hungary, Budapest</span>
                <span className="fpPrice">Starting from ₹ 13,274</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=979587fd2ac8f7777a34758264d557eef57d0e98e58bdaeb121f5b968a20f810&o=&s=1" alt="" className="fpImg"/>
                <span className="fpName">Oriente Palace Apartments</span>
                <span className="fpCity">Centro, Spain, Madrid</span>
                <span className="fpPrice">Starting from ₹ 18,436</span>
                <div className="fpRating">
                    <button>8.8</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt="" className="fpImg"/>
                <span className="fpName">Aparthotel Stare Miasto</span>
                <span className="fpCity">Old Town, Poland, Kraków</span>
                <span className="fpPrice">Starting from ₹ 10,057</span>
                <div className="fpRating">
                    <button>8.7</button>
                    <span>Very Good</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/126708403.webp?k=d9736601506fabe6637abf33b5169604b4407052c7ef063d96bf7a35f395e89d&o=&s=1" alt="" className="fpImg"/>
                <span className="fpName">P&J Luxury Apartments</span>
                <span className="fpCity">Old Town, Poland, Kraków</span>
                <span className="fpPrice">Starting from ₹ 9,227</span>
                <div className="fpRating">
                    <button>8.6</button>
                    <span>Very Good</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties
