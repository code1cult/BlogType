import React from 'react'
import { graphql } from 'gatsby'
import Navigation from '../components/navigation'
import Header from '../components/header'
import Footer from '../components/footer'
import Recommendations from '../components/recommendations'
import ReactPlayer from 'react-player'
import config from '../config/config.json'


let renderContent = (data) => {

  if (data.media_type === 'img') {

    return (
      <img src={data.media} alt={data.title}></img>
    )

  }

  if (data.media_type === 'video') {

    return (

      <ReactPlayer url={data.media} playing loop />

    )

  }



}

const IndexPage = ({ data, pageContext }) => {

  let id = pageContext.productId;
  let arrays = data[config.sourceStrapi.allStrapi].edges;

  let number = 0;


  arrays.forEach(function (item, i) {
    if (item.node.id === id) {
      number = i
    }
  });

  let blog = arrays[number].node;

  return (
    <div>
      <Navigation />
      <Header title={blog.title} description={config.description} />
      <article>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              {renderContent(blog)}
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>
          </div>
        </div>
      </article>
      <div className="line-article"></div>

      <Recommendations arrays={arrays} />
      <Footer />
    </div>


  )

}
export default IndexPage

export const query = graphql`
query {`+
config.sourceStrapi.allStrapi + `{
   edges {
     node {
      id
      title
      media
      media_type
      content

     }
   }
 }
}
`