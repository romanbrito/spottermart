import React from 'react'
import styled from "styled-components"

const CreateAsset = () =>
    <div className="measure pa4 black-80">
      <Label htmlFor="businessName">Business Name <Span>(optional)</Span></Label>
      <Input id="businessName" type="text" aria-describedby="businessName-desc"/>

      <Label htmlFor="description">Description <span className="normal black-60">(optional)</span></Label>
      <Input id="description" type="text" aria-describedby="description-desc"/>

      <Label htmlFor="price">Price <Span>(optional)</Span></Label>
      <Input id="price" type="text" aria-describedby="name-desc"/>

      <Label htmlFor="businessType">Business Type <Span>(optional)</Span></Label>
      <Input id="businessType" type="text" aria-describedby="businessType-desc"/>

      <Label htmlFor="address">Address <Span>(optional)</Span></Label>
      <Input id="address" type="text" aria-describedby="address-desc"/>

      <Label htmlFor="city">City <Span>(optional)</Span></Label>
      <Input id="city" type="text" aria-describedby="city-desc"/>

      <Label htmlFor="state">State <Span>(optional)</Span></Label>
      <Input id="state" type="text" aria-describedby="state-desc"/>

      <Label htmlFor="zipCode">Zip Code <Span>(optional)</Span></Label>
      <Input id="zipCode" type="text" aria-describedby="zipCode-desc"/>

    </div>

export default CreateAsset

const Label = styled.label.attrs({
  className: "f6 b db mb2"
})``
const Span = styled.span.attrs({
  className:"normal black-60"
})``
const Input = styled.input.attrs({
  className:"input-reset ba b--black-20 pa2 mb2 db w-100"
})``