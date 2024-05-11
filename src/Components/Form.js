import React, { Component } from 'react'

import ReactDOMServer from 'react-dom/server'

import axios from 'axios';

let response;

const options = {
  method: 'GET',
  url: 'https://priceline-com-provider.p.rapidapi.com/v1/flights/search',
  params: {
    itinerary_type: 'ROUND_TRIP',
    class_type: 'FST',
    location_arrival: 'SFO',
    location_departure: 'SIN',
    date_departure: '2024-05-20',
    sort_order: 'PRICE',
    date_departure_return: '2024-05-24',
    duration_max: '2051',
    number_of_stops: '0',
    number_of_passengers: '1',
    price_min: '300',
    price_max: '50000'
  },
  headers: {
    'X-RapidAPI-Key': 'f95464e055mshcc0081c55702320p1afa2cjsn04e1c8f0df4f',
    'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
  }
};

try {
  const res = await axios.request(options);
    response = res;
    console.log(response.data);
} catch (error) {
    console.error(error);
}

class App extends Component {

    render() {
        if (response) {
            if (response.data && response.data.data.listings && response.data.data.listings.length > 0) {
                return (
                    <div className="center">
                        <h1>{response.data.data.listings[0].airlines[0].name} Flight # {response.data.data.listings[0].slices[0].segments[0].flightNumber}</h1>
                        <h1>Depart from {response.data.data.listings[0].slices[0].segments[0].departInfo.airport.name} at {response.data.data.listings[0].slices[0].segments[0].departInfo.time.dateTime}</h1>
                        <h1>Arrive at {response.data.data.listings[0].slices[0].segments[0].arrivalInfo.airport.name} at {response.data.data.listings[0].slices[0].segments[0].arrivalInfo.time.dateTime}</h1>
                        <h1>${response.data.data.listings[0].totalPriceWithDecimal.price}</h1>
                        
                    </div>
                );
            } else {
                return (
                    <div className="center">
                        <h1>No data available</h1>
                    </div>
                );
            }
        } else {
            return (
                <div className="center">
                    <h1>No data available</h1>
                </div>
            );
        }
    }
}

export default App;