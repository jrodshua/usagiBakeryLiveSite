import React, { useState, useEffect } from "react"
import IgComp from "./igComp"

const IgData = () => {
  const [insta, setInsta] = useState([])

  useEffect(() => {
    fetch(`https://www.instagram.com/usagi.bakery/?__a=1`)
      .then(res => res.json())
      .then(({ data }) => {
        const posts = []
        data.graphql.user.edge_owner_to_timeline_media.edges.forEach(edge => {
          if (edge.node) {
            posts.push({
              id: edge.node.id,
              src: edge.node.thumbnail_resources[2].src,
              url: edge.node.shortcode,
              caption: edge.node.accessibility_caption,
            })
          }
        })
        setInsta(posts)
      })
  }, [])

  return (
    <div className="igFetch-wrapper">
      {!insta ? (
        <span>Loading Instagram Posts...</span>
      ) : (
        <IgComp posts={insta} />
      )}
    </div>
  )
}

export default IgData
