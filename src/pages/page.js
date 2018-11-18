import React from 'react'
import { graphql } from 'gatsby'
import Navigation from '../components/navigation'
import Header from '../components/header'
import Footer from '../components/footer'
import ReactPlayer from 'react-player'



let renderContent = (data) => {

  if (data.media_type == 'img') {

    return (
      <img src={data.media} alt={data.title}></img>
    )

  }

  if (data.media_type == 'video') {

    return (

      <ReactPlayer url={data.media} playing loop />

    )

  }
  // <video src={data.media} type="video/mp4" />


}

const IndexPage = ({ data }) => {
  let blog = data.allStrapiPost.edges[0].node

  return (
    <div>
      <Navigation />
      <Header title={blog && blog.title} image={'https://ichef.bbci.co.uk/news/660/cpsprodpb/EFCB/production/_104378316_a9b18b4c-5092-4089-b16a-a6228bac4c85.jpg'} />
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

      <Footer />
    </div>


  )

}
export default IndexPage

export const query = graphql`
query($productId: String){
  allStrapiPost (filter:{
    id:{eq: $productId}
  }){
    edges {
      node  {
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

