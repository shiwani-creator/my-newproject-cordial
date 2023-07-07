import React from 'react'
import picture from '../pic7.png'

function Domain() {
    return (
        <div>
            {/* <div className="section1">

           </div> */}
            <div className='domains'>
                <div className='search'>
                    <h1> Search Your Name</h1>

                </div>
                <div className='domain'>
                    <div>
                        <input className='input1' type='text' placeholder='Domain Name'></input>
                    </div>
                    <select className="input2">
                        <option selected>.com</option>
                        <option value="1">.org</option>
                        <option value="2">.info</option>
                        <option value="3">.edu</option>
                        <option value="3">.net</option>
                    </select>

                    <div>
                        <button className='input3'>Find</button>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Domain
