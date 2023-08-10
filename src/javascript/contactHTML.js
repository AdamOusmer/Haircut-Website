function initMap() {
    // Address to be geocoded
    const address = '8405 Wilfrid-Pelletier Montréal, Québec, H1K 1M3';

    // Create a new map instance centered at the geocoded location
    const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 45.6156, lng: -73.5687}, // Default coordinates for Montreal
        zoom: 15
    });

    // Geocode the address and set the map center
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: address }, (results, status) => {
        if (status === 'OK') {
            map.setCenter(results[0].geometry.location);
            // Add a marker at the location
            const marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location,
                title: address
            });
        } else {
            console.error('Geocode was not successful for the following reason:', status);
        }
    });
}