import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Navigation from '../components/navigation'
import Header from '../components/header'
import Footer from '../components/footer'

let renderPosts = (array) => {



  return array.map((value, i) => {
    // let title = value.node.data.title.text
    // let url = value.node.data.id;
    // let description = value.node.data.description.text.split(' ', 50).join(' ') + '...';


    debugger

    return (
      <div>
        <div className="post-preview">
          <Link to={'/' }>
            <h2 className="post-title">
             {value.node.title}
            </h2>
            <h3 className="post-subtitle">
              {/* {description} */}
            </h3>
          </Link>
        </div>
        <hr />
      </div>
    )
  })



}

const IndexPage = ({ data }) => {

  return (
    <div>
      <Navigation />
      <Header title={'Trending News'} description={'Latest Breaking News '} image={'https://images.pexels.com/photos/261949/pexels-photo-261949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} />

      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">

            {renderPosts(data.allStrapiPost.edges)}


            <div className="clearfix">
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>


  )

}
export default IndexPage



export const query = graphql`
query {
  allStrapiPost{
   edges {
     node {
       id
       title

     }
   }
 }
}


`

