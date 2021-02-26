import React, { useState, useEffect } from "react"
import IgComp from "./igComp"

const IgData = () => {
  const [insta, setInsta] = useState([])

  useEffect(() => {
    async function fetchIg() {
      let response = await fetch(
        "https://www.instagram.com/usagi.bakery/?__a=1"
      )
      response = await response.json()
      let data = await response.graphql.user.edge_owner_to_timeline_media.edges.map(
        edge => ({
          id: edge.node.id,
          src: edge.node.thumbnail_resources[2].src,
          url: edge.node.shortcode,
          caption: edge.node.accessibility_caption,
        })
      )
      setInsta(data)
    }
    fetchIg()
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
