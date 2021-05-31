import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import FlightLandIcon from '@material-ui/icons/FlightLand';
import HotelIcon from '@material-ui/icons/Hotel';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const icons:any = {
  start: {
    flight: <FlightTakeoffIcon />,
    stay: <HotelIcon />
  },
  end: {
    flight: <FlightLandIcon />,
    stay: <HotelIcon />
  }
}

export default function SegmentPortion(props:any) {
  const classes = useStyles();
  const isStart = props.portion === 'start';
  const now = new Date();
  const isActive = now >= new Date(props.start_time) && now <= new Date(props.end_time);
  
  const title = () => {
    if (props.type === 'flight') {
      if (isStart) return `Depart ${props.departure_location}`;
      else return `Arrive ${props.arrival_location}`;
    } else if (props.type === 'stay') {
      if (isStart) return 'Check in';
      else return 'Check out';
    }
    return ';';
  }

  return (
    <TimelineItem>
      <TimelineOppositeContent>
        <Typography variant="body2">
          {(new Date(isStart ? props.start_time : props.end_time)).toLocaleString()}
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color={isActive ? 'primary' : undefined}>
          {icons[props.portion][props.type]}
        </TimelineDot>
        <TimelineConnector className={isActive && isStart ? classes.secondaryTail : undefined} />
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={3}>
          <Typography variant="h6" component="h1">
            {title()}
          </Typography>
          <Typography>{props.name || props.identifier}</Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  )
}