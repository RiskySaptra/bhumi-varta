import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { connect } from "react-redux";
import { fetchLocation, fetchCrowdPoint } from "../actions";
import L from "leaflet";

import LocationNavigation from "./LocationNavigation";
import RightMenu from "./RightMenu";

const dark = L.tileLayer(
  "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
);
const light = L.tileLayer(`https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}`);

function turnLightMap(map) {
  dark.removeFrom(map);
  light.addTo(map);
}

function turnDarkMap(map) {
  light.removeFrom(map);
  dark.addTo(map);
}

function Map({ dispatch, locations, crowdPoint, theme }) {
  // initiate positions
  const [position, setPosition] = useState({
    pos: [-6.2, 106.816666],
    map: null,
  });

  const mapColor = (map) => {
    if (theme === "dark" && map) {
      turnDarkMap(map);
    }
    if (theme === "light" && map) {
      turnLightMap(map);
    }
  };

  const changePos = (pos) => {
    const { map } = position;
    if (map) map.flyTo(pos);
  };

  useEffect(() => {
    mapColor(position.map);

    const dispatchData = () => {
      dispatch(fetchCrowdPoint());
      return dispatch(fetchLocation());
    };
    dispatchData();
  }, [dispatch, theme, position.map]);

  return (
    <div className="relative">
      <LocationNavigation changePos={changePos} data={locations.data} />
      <RightMenu />

      <MapContainer
        center={position.pos}
        zoom={15}
        scrollWheelZoom={true}
        whenCreated={(mapClass) => setPosition({ ...position, map: mapClass })}
      >
        <TileLayer
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
          url={`https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}`}
        />

        {locations.data.length > 0 &&
          locations.data.map((itm, idx) => (
            <Marker key={idx} position={[itm.latitude, itm.longitude]}>
              <Popup>{itm.name}</Popup>
            </Marker>
          ))}

        {crowdPoint.data.length > 0 &&
          crowdPoint.pos.map((itm, idx) => (
            <Marker key={idx} position={[itm.latitude, itm.longitude]}>
              <Popup>
                <div className="flex flex-col">
                  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="overflow-hidden">
                        <table className="min-w-full border text-center">
                          <thead className="border-b">
                            <tr>
                              <th
                                scope="col"
                                colSpan="2"
                                className="text-sm font-medium text-gray-900 px-6 py-4 border-b"
                              >
                                Information
                              </th>
                            </tr>
                            <tr>
                              <th
                                scope="col"
                                colSpan="2"
                                className="text-sm font-medium text-gray-900 px-6 py-4 border-b"
                              >
                                {itm.range}
                                <span className="font-bold">
                                  ({itm.totalUser})
                                </span>
                              </th>
                            </tr>
                            <tr>
                              <th
                                scope="col"
                                className="text-sm font-bold text-gray-900 px-6 py-4 border-r"
                              >
                                Name
                              </th>
                              <th
                                scope="col"
                                className="text-sm font-bold text-gray-900 px-6 py-4 border-r"
                              >
                                Total
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {itm.table.map((a, idx) => (
                              <tr key={idx} className="border-b">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                                  {a.brand}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                                  {a.total_user}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
}

const mapStateToProps = function (state) {
  return {
    crowdPoint: state.crowdPoint,
    locations: state.locations,
    theme: state.theme,
  };
};

export default connect(mapStateToProps)(Map);
