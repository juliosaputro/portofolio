import React from 'react';
import { MdDesktopMac, MdCode } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle
          subheading="Apa yang harus saya lakukan"
          heading="Services"
        />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="frontend"
            desc="Saya melakukan desain ui/ux untuk situs web yang membantu situs web mendapatkan tampilan yang unik."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="web dev"
            desc="Saya juga develop website."
          />
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="netflix"
            desc="Saya juga menonton Netflix untuk refreshing."
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
