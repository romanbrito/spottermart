import React from "react"
import styled from "styled-components"
/*
  Move the SCs defined at the bottom outside if it gets too cluttered & import them as follows:
import {
    Main,
    Article,
    Image,
    Title,
    SubTitle,
    Button
  } from './StyledComponents'
*/
export function User({ name, username, imageURL }) {
  return (
    <Main>
      <Article>
        <div className="flex items-center">
          <Image src={imageURL} />
          <div>
            <Title>{name}</Title>
            <SubTitle>{username}</SubTitle>
          </div>
        </div>
        <form>
          <Button>+ Follow</Button>
        </form>
      </Article>
    </Main>
  )
}
User.defaultProps = {
  name: "Alena Sanders",
  username: "@alenasanders",
  imageURL: "https://randomuser.me/api/portraits/women/58.jpg",
}
const Main = styled.main.attrs({
  className: "center w-50 sans-serif",
})``
const Article = styled.article.attrs({
  className: "w-100 bb b--black-05 pb2 mt2 flex items-center justify-between",
})``
const Image = styled.img.attrs({
  className: "ba b--black-10 db br-100 w2 w3-ns h2 h3-ns mr2",
})``
const Title = styled.h1.attrs({
  className: "f6 f5-ns fw6 lh-title black mv0",
})``
const SubTitle = styled.h2.attrs({
  className: "f6 fw4 mt0 mb0 black-60",
})``
const Button = styled.button.attrs({
  className: "f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60",
  type: "submit",
})``

export default User