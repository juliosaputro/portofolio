import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Halo, saya <span>Julio</span>
              </p>
              <h2 className="about__heading">Mahasiswa Informatika</h2>
              <div className="about__info">
                <PText>
                  Saya dari Rembang, Jawa Tengah. Sejak kecil saya menyukai
                  matematika. saya selalu mencoba untuk merancang hal-hal dengan
                  sudut pandang saya yang unik. saya juga suka menciptakan
                  sesuatu yang berguna bagi orang lain.
                  <br /> <br />
                  Saya mulai coding setelah masuk kuliah. Saya menyukainya dan
                  sekarang saya memiliki kesempatan untuk mendesain beserta
                  kodingnya. Saya merasa ini sangat menarik dan saya sangat
                  sangat menikmati prosesnya.
                  <br />
                  <br />
                  Visi saya adalah lakukan semua hal dengan enjoy.
                </PText>
              </div>
              <Button btnText="Download CV" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Pendidikan</h1>

              <AboutInfoItem title="SMP" items={['SMP N 1 SEDAN']} />
              <AboutInfoItem title="SMA" items={['SMA N 1 LASEM']} />
              <AboutInfoItem
                title="Universitas"
                items={['Universitas Teknologi Yogyakarta']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Keahlian</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACT']}
              />
              <AboutInfoItem title="BackEnd" items={['Node', 'PHP']} />
              <AboutInfoItem title="Design" items={['Photoshop']} />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2021"
                items={['Admin Gudang di Saladnyoo']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
