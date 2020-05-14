import React from 'react';

class Image extends React.Component{
    render(){
        return(
            <div id="layout">
            <div className="pure-g">
                <div className="pure-u-1-4">
                    <img className="pure-img-responsive" src="http://farm3.staticflickr.com/2875/9069037713_1752f5daeb.jpg" alt="Peyto Lake">
                    </img>
                </div>
                <div className="pure-u-1-4">
                    <img className="pure-img-responsive" src="http://farm3.staticflickr.com/2813/9069585985_80da8db54f.jpg" alt="Train">
                    </img>
                </div>
                <div className="pure-u-1-4">
                    <img className="pure-img-responsive" src="http://farm6.staticflickr.com/5456/9121446012_c1640e42d0.jpg" alt="T-Shirt Store">
                    </img>
                </div>
                <div className="pure-u-1-4">
                    <img className="pure-img-responsive" src="http://farm8.staticflickr.com/7357/9086701425_fda3024927.jpg" alt="Mountain">
                    </img>
                </div>
            </div>
            </div>
        )
    }
}

export default Image;