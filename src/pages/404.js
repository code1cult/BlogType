import React from 'react'
import { graphql } from 'gatsby'
import Navigation from '../components/navigation'
import Header from '../components/header'
import Footer from '../components/footer'
import Recommendations from '../components/recommendations'
import config from '../config/config.json'


const NotFoundPage = ({ data }) => {


  let arrays = data[config.sourceStrapi.allStrapi].edges.filter((elems) => { return elems.node.type === 'post'});;

 

  return (
    <div>
      <Navigation />
      <Header title={config.title} description={config.description} />
      
      <div className="marginAuto">
      <h1>Not Found</h1>
      </div>
      
      <Recommendations arrays={arrays} />
      <Footer />
    </div>


  )

}
export default NotFoundPage

export const query = graphql`
query {
  allStrapiPost{
   edges {
     node {
      id
      title
      media
      media_type
      content
      type
     }
   }
 }
}
`