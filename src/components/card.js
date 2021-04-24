import React, { useState, useContext, createContext } from 'react'
import {
  Container,
  Title,
  SubTitle,
  Group,
  Feature,
  FeatureText,
  FeatureTitle,
  FeatureClose,
  Text,
  Maturity,
  Content,
  Meta,
  Entities,
  Item,
  Image,
} from '../assets/card'
export const FeatureContext = createContext()

export default function Card({ children, ...restProps }) {
  const [showFeature, setShowFeature] = useState(false)
  const [ItemFeature, setItemFeature] = useState({})

  return (
    <FeatureContext.Provider
      value={{ showFeature, setShowFeature, ItemFeature, setItemFeature }}
    >
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  )
}
Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>
}

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>
}

Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}

Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>
}

Card.Feature = function CardFeature({ children, category, ...restProps }) {
  const [showFeature, itemFeature, setShowFeature] = useContext(FeatureContext)
  return showFeature ? (
    <Feature
      {...restProps}
      src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
    >
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.title}</FeatureText>
        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src='/images/icons/close.png' alt='close' />
        </FeatureClose>
      </Content>
    </Feature>
  ) : null
}

Card.Item = function CardItem({ item, children, ...restProps }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext)
  return (
    <Item
      onClick={() => {
        setItemFeature(item)
        setShowFeature(true)
      }}
      {...restProps}
    >
      {children}
    </Item>
  )
}
Card.Image = function CardImage({ ...restProps }) {
  return <Image {...restProps} />
}
