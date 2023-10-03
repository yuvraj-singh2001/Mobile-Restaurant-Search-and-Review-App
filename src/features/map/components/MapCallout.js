import React from 'react'
import { View } from 'react-native'

import CompactRestaurantInfo from '../../restaurants/components/CompactRestaurantInfo'

export default function MapCallout({restaurant}) {
  return (
    <>
      <CompactRestaurantInfo restaurant={restaurant} isMap={true}/>
    </>
  )
}


