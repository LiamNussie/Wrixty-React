// import Axios from 'axios';
import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'



class Allwatch extends Component {
    
    
    render() {
        const { watches }= this.props;
        const watchList = watches.length ? (
            watches.map(watch => {
                return (
                   
                        <div key={watch.id} className="box one">
                                <i className="far fa-heart"></i>
                                <Link to={'/' + watch.id}>
                                    <div className="img">
                                        <img id="one" src={watch.image} alt="a watch" />
                                    </div>
                                </Link>
                                        <p>{watch.name}</p>
                                
                                <p className="price">{watch.price}</p>
                        </div>
                    
                )
            })
        ) : (
            <div className="center grey darken-5">No watches yet</div>
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
                    {watchList}
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
        watches: state.watches
    }
}

export default connect(mapStateToProps)(Allwatch)








