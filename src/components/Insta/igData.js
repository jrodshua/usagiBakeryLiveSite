import React, { useState, useEffect } from "react"
import { igUrl } from "../../lib/lib"
import IgComp from "./igComp"

const IgData = () => {
  const [insta, setInsta] = useState([])

  useEffect(() => {
    fetch(igUrl("34350962356"))
      .then(res => res.json())
      .then(({ data }) => {
        const posts = []
        data.user.edge_owner_to_timeline_media.edges.forEach(edge => {
          if (edge.node) {
            posts.push({
              id: edge.node.id,
              src: edge.node.thumbnail_resources[2].src,
              url: edge.node.shortcode,
              caption: edge.node.edge_media_to_caption.edges[0].node.text,
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
