import { gql } from 'graphql-request';

const pageQuery = gql`
  query page($slug: String!) {
    page(where: { slug: $slug }) {
      id
      seo {
        id
        stage
        title
      }
      slug
      title
      components(first: 100) {
        __typename
        ... on Hero {
          id
          heroLabelAlias: label
          heroHeadingAlias: heading
          heroTextAlias: text
          heroImageAlias: image {
            __typename
            id
            caption
            credit
            url
            assetSpecs
          }
          heroImageMobileAlias: imageMobile {
            __typename
            id
            caption
            credit
            url
            assetSpecs
          }
          caption
          buttons {
            __typename
            id
            label
            slug
            url
            btpClass: class
          }
          info {
            id
            class
            type
          }
        }
        __typename
        ... on ButtonsRow {
          id
          buttonsRowTitleAlias: title
          buttons {
            __typename
            id
            label
            slug
            url
            btpClass: class
          }
          info {
            id
            class
            type
          }
        }
        __typename
        ... on VideoBlock {
          id
          videoBlockTitleAlias: title
          videoBlockTextAlias: text
          videoBlockVideoAlias: video {
            __typename
            id
            stage
            updatedAt
            title
            videoCode
            thumbnail {
              assetSpecs
              height
              id
              width
              url
            }
          }
          info {
            id
            class
            type
          }
        }
        __typename
        ... on InfoBlock {
          id
          infoBlockHeadingAlias: heading
          infoBlockTextAlias: text
          info {
            id
            class
            type
          }
          buttons {
            __typename
            id
            label
            slug
            url
            class
          }
        }
        __typename
        ... on InfoMediaBlock {
          id
          infoMediaBlockHeadingAlias: heading
          infoMediaBlockLabelAlias: label
          infoMediaBlockTextAlias: text
          info {
            id
            class
            type
          }
          image {
            id
            caption
            credit
            url
            assetSpecs
          }
          buttons {
            __typename
            id
            label
            slug
            url
            class
          }
        }
        __typename
        ... on ListGroup {
          id
          listGroupTitleAlias: title
          listGroupItemsAlias: items {
            __typename
            id
            heading
            text
            url
          }
          icon {
            id
            name
            class
          }
          info {
            id
            class
            type
          }
        }
        __typename
        ... on Shape {
          id
          shapeTitleAlias: title
          shapeNameAlias: name
          info {
            id
            class
            type
          }
        }
        __typename
        ... on Shape {
          id
          shapeTitleAlias: title
          shapeNameAlias: name
          info {
            id
            class
            type
          }
        }
        __typename
        ... on CardGroup {
          id
          cardGrouptitleAlias: title
          cardGroupCardsAlias: cards {
            __typename
            id
            heading
            text
            url
            icon {
              id
              name
              class
            }
            image {
              id
              caption
              credit
              url
              assetSpecs
            }
            buttons {
              __typename
              id
              label
              slug
              url
              class
            }
          }
          info {
            id
            class
            type
          }
        }
        __typename
        ... on ComponentModel {
          id
          componentModelTitleAlias: title
          componentModelGlobalComponentAlias: globalComponent {
            __typename
            id
            stage
            updatedAt
            title
            slug
          }
          info {
            id
            class
            type
          }
        }
        __typename
        ... on ImageBanner {
          id
          imageBannerTitleAlias: title
          imageBannerImageAlias: image {
            __typename
            id
            caption
            credit
            url
            assetSpecs
          }
        }
        __typename
        ... on TestimonialGroup {
          id
          TestimonialGroupTitleAlias: title
          TestimonialGroupTestimonialsAlias: testimonials(first: 50) {
            id
            title
            location
            personName
            personRole
            personaType
            publishedAt
            quote
            brand
            createdAt
            personaPhoto {
              caption
              size
              url
              width
              height
              assetSpecs
            }
          }
          info {
            id
            class
            type
          }
        }
        __typename
        ... on TestimonialBlock {
          id
          testimonailBlockTitle: title
          testimonialBlocktestimonial: testimonial {
            id
            title
            location
            personName
            personRole
            personaType
            publishedAt
            quote
            brand
            createdAt
            personaPhoto {
              caption
              url
              assetSpecs
            }
          }
          info {
            id
            class
            type
          }
        }
      }
    }
  }
`;

export default pageQuery;
