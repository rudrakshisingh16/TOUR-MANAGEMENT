import React,{useRef} from 'react'
import './search-bar.css'
import { Col, from,FromGroup } from "reactstrap";

const SearchBar = () => {

    const locationRef = useRef('')
    const distanceRef = useRef(0)
    const maxGroupSizeRef = useRef(0)

    const searchHandler =()=>{

       const location = locationRef.current.value
       const distance = locationRef.current.value
       const maxGroupSize = maxGroupSizeRef.current.value

       
    };

  return <Col lg='12'>
    <div className="search_bar">
        <from className="d-flex align-items-center gap-4">
          <FromGroup className="d-flex gap-3 from_group from_group-fast">
             <span>
              <i class="ri-map-pin-line"></i>
            </span>
             <div>
                <h6>Location</h6>
                <input type="text" placeholder="where are you going?" ref={locationRef} />
             </div>
          </FromGroup>
          <FromGroup className="d-flex gap-3 from_group from_group-fast">
             <span>
             <i class="ri-map-pin-time-line"></i>
            </span>
             <div>
                <h6>Distance</h6>
                <input type="number" placeholder="Distance k/m" ref={distanceRef} />
             </div>
          </FromGroup>
          <FromGroup className="d-flex gap-3 from_group from_group-fast">
             <span>
              <i class="ri-group-line"></i>
            </span>
             <div>
                <h6>Max People</h6>
                <input type="number" placeholder="0" rref={maxGroupSizeRef}/>
             </div>
          </FromGroup>
          <spam className="search_icon" type='submit' onClick={searchHandler}>
           <i class="ri-search-line"></i>
          </spam>
        </from>        
    </div>
  </Col>
}

export default SearchBar