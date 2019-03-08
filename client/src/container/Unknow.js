import React from 'react';
import pic from '../images/404.png';


class Unknow extends React.Component {
    render(){
        return  <div>
            <img src={pic} alt="404"/>
        </div>
    }

}

export default Unknow;