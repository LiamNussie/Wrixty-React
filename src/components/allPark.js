// import Axios from 'axios';
import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'



class Allpark extends Component {
    
    
    render() {
        const { parks }= this.props;
        const parkList = parks.length ? (
            parks.map(park => {
                return (
                   
                        <div key={park.id} className="box one">
                                <i className="far fa-heart"></i>
                                <Link to={'/' + park.id}>
                                    <div className="img">
                                        <img id="one" src={park.image} alt="a park" />
                                    </div>
                                </Link>
                                        <p>{park.name}</p>
                                
                                <p className="price">{park.price}</p>
                        </div>
                    
                )
            })
        ) : (
            <div className="center grey darken-5">No parks yet</div>
        ) 
        return (
            <div className="master">

                <div className="sort">
                    <label for="sort">Sort</label>
                    <select name="sort" id="sort">
                        <option value="all">All</option>
                        <option value="low">Price Low to High</option>
                        <option value="high">Price High to Low</option>
                    </select>
                    <label for="filter">filter</label>
                    <select name="filter" id="filter">
                        <option value="All">All</option>
                        <option value="gold">Gold</option>
                        <option value="silver">Silver</option>
                        <option value="black">Black Metal</option>
                        <option value="gshock">G-shock</option>
                    </select>
                </div>

                <div className="flex-container">
                    {parkList}
                </div>

                <Link to="/home">
                <div className="next">
                    <span>next  </span><i className="fas fa-angle-right"></i>
                </div>
                </Link>
                
    
                <div className="icons">
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-cc-visa"></i>
                    <i className="fab fa-cc-mastercard"></i>
                    <i className="fab fa-cc-paypal"></i>
                </div>
    
                <div className="footer-info">
                    <div id="footer-left">
                        <p>&copy;2020 Wrixty</p>
                    </div>
                
                    <div id="footer-right">
                        <span id="one">Privacy & Cookies  |</span>
                        <span id="two">Ts & Cs</span>
                    </div>
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        parks: state.parks
    }
}

export default connect(mapStateToProps)(Allpark)








