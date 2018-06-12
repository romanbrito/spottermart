import React from 'react'
// import styled from "styled-components"
import formInput from '../../json/form_input.json'
import Dropzone from 'react-dropzone'

// inputs
const CreateAsset = (props) => (
  <div>
    <section>
      <h3>Section 1</h3>
        <ul>
          {formInput.section1.map(formInput =>
          <li  key={formInput.id}>
            <label htmlFor={formInput.labelFor}>{formInput.label}</label>
            <input
              type={formInput.type}
              id={formInput.id}
              name={formInput.name}/>
          </li>
          )}
        </ul>
    </section>
    <section>
      <h3>Section 2</h3>
      <ul>
        {formInput.section2.map(formInput =>
          <li  key={formInput.id}>
            <label htmlFor={formInput.labelFor}>{formInput.label}</label>
            <input
              type={formInput.type}
              id={formInput.id}
              name={formInput.name}/>
          </li>
        )}
      </ul>
    </section>
    <section>
      <h3>Section 3</h3>
      <ul>
        {formInput.section3.map(formInput =>
          <li  key={formInput.id}>
            <label htmlFor={formInput.labelFor}>{formInput.label}</label>
            <input
              type={formInput.type}
              id={formInput.id}
              name={formInput.name}/>
          </li>
        )}
      </ul>
    </section>
    <section>
      <h3>Section 4</h3>
      <ul>
        <li>
          <Dropzone
          onDrop={(images) => props.setImages(images)}/>
        </li>
      </ul>
    </section>

  </div>
)

export default CreateAsset