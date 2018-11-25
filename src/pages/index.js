import React from 'react'
import {Link} from 'gatsby'
import {graphql} from 'gatsby'
import Navigation from '../components/navigation'
import Header from '../components/header'
import Footer from '../components/footer'
import config from '../config/config.json'

let convertToSlug = (Text) => {
    return Text
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '')
        ;
}

let renderPosts = (array) => {


    return array.map((value, i) => {
        let title = convertToSlug(value.node.title)


        return (
            <div>
                <div className="post-preview">
                    <Link to={'/' + title}>
                        <h2 className="post-title">
                            {value.node.title}
                        </h2>
                    </Link>
                </div>
                <hr/>
            </div>
        )
    })


}

const IndexPage = ({data}) => {

    return (
        <div>
            <Navigation/>
            <Header title={config.title} description={config.description}/>

            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">

                        {renderPosts(data[config.sourceStrapi.allStrapi].edges)}


                        <div className="clearfix">
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>


    )

}
export default IndexPage


export const query = graphql`
query {
    allStrapiPost(filter: {type: {eq:"post"}}){
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
`;



