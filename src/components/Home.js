import React, { Component } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

export class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sindex:1
        }
    }

    componentDidMount = () => {
        this.slider()
    }

    slider = () => {
        var i;
        var imgdivs = document.getElementsByClassName("imgdiv")
        for (i = 0; i < imgdivs.length; i++) {
            imgdivs[i].style.display = "none"
        }

        this.setState({sindex: this.state.sindex + 1})
        if (this.state.sindex > imgdivs.length) {
            this.setState({sindex:1})

        }

         imgdivs[this.state.sindex - 1].style.display = "block"

        setTimeout(this.slider, 5000)


    }


    render() {
      
      
        return (
            <div>
                <div className="formdiv">
                    <h2>Vacation rentals in <br /> India</h2>
                    <p>Find and book unique accomodation on  <br /> Airbnb</p>
                    <form>
                        <div className="outer">
                            <p>LOCATION</p>
                            <input type="text" value="India" />
                        </div>
                        <div className="outer">
                            <div className="inner1">
                                <p>CHECK IN</p>
                                <input type="tet" placeholder="Add Date" />
                            </div>
                            <div className="inner2">
                                <p>CHECK OUT</p>
                                <input type="text" placeholder="Add Date" />
                            </div>
                        </div>
                        <div className="outer">
                            <div className="inner1">
                                <p>ADULTS</p>
                                <select name="adults">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <div className="inner2">
                                <p>CHILDREN</p>
                                <select name="adults">
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <button type="submit"><span className="sicon">{<AiOutlineSearch />}</span>Search</button>
                        </div>
                    </form>


                </div>
                <div className="bshad">
                </div>
                <div className="imgdiv">

                    <img src="/4.jpg" />

                </div>
                <div className="imgdiv">

                    <img src="/2.jpg" />

                </div>
                <div className="imgdiv">

                    <img src="/3.jpg" />

                </div>
                <div className="imgdiv">

                    <img src="/1.jpg" />

                </div>

            </div>
        )
    }
}

export default Home
