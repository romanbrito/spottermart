import React from 'react'
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
import DeleteForever from 'react-icons/lib/md/delete-forever'
import AddPhoto from 'react-icons/lib/md/add-a-photo'
import {Main, Section, Article, SubTitle, Ul, Li, Label, TextArea, Checkbox, Input} from './StyledCreateAsset'

const Icons = ({title}) =>
  title === "Name and Location" ? <Location size={30}/> :
    title === "Company" ? <Store size={30}/> :
      <Money size={30}/>;


// inputs
const CreateAsset = (props) => {

  return (
    <Main>
      {Object.keys(formInput).map((title,idx) =>
        <Section key={title}>
          <Article>
            <Icons title={title}/>
            <SubTitle
              onClick={() => {
                showAccordion(idx)
              }}
            >
              {title}
            </SubTitle>
            <Ul>
              {formInput[title].map(formInput =>
                <Li
                  key={formInput.id}
                >
                    <Label
                      htmlFor={formInput.labelFor}
                    >
                      {formInput.label}
                    </Label>
                    {/*Description as text area*/}
                    {formInput.type === 'textarea' ?
                      <TextArea
                        id={formInput.id}
                        name={formInput.name}
                        value={props.state[formInput.name]}
                        onChange={e => props.onChange(e)}/>
                      : formInput.type === 'checkbox' ?
                        <Checkbox
                          type={formInput.type}
                          id={formInput.id}
                          name={formInput.name}
                          value={props.state[formInput.name]}
                          onChange={e => props.onChange(e)}
                        /> :
                        <Input
                          type={formInput.type}
                          id={formInput.id}
                          name={formInput.name}
                          value={props.state[formInput.name]}
                          onChange={e => props.onChange(e)}
                        />
                    }

                  {props.validationErrors && props.validationErrors[formInput.name] ?
                    <span className="red">*</span> : ""}
                </Li>
              )}
            </Ul>
          </Article>
        </Section>
      )
      }

      <section className="lh-copy pa3 ph0-l bb b--black-10">
        <div className="flex-auto">
          <Images size={30}/>
          <h3 className="pointer w-100 accordion"
              onClick={() => showAccordion(3)}
          >
            Images
          </h3>
          <ul className="dn overflow-hidden ph1 panel">
            <li className="list pointer">
              <Dropzone
                style={{width: 150, height: 150, borderStyle: 'outset', borderWidth: 1}}
                accept="image/jpeg, image/png"
                onDrop={(images) => props.setImages(images)}
              >
                <AddPhoto size={70}/>
                <p className="tc">*.jpeg and *.png only</p>
              </Dropzone>
            </li>
            {props.images && props.images.map(image =>
              <li
                className="list"
                key={image.preview}
              >
                <div className="flex">
                  <img width="150" height="150" className="" src={image.preview} alt="" id={image.preview}/>
                  <button
                    className="absolute o-70"
                    onClick={() => props.removeImage(document.getElementById(image.preview))}
                  >
                    <DeleteForever size={50} className="pointer"/>
                  </button>
                </div>
              </li>
            )}
          </ul>
        </div>
      </section>
      <section className="lh-copy pa3 ph0-l bb b--black-10">
        <div className="flex-auto">
          <Tools size={30}/>
          <h3 className="pointer w-100 accordion"
              onClick={() => showAccordion(4)}
          >
            Equipment
          </h3>
          <ul className="dn overflow-hidden ph1 panel">

            {props.equipment && props.equipment.map((equipment, idx) => (
              <li
                className="list"
                key={idx}
              >
                <input
                  placeholder={`Item #${idx + 1}`}
                  className="input-reset bl-0 bt-0 br-0 bb b--black-20 outline-0"
                  value={equipment.name}
                  onChange={props.onChangeElement('equipment', idx)}
                  autoFocus={true}
                  onKeyUp={(e) => e.key === 'Enter' ? props.addElement('equipment') : ''}
                  type="text"/>
                <button
                  className="pointer br3 bg-white"
                  onClick={() => props.removeElement('equipment', idx)}>
                  -
                </button>
              </li>
            ))}
            <li
              className="list"
            >
              <button
                className="pointer br3 bg-white"
                onClick={() => props.addElement('equipment')}
              >
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
              onClick={() => showAccordion(5)}
          >
            Social Media
          </h3>
          <ul className="dn overflow-hidden ph1 panel">

            {props.socialMedia && props.socialMedia.map((socialMedia, idx) => (
              <li
                className="list"
                key={idx}
              >
                <input
                  className="input-reset bl-0 bt-0 br-0 bb b--black-20 outline-0"
                  placeholder={`Item #${idx + 1}`}
                  value={socialMedia.name}
                  onChange={props.onChangeElement('socialMedia', idx)}
                  autoFocus={true}
                  onKeyUp={(e) => e.key === 'Enter' ? props.addElement('socialMedia') : ''}
                  type="text"/>
                <button
                  className="pointer br3 bg-white"
                  onClick={() => props.removeElement('socialMedia', idx)}
                >
                  -
                </button>
              </li>
            ))}
            <li
              className="list"
            >
              <button
                className="pointer br3 bg-white"
                onClick={() => props.addElement('socialMedia')}
              >
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
          onClick={() => props.submit()}
        >
          Submit
        </button>
      </section>

    </Main>
  )

}


// toggle accordion
const showAccordion = (pos) => {

  const title = document.getElementsByClassName('accordion');
  const panel = document.getElementsByClassName('panel');

  for (let i = 0; i < panel.length; i++) {
    if (i === pos) {
      // change tile color if active
      title[i].className += " green";
      // in large screens absolute position
      // equipment and social media lists have a different class > 3
      if (pos < 4) {
        panel[i].className = "dn overflow-hidden ph1 panel absolute-l w-50-l h-90-l top-0-l bottom-0-l left-0-l right-0-l center-l mt6-l flex flex-wrap justify-center";
      } else {
        panel[i].className = "dn overflow-hidden ph1 panel absolute-l w-50-l h-90-l top-0-l bottom-0-l left-0-l right-0-l center-l mt6-l db";
      }
    } else {
      // on click hide the other elements
      panel[i].className = "dn overflow-hidden ph1 panel";
      title[i].className = "pointer w-100 accordion";
    }
  }
}

export default CreateAsset