import styled from 'styled-components'

export const Modal = styled.article.attrs({
  className: "fixed z-1 pt6 left-0 top-0 w-100 h-100 overflow-auto bg-black-40"
})``
// center mw5 mw6-ns br3 hidden ba b--black-10 mv4

export const Header = styled.h1.attrs({
  className: "f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3"
})``

export const ModalBody = styled.article.attrs({
  className: "relative bg-white center pa0 w5 flex flex-column"
})``
// pa3 bt b--black-10

export const Textarea = styled.textarea.attrs({
  className: "f6 f5-ns lh-copy"
})``

export const Footer = styled.section.attrs({
  className: ""
})``