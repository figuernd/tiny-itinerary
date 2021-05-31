import './App.css';
import Timeline from '@material-ui/lab/Timeline';
import Flight from './components/SegmentPortion/SegmentPortion.tsx';

function App() {

  const response = {
    "name": "Manny's trip to Chicago",
    "segments": [
      {
        "end_time": "2021-05-15T14:00:00.000Z",
        "identifier": "SW2023",
        "start_time": "2021-05-15T04:00:00.000Z",
        "type": "flight",
        "arrival_location": "ORD",
        "departure_location": "CMH"
      },
      {
        "name": "Aloft River Chicago",
        "end_time": "2021-06-15T00:00:00.000Z",
        "identifier": "123i123j",
        "start_time": "2021-05-15T00:00:00.000Z",
        "location": {
          "address-line-1": "95 Main st.",
          "zip": "23923",
          "country": "USA",
          "address-line-2": "",
          "state": "IL",
          "city": "Chicago"
        },
        "type": "stay"
      },
      {
        "end_time": "2021-06-15T17:00:00.000Z",
        "identifier": "SW2023",
        "start_time": "2021-06-15T10:00:00.000Z",
        "type": "flight",
        "arrival_location": "CMH",
        "departure_location": "ORD"
      }
    ]
  }

  const segmentsToItems = function(segments) {
    const items = [];
    for (const segment of segments) {
      items.push({
        component: <Flight {...segment} portion='start' />,
        date: new Date(segment.start_time)
      });
      items.push({
        component: <Flight {...segment} portion='end' />,
        date: new Date(segment.end_time)
      });
    }
    return items.sort((a, b) => a - b).map(item => item.component)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>{response.name}</p>
        <Timeline>
          {segmentsToItems(response.segments)}
        </Timeline>
      </header>
    </div>
  );
}

export default App;
