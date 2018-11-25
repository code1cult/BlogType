import React from 'react'
import {graphql} from 'gatsby'
import {Link} from 'gatsby'
import config from '../config/config.json'

let convertToSlug = (Text) => {
    return Text
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '');
}

let getRandom = (arr, n) => {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
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

const Recommendations = ({arrays}) => {
    let newArray = getRandom(arrays, 6)

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                    <div className="recommendations-title">
                        Recommendations for You:
                    </div>

                    {renderPosts(newArray)}


                    <div className="clearfix">
                    </div>
                </div>
            </div>
        </div>
    )


}
export default Recommendations


export const query = graphql`
            query {` +
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