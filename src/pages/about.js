import React from 'react'
import Navigation from '../components/navigation'
import Header from '../components/header'
import Footer from '../components/footer'
import config from '../index.json'





const About = () => {
  return (
    <div>
      <Navigation />
      <Header title={config.title} description={config.description} />
      <article>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">

            <p>Welcome to our page dedicated to the topic of {config.title}, 
            I hope you will be with us here, the page loads instantly and it's a pleasure to read and watch content.</p>
              
            </div>
          </div>
        </div>
      </article>
      <div className="line-article"></div>
      <Footer />
    </div>


  )

}
export default About;

