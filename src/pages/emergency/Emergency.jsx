import React, { useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import './Emergency.css';

const googleMapsApiKey = 'AIzaSyBagwqsKrcoB-ODyenN0KNg0KW27joiZNs';

const Emergency = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    if (!navigator.geolocation) {
      console.error('Geolocation is not supported by your browser');
      return;
    }

    navigator.geolocation.getCurrentPosition((position) => {
      const loader = new Loader({
        apiKey: googleMapsApiKey,
        libraries: ['places'],
      });

      loader.load().then((google) => {
        const map = new google.maps.Map(document.createElement('div'));
        const service = new google.maps.places.PlacesService(map);

        const location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        const request = {
          location,
          radius: '5000',
          type: ['hospital'],
          keyword: 'emergency',
        }

        service.nearbySearch(request, (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            setPlaces(results);
          }
        });
      });
    });
  }, []);

  return (
    <>
    <div className='emergency-message'>
        <h1>Emergency Medical Attention Required!!!</h1>
        <h3>Please go to the nearest emergency room or call an ambulance</h3>
    </div>
    <div className='ers'>
    
      <h2>Closest Emergency Rooms</h2>
      <ul className='er-list'>
        {places.map((place, index) => (
          <li key={index}>{place.name} - {place.vicinity}</li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default Emergency;
