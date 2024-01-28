import React, { useEffect } from "react";

const ContactMap = () => {
  useEffect(() => {
    const initMap = () => {
      const geocoder = new window.google.maps.Geocoder();
      const address = "642 Clearlake Road, Richmond, VA 23236";

      geocoder.geocode({ address }, (results, status) => {
        if (status === "OK" && results[0]) {
          const location = results[0].geometry.location;
          const map = new window.google.maps.Map(
            document.getElementById("map"),
            {
              center: location,
              zoom: 15,
            }
          );

          new window.google.maps.Marker({
            position: location,
            map: map,
            title: "642 Clearlake Road, Richmond, VA 23236",
          });
        } else {
          console.error(
            "Geocode was not successful for the following reason:",
            status
          );
        }
      });
    };

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDaUWR9-0jCFU_V8aMizOcC8rQBI3QgRqc`;
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      initMap();
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="map" style={{ height: "400px", width: "100%" }}></div>;
};

export default ContactMap;
