import './hotel.css'
import {useState} from 'react';
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import MailList from "../../components/MailList/MailList"
import Footer from "../../components/Footer/Footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
const Hotel = () => {
  const [slideNumber,setSlidenumber]=useState(0);
  const [open,setOpen]=useState(false);
  const photos =[
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/399769533.jpg?k=bc2ceaf0df2df1a072bdca9c28692bd36960bb5174b1592fa14b0189f9aefbbd&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/399769519.jpg?k=6e0c30551d8144d5c696bc75e89314d5e32fa74572087c3be8bddf27a2f2e865&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/399769532.jpg?k=affb33991f9d846c47a15fae305d1991775931e1758a055e790bbba38dbe27cf&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/399769525.jpg?k=0e3a9ded67a77915dbca5976537fb99b3d8445598dc10afa219ff702b5a43c14&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/399769527.jpg?k=d9fd1613a75ffe035bde77956226b42ab243f82437ca596ee1cf38b1cb0282e3&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/399769522.jpg?k=18a7738852ec312b56647e6a3ca12ded0d09a824cbd9adfce156586bb9f8f830&o=&hp=1"
    },
  ]
  const handleOpen=(i)=>{
    setSlidenumber(i);
    setOpen(true);
  }
  const handleMove=(direction)=>{
    let newSlideNumber;

    if(direction==='l'){
      newSlideNumber=slideNumber===0?5:slideNumber-1
    }else{
      newSlideNumber=slideNumber===5?0:slideNumber+1
    }
    setSlidenumber(newSlideNumber)
  }
  return (
    <div>
      <Navbar/>
      <Header type='list'/>
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
          <div className="slideWrapper">
          <img src={photos[slideNumber].src} alt="" className='sliderImg'/>
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
        </div>}
        <div className="hotelWrapper">
          <button className='bookNow'>Reserve or Book Now!</button>
          <div className="hotelTitle">Orsay Cosy Studio</div>
          <div className="hotelAddress">
            <FontAwesomeIcon icon= {faLocationDot} />
            <span>Elton St Newyork</span>
          </div>
          <span className="hotelDistance">Excellent Location-500m from Airport</span>
          <span className="hotelPriceHighlight">
            Book a stay over ₹ 40,000 and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo,i)=>(
              <div className="hotelImgWrapper">
                <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className='hotelImg'/>
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailTexts">
              <h1 className='hotelTitle'>Orsay Cosy Studio</h1>
              <p className="hotelDesc">You're eligible for a Genius discount at Orsay Cosy Studio! To save at this property, all you have to do is sign in.

Offering free WiFi, Orsay Cosy Studio is located in the centre of Paris within 1 km of Rodin Museum and 1.5 km from Orsay Museum. This apartment is 2.6 km from Arc de Triomphe and 2.8 km from Gare Saint-Lazare.

The apartment is composed of 1 separate bedroom, a fully equipped kitchenette with a fridge and a microwave, and 1 bathroom. Towels and bed linen are provided in the apartment.

Popular points of interest near the apartment include Musée de l'Orangerie, Eiffel Tower and Tuileries Garden. The nearest airport is Paris - Orly, 16 km from Orsay Cosy Studio, and the property offers a paid airport shuttle service.

This is our guests' favourite part of Paris, according to independent reviews.</p>

            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for 9-night stay</h1>
              <span>
              Situated in the real heart of Paris, this property has an excellent location score of 9.1
              </span>
              <h2><b>₹ 50,000</b>(9 Nights)</h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Hotel
