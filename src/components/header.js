import React from 'react'
import Helmet from 'react-helmet';
import AdSense from 'react-adsense'

const Header = (data) => {

    let hotJarString = `(function(h,o,t,j,a,r){ h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)}; h._hjSettings={hjid:1081613,hjsv:6}; a=o.getElementsByTagName('head')[0]; r=o.createElement('script');r.async=1; r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv; a.appendChild(r); })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`
   
    return (
        <div>
            <AdSense.Google
                client="ca-pub-2548259343015828"
                slot="5153910610"
                format="auto"
            />
            <Helmet>

                
            <meta name="exoclick-site-verification" content="aae0fdddf936e39d805a70621c296bb3"/>
            <meta name="google-site-verification" content="nhP1DAMDbhzaxvNg1ITUGaOtdvZ2AyIwJQrCoOOo09Q" />
            <script>{hotJarString}</script>
                <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                <title>{data.title}</title>
                <meta name="description" content={data.description} />
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
