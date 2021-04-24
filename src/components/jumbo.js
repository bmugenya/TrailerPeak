import React from 'react'
import {
  Container,
  Item,
  Inner,
  Pane,
  Title,
  SubTitle,
  Image,
} from '../assets/jumbo'

export default function Jumbo({ children, direction = 'row', ...restProps }) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  )
}

Jumbo.Container = function JumboContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}
Jumbo.Pane = function JumboPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>
}

Jumbo.Title = function JumboTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Jumbo.SubTitle = function JumboSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>
}
Jumbo.Image = function JumboImage({ ...restProps }) {
  return <Image {...restProps} />
}
