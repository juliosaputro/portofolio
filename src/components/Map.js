import React from 'react';
import styled from 'styled-components';
import MapImg from '../assets/images/map1.png';
import PText from './PText';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Lokasi Saya</h3>
          <PText>
            Jl. Barito No.B16, Ponowaren, Nogotirto, Kec. Gamping, Kabupaten
            Sleman, Daerah Istimewa Yogyakarta 55291
          </PText>
          <a
            className="map__card__link"
            href="https://www.google.com/maps/place/Jl.+Barito+No.B16,+Ponowaren,+Nogotirto,+Kec.+Gamping,+Kabupaten+Sleman,+Daerah+Istimewa+Yogyakarta+55291/@-7.7663977,110.3400084,17z/data=!3m1!4b1!4m5!3m4!1s0x2e7a587a81cb26b3:0x7cfc5c12b35ff28b!8m2!3d-7.7663977!4d110.3400084"
            target="_blank"
            rel="noreferrer"
          >
            lanjutkan ke google map
          </a>
        </div>
      </div>
      {/* <img src={MapImg} alt="Map" /> */}
    </MapStyles>
  );
}
