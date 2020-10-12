import React from "react";
import { Link } from "react-router-dom"

import "./styles.css";
import mapMarkerImg from "../../assets/icon.svg"

import { FiPlus } from "react-icons/fi"

import { Map, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Map marker"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Blumenau</strong>
                    <span>Santa Catarina</span>
                </footer>

            </aside>

            <Map
                center={[-26.9351825,-49.132254]}
                zoom={15}
                style={{ width:"100%", height:"100%" }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    )
};

export default OrphanagesMap;