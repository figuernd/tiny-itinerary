import React from 'react'
import Box from '@material-ui/core/Box';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import FlightLandIcon from '@material-ui/icons/FlightLand';

export default function Flight() {
  return (
    <Box color="#000" bgcolor="#EEE" padding="20px">
      <FlightTakeoffIcon />
      Flight info goes here
      <FlightLandIcon />
    </Box>
  )
}