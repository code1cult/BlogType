import React from 'react'
import Helmet from 'react-helmet';


const Header = (data) => {

    
    return (
        <div>
            <Helmet>

                <title>{data.title}</title>
                {/* <meta name="description" content={data.description} /> */}
            </Helmet>
            <header className="masthead" style={{ backgroundImage: `url(${data.image})` }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="site-heading">
                                <h1>{data.title}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>

    )



}

export default Header
