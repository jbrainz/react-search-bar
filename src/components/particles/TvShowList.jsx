import React from 'react'
import { Rating, Thumbnail, TvShowLWrapper, Name } from '../molecules'

const TvShowList = ({ url, name, rating }) => {
  return (
    <TvShowLWrapper>
      <Thumbnail>
        <img src={url} alt={name} />
      </Thumbnail>
      <Name>{name}</Name>
      <Rating>{rating || "N/A"}</Rating>
    </TvShowLWrapper>
  )
}

export default TvShowList
