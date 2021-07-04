import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Julio Ricky Saputro</h1>
          <PText>
            Seorang Mahasiswa semester akhir Prodi Informatika Universitas
            Teknologi Yogyakarta.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Link Penting"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Kontak"
            links={[
              {
                title: '+62895392031128',
                path: 'tel:+62895392031128',
              },
              {
                title: 'juliosaputro307@gmail.com',
                path: 'mailto:juliosaputro307@gmail.com',
              },
              {
                title: 'Jl. Barito B16 Nogotirti, Sleman, Yogyakarta',
                path:
                  'https://www.google.com/maps/place/Jl.+Barito+No.B16,+Ponowaren,+Nogotirto,+Kec.+Gamping,+Kabupaten+Sleman,+Daerah+Istimewa+Yogyakarta+55291/@-7.7663977,110.3400084,17z/data=!3m1!4b1!4m5!3m4!1s0x2e7a587a81cb26b3:0x7cfc5c12b35ff28b!8m2!3d-7.7663977!4d110.3400084',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Media Sosial"
            links={[
              {
                title: 'Facebook',
                path: 'http://facebook.com/JulioRickySaputro',
              },
              {
                title: 'Twitter',
                path: 'http://twitter.com/kedelaiimpor',
              },
              {
                title: 'Instagram',
                path: 'http://instagram.com/juliorcky_',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2021 - Julio | Designed By{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="http://instagram.com/juliorcky_"
            >
              julio
            </a>{' '}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
