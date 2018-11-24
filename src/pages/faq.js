import React from 'react'
import Navigation from '../components/navigation'
import Header from '../components/header'
import Footer from '../components/footer'
import config from '../index.json'





const FAQ = () => {



  return (
    <div>
      <Navigation />
      <Header title={'FAQ'} description={config.description} />
      <article>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">

              <p>&nbsp;<br />
                <strong>What is this blog about and why do I need to read it?</strong><br />
                <br />
                This blog is about {config.title} and here is unique content that collects thousands of likes every day.
                        <br />
              </p>


              <p>&nbsp;<br />
                <strong>Where does this content come from and why is it popular?</strong><br />
                <br />
                This content is not collected by fans, but by the fanatics of this topic, and they have "eaten a dog on it"
                        <br />
              </p>

              <p>&nbsp;<br />
                <strong>Why should I visit this site every day and add to bookmarks?</strong><br />
                <br />
                Everything comes from the preceding paragraphs, very simply because it is a very focused blog that will appeal to anyone who is interested in {config.title}
                <br />
              </p>

              <p>&nbsp;<br />
                <strong>How often add content?</strong><br />
                <br />
                Our editors add more than 12 articles daily.
                        <br />
              </p>


            </div>
          </div>
        </div>
      </article>
      <div className="line-article"></div>
      <Footer />
    </div>


  )

}
export default FAQ;

