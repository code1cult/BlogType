import React from 'react'
import Navigation from '../components/navigation'
import Header from '../components/header'
import Footer from '../components/footer'






const About = () => {

  

  return (
    <div>
      <Navigation />
      <Header title={'Title'} />
      <article>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">

            <p>Description</p>
              
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

