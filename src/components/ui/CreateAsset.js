import React from 'react'
// import styled from "styled-components"
import formInput from '../../json/form_input.json'
import Dropzone from 'react-dropzone'
import Location from 'react-icons/lib/md/location-city'
import Store from 'react-icons/lib/md/store'
import Money from 'react-icons/lib/fa/money'
import Images from 'react-icons/lib/io/images'
import Tools from 'react-icons/lib/go/tools'
import Facebook from 'react-icons/lib/fa/facebook-official'
import Instagram from 'react-icons/lib/fa/instagram'
import Twitter from 'react-icons/lib/fa/twitter'
import Google from 'react-icons/lib/fa/google-plus'


// inputs
const CreateAsset = (props) => (
  <div className="list pl0 mt0 measure center">
    <section className="flex lh-copy pa3 ph0-l bb b--black-10">
      <div className="flex-auto">
        <Location size={30}/>
        <h3 className="pointer w-100 accordion"
            onClick={(e) => {
              showAccordion(e)
            }}
        >
          Name and Location
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
              {props.validationErrors[formInput.name] ? <span className="red">*</span> : ""}
            </li>
          )}
          <p><span className="red">*</span> Required field</p>
        </ul>
      </div>
    </section>
    <section className="lh-copy pa3 ph0-l bb b--black-10">
      <div className="flex-auto">
        <Store size={30}/>
      <h3 className="pointer w-100 accordion"
          onClick={(e) => showAccordion(e)}
      >
        Company
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
      </div>
    </section>
    <section className="lh-copy pa3 ph0-l bb b--black-10">
      <div className="flex-auto">
        <Money size={30}/>
      <h3 className="pointer w-100 accordion"
          onClick={(e) => showAccordion(e)}
      >
        Financial
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
      </div>
    </section>
    <section className="lh-copy pa3 ph0-l bb b--black-10">
      <div className="flex-auto">
        <Images size={30}/>
      <h3 className="pointer w-100 accordion"
          onClick={(e) => showAccordion(e)}
      >
        Images
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
      </div>
    </section>
    <section className="lh-copy pa3 ph0-l bb b--black-10">
      <div className="flex-auto">
        <Tools size={30}/>
      <h3 className="pointer w-100 accordion"
          onClick={(e) => showAccordion(e)}
      >
        Equipment
      </h3>
      <ul className="dn overflow-hidden ph1 panel">

        {props.equipment.map((equipment, idx) => (
          <li key={idx}>
            <input
              placeholder={`Item #${idx + 1}`}
              value={equipment.name}
              onChange={props.onChangeElement('equipment', idx)}
              autoFocus={true}
              onKeyUp={(e) => e.key === 'Enter'? props.addElement('equipment'):''}
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
      </div>
    </section>
    <section className="lh-copy pa3 ph0-l bb b--black-10">
      <div className="flex-auto">
        <Facebook size={30}/><Twitter size={30}/><Instagram size={30}/><Google size={30}/>
      <h3 className="pointer w-100 accordion"
          onClick={(e) => showAccordion(e)}
      >
        Social Media
      </h3>
      <ul className="dn overflow-hidden ph1 panel">

        {props.socialMedia.map((socialMedia, idx) => (
          <li key={idx}>
            <input
              placeholder={`Item #${idx + 1}`}
              value={socialMedia.name}
              onChange={props.onChangeElement('socialMedia', idx)}
              autoFocus={true}
              onKeyUp={(e) => e.key === 'Enter'? props.addElement('socialMedia'):''}
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
      </div>
    </section>
    <section>
      <button
        disabled={!props.isEnabled}
        className="f5 no-underline black bg-animate hover-bg-black hover-white pa3 ba border-box pointer mt2"
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
  (panel.className === "dn overflow-hidden ph1 panel") ? panel.className += " db" : panel.className = "dn overflow-hidden ph1 panel"
}
export default CreateAsset