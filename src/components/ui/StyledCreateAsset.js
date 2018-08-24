import styled from 'styled-components'

export const Main = styled.main.attrs({
  className: "mv2 pl0 measure-wide gridAsset-l center",
})`
  @supports (grid-area: auto) {

    @media screen and (min-width: 60em) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1em;
      max-width: none;
    }

  }
`

export const Section = styled.section.attrs({
  className: "lh-copy bg-silver"
})``

export const Article = styled.article.attrs({
  className: "flex-auto measure-wide-l center-l"
})``

export const SubTitle = styled.a.attrs({
  className: "pointer w-100 tc db mv3 black no-underline f3 dim bg-white accordion"
})`
@media screen and (min-width: 60em) {
  pointer-events: none;
}
`

export const Panel = styled.ul.attrs({
  className: "o-0 pv3 absolute overflow-hidden ph1 panel"
})`
height: 0;
@media screen and (min-width: 60em) {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: auto;
  opacity: 1;
  color: #fff;
  background-color: #999;
  position: relative;
}
`

export const PanelList = styled.ul.attrs({
  className: "o-0 absolute overflow-hidden ph1 panel"
})`
height: 0;
@media screen and (min-width: 60em) {
  display: block;
  height: auto;
  opacity: 1;
  color: #fff;
  position: relative;
}
`

export const Li = styled.li.attrs({
  className: "flex flex-wrap w5 center list"
})``

export const Label = styled.label.attrs({
  className: "flex-grow-1 flex-shrink-0 w4"
})``

export const TextArea = styled.textarea.attrs({
  className: "flex flex-grow-1 flex-shrink-0 input-reset bl-0 bt-0 br-0 bb b--black-20 outline-0"
})``

export const Checkbox = styled.input.attrs({
  className: ""
})``

export const Input = styled.input.attrs({
  className: "flex flex-grow-1 flex-shrink-0 input-reset bl-0 bt-0 br-0 bb b--black-20 outline-0"
})``

export const ImageSection = styled.section.attrs({
  className: "lh-copy"
})``

export const Figure = styled.figure.attrs({
  className: "flex"
})``

export const DelImgBtn = styled.button.attrs({
  className: "absolute o-70 pointer"
})``

export const ListSection = styled.section.attrs({
  className: "lh-copy"
})``

export const List = styled.li.attrs({
  className: "list tc"
})``

export const InputList = styled.input.attrs({
  className: "input-reset center bl-0 bt-0 br-0 bb b--black-20 outline-0"
})``

export const MinusPlusBtn = styled.button.attrs({
  className: "pointer br3 bg-white"
})``

export const SubmitBtn = styled.button.attrs({
  className: "f5 no-underline green bg-animate hover-bg-green hover-white pa3 ba border-box pointer mt2 w-100 w4-l"
})`
@media screen and (min-width: 60em) {
  transform: rotate(90deg);
  cursor: pointer;
  position: fixed;
  display: block;
  top: 7.5em;
  left: -2em;
}
`

export const CancelBtn = styled.button.attrs({
  className: "f5 no-underline red bg-animate hover-bg-red hover-white pa3 ba border-box pointer mt2 w-100 w4-l"
})`
@media screen and (min-width: 60em) {
  transform: rotate(90deg);
  cursor: pointer;
  position: fixed;
  display: block;
  top: 16em;
  left: -2em;
}
`