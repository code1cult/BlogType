import React from 'react'
import { graphql } from 'gatsby'
import Navigation from '../components/navigation'
import Header from '../components/header'
import Footer from '../components/footer'



const IndexPage = ({ data }) => {

 


  let blog = data.allStrapiPost.edges[0].node
  let htmlDescription = blog.description
  debugger
  return (
    <div>
      <Navigation />
      <Header title={blog && blog.title } description={''} image={'https://ichef.bbci.co.uk/news/660/cpsprodpb/EFCB/production/_104378316_a9b18b4c-5092-4089-b16a-a6228bac4c85.jpg'} />
      <article>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div dangerouslySetInnerHTML={{ __html:htmlDescription}} />
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
        description
        }
      }
    }
  }

`

