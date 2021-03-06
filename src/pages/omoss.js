import React from 'react';
import SEO from '../components/seo';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import { SectionWrapper } from '../components/common/SectionWrapper';
import OmOssTop from '../components/omoss/OmOssTop';
import WhoWeAre from '../components/common/WhoWeAre';
import Ad from '../components/common/Ad';
import ContactCard from '../components/omoss/ContactCard';
import WhereIs from '../components/common/WhereIs';
import StoreAdWear from '../components/omoss/StoreAdWear';
import StoreAdJeans from '../components/omoss/StoreAdJeans';


import '../components/styles/styles.scss';
import  nyYorkColors from '../components/constants/colors';




const OmOssPage = () => {

    const data = useStaticQuery(myQuery);
    const omoss = data.omoss.edges
    const generalinfo = data.generalinfo.edges


    return (
        <Layout>
            <SEO title="Om oss" keywords={['ny york', 'vintage', 'wear']} />
    
            <SectionWrapper id="omoss01">
                <OmOssTop data={omoss} />
            </SectionWrapper>
    
            <SectionWrapper id="omoss02">
                <WhoWeAre color="pink" data={omoss} />
            </SectionWrapper>
    
            <SectionWrapper id="omoss03">
                <ContactCard />
                <Ad />
                <Ad type="jeans" />
            </SectionWrapper>
            
            <SectionWrapper id="omoss04">
                <WhereIs data={generalinfo} />
            </SectionWrapper>
    

            <SectionWrapper id="omoss06">
     
                <h2>VÅRE BUTIKKER</h2>
                <StoreAdWear  />
                <StoreAdJeans theme={nyYorkColors} />
            </SectionWrapper>
    
       </Layout>
    )
}




export default OmOssPage;



export const myQuery = graphql`
query {
  omoss: allWordpressAcfOmoss {
    edges {
        node {
            acf {

              hvem_er_vi_overskrift
              hvem_er_vi_tekst
              hvem_er_vi_bilde {
                  id
                  localFile {
                      childImageSharp {
                          fluid(quality: 100, maxWidth:415) {
                              src
                          }
                      }
                  }
              }
              
              toppbilde {
                  localFile {
                      childImageSharp {
                          fluid(quality: 100, maxWidth:1200) {
                              src
                          }
                      }
                  }
              }
            }
        }
    }
  }
  generalinfo: allWordpressAcfGeneralinfo {
    edges {
      node {
        acf {
          apningstider_jeans
          hvor_er_ny_york_overskrift
          hvor_er_ny_york_tekst
          apningstider_wear
        }
      }
    }
  }
}

`;