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
          <li key={formInput.id}>
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
          <li key={formInput.id}>
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
          <li key={formInput.id}>
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
        {props.images.map(image =>
          <li key={image.preview}>
            <img src={image.preview} alt="" id={image.preview}/>
            <button
              onClick={() => props.removeImage(document.getElementById(image.preview))}>
              Remove
            </button>
          </li>
        )}
      </ul>
    </section>
    <section>
      <h3>Section 5</h3>
      <ul>

        {props.equipment.map((equipment, idx) => (
          <li key={idx}>
            <input
              placeholder={`Item #${idx + 1}`}
              value={equipment.name}
              onChange={props.onChangeElement('equipment', idx)}
              type="text"/>
            <button
            onClick={() => props.removeElement('equipment', idx)}>
              -
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => props.addElement('equipment')}>
            +
          </button>
        </li>

      </ul>
    </section>

    <section>
      <h3>Section 6</h3>
      <ul>

        {props.socialMedia.map((socialMedia, idx) => (
          <li key={idx}>
            <input
              placeholder={`Item #${idx + 1}`}
              value={socialMedia.name}
              onChange={props.onChangeElement('socialMedia', idx)}
              type="text"/>
            <button
              onClick={() => props.removeElement('socialMedia', idx)}
              >
              -
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => props.addElement('socialMedia')}>
            +
          </button>
        </li>

      </ul>
    </section>

  </div>
)

export default CreateAsset