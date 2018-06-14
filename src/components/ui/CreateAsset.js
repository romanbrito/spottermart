import React from 'react'
// import styled from "styled-components"
import formInput from '../../json/form_input.json'
import Dropzone from 'react-dropzone'

// inputs
const CreateAsset = (props) => (
  <div>
    <section>
      <h3 className="pointer bg-gray w-100 accordion"
      onClick={(e) => {showAccordion(e)}}
      >
        Section 1
      </h3>
      <ul className="dn overflow-hidden ph1 panel">
        {formInput.section1.map(formInput =>
          <li key={formInput.id}>
            <label htmlFor={formInput.labelFor}>{formInput.label}</label>
            <input
              type={formInput.type}
              id={formInput.id}
              name={formInput.name}
              onChange={e => props.onChange(e)}
            />
          </li>
        )}
      </ul>
    </section>
    <section>
      <h3 className="pointer bg-gray w-100 accordion"
      onClick={(e) => showAccordion(e)}
      >
        Section 2
      </h3>
      <ul className="dn overflow-hidden ph1 panel">
        {formInput.section2.map(formInput =>
          <li key={formInput.id}>
            <label htmlFor={formInput.labelFor}>{formInput.label}</label>
            <input
              type={formInput.type}
              id={formInput.id}
              name={formInput.name}
              onChange={e => props.onChange(e)}
            />
          </li>
        )}
      </ul>
    </section>
    <section>
      <h3 className="pointer bg-gray w-100 accordion"
      onClick={(e) => showAccordion(e)}
      >
        Section 3
      </h3>
      <ul className="dn overflow-hidden ph1 panel">
        {formInput.section3.map(formInput =>
          <li key={formInput.id}>
            <label htmlFor={formInput.labelFor}>{formInput.label}</label>
            <input
              type={formInput.type}
              id={formInput.id}
              name={formInput.name}
              onChange={e => props.onChange(e)}
            />
          </li>
        )}
      </ul>
    </section>
    <section>
      <h3 className="pointer bg-gray w-100 accordion"
      onClick={(e) => showAccordion(e)}
      >
        Section 4
      </h3>
      <ul className="dn overflow-hidden ph1 panel">
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
      <h3 className="pointer bg-gray w-100 accordion"
      onClick={(e) => showAccordion(e)}
      >
        Section 5
      </h3>
      <ul className="dn overflow-hidden ph1 panel">

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
      <h3 className="pointer bg-gray w-100 accordion"
      onClick={(e) => showAccordion(e)}
      >
        Section 6
      </h3>
      <ul className="dn overflow-hidden ph1 panel">

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
    <section>
      <button
      onClick={() => props.createAsset()}
      >
        Submit
      </button>
    </section>

  </div>
)

// toggle accordion
const showAccordion = (e) => {
  const panel = e.target.nextElementSibling;
  (panel.className === "dn overflow-hidden ph1 panel") ? panel.className += " db": panel.className = "dn overflow-hidden ph1 panel"
}
export default CreateAsset