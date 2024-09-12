import React, {useEffect, useState} from 'react';
import css from "./GoogleMap.module.css"
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const GoogleMap = (props) => {
    const { google } = props;

    const locations = [
        { lat: 48.03573474425106, lng: 33.480929465121854, title: 'Location 1' },
        { lat: 47.88396853981976, lng: 33.38773721016856, title: 'Location 2' },
        { lat: 47.907913058180476, lng: 33.422453183186484, title: 'Location 3' },
        { lat: 47.942395120603656, lng: 33.419723652499954, title: 'Location 4' },
        { lat: 47.999490199670525, lng: 33.47966833627125, title: 'Location 5' },
        { lat: 48.14559625662557, lng: 33.5907213832004, title: 'Location 6' },
        { lat: 47.950072946014316, lng: 33.45242222090692, title: 'Location 7' },
        { lat: 47.90271090679571, lng: 33.361418939005766, title: 'Location 8' },
        { lat: 47.97520799322507, lng: 33.43738104703776, title: 'Location 9' },
        { lat: 48.07119950372266, lng: 33.50858281742635, title: 'Location 10' },
    ];



    return (
        <div className={css.map}>
            <Map
                google={google}
                zoom={9.5}
                initialCenter={{ lat: 47.96373713039278, lng: 33.42772180927341}}
                style={{ width: '100%', height: '450px' }}
            >
                {locations.map((location, index) => (
                    <Marker
                        key={index}
                        title={location.title}
                        position={{ lat: location.lat, lng: location.lng }}
                    />
                ))}
            </Map>
        </div>

    );
};

export default GoogleApiWrapper({
    // apiKey: 'AIzaSyDTqolRJrV6pLovI2DvfpXXxV2JEjXmgy4',
    apiKey: 'AIzaSyAfToNGz_DZ9ISxtNaljhNnkXrNUByfnFw',
})(GoogleMap);