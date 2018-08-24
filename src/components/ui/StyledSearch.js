import styled from 'styled-components'

export const Main = styled.div.attrs({})`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 90vh
`

export const Figure = styled.div.attrs({
  className: "cf mv3 ml-auto mr-auto w-90"
})``

export const SearchInput = styled.input.attrs({
  className: "f6 f5-l input-reset fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns ba b--black-10"
})``

export const SearchButton = styled.button.attrs({
  className:"f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns"
})``