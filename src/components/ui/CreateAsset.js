import React from 'react'
import styled from "styled-components"
import formInput from '../../json/form_input.json'
import DropImage from './DropImage'

// input
const CreateAsset = () => (
  <div>
    <section>
      <h3>Section 1</h3>
        <ul>
          {formInput.section1.map(formInput =>
          <li>
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
          <li>
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
          <li>
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
          <DropImage/>
        </li>
      </ul>
    </section>

  </div>
)

export default CreateAsset