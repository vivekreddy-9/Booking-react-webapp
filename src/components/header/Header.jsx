import './header.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faBed,
    faPlane,
    faCar,
    faTaxi,
    faCalendar,
    faPerson,
    faCity
} from "@fortawesome/free-solid-svg-icons"
import {DateRange} from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {useState} from 'react';
import {format} from "date-fns"
import { useNavigate } from 'react-router-dom';

const Header = ({type}) => {
    const [destination, setDestination] = useState("")
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([{
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        },]);
    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({adults: 1, children: 0, Room: 1})
    const handleOption=(name,operation)=>{
        setOptions(prev=>{return{
            ...prev,[name]: operation==='i'? options[name]+1:options[name]-1,
        }})
    }
    const navigate=useNavigate() 
    const handleSearch=()=>{
        navigate('/hotels',{state:{destination,date,options}})
    }
    return (
        <div className='header'>
            <div className={type==="list"? "headerContainer listMode":"headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed}/>
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane}/>
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar}/>
                        <span>Car Rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCity}/>
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi}/>
                        <span>Airport taxis</span>
                    </div>
                </div>
                {type !== "list" &&
                <><h1 className='headerTitle'>Find your next stay</h1>
                <p className='headerdesc'>Search low prices on hotels, homes and much more...</p>
                <button className='headerBtn'>Sign in / Register</button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed}
                            className="headerIcon"/>
                        <input type="text" placeholder='Where are you going?' className='headerSearchInput' onChange={e=>setDestination(e.target.value)}/>
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendar}
                            className="headerIcon"/>
                        <span className='headerSearchText' onClick={
                            () => setOpenDate(!openDate)
                        }>
                            {
                            `${
                                format(date[0].startDate, "MM/dd/yyyy")
                            } to ${
                                format(date[0].endDate, "MM/dd/yyyy")
                            } `
                        }</span>
                        {
                        openDate &&< DateRange 
                        editableDateInputs = {true}
                        onChange = {item => setDate(
                                [item.selection])}
                        moveRangeOnFirstSelection = {false}
                        ranges = {date}
                        className = "date"
                        minDate={new Date()}
                        />
                    } </div>
                    <div className="headerSearchItem" >
                        <FontAwesomeIcon icon={faPerson}
                            className="headerIcon"/>
                        <span onClick={()=>setOpenOptions(!openOptions)} className='headerSearchText' >
                            {
                            `${
                                options.adults
                            } adult,${
                                options.children
                            } children,${
                                options.Room
                            } Room`
                        }</span>
                        {openOptions && <div className="options">
                            <div className="optionItem">
                                <span className="optionText">Adults</span>
                                <div className="optionCounter">
                                    <button className="optionCounterButton" disabled={options.adults<=1} onClick={()=>handleOption("adults","d")}>-</button>
                                    <span className="optionCounterNumber">{options.adults}</span>
                                    <button className="optionCounterButton" onClick={()=>handleOption("adults","i")}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Children</span>
                                <div className="optionCounter">
                                    <button className="optionCounterButton" disabled={options.children<=0} onClick={()=>handleOption("children","d")}>-</button>
                                    <span className="optionCounterNumber">{options.children}</span>
                                    <button className="optionCounterButton" onClick={()=>handleOption("children","i")}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Rooms</span>
                                <div className="optionCounter">
                                    <button className="optionCounterButton" disabled={options.Room<=1}  onClick={()=>handleOption("Room","d")}>-</button>
                                    <span className="optionCounterNumber">{options.Room}</span>
                                    <button className="optionCounterButton" onClick={()=>handleOption("Room","i")}>+</button>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className="headerSearchItem">
                        <button className="headerBtn" onClick={handleSearch}>Search</button>
                    </div>
                </div></>}
            </div>
        </div>
    )
}

export default Header
