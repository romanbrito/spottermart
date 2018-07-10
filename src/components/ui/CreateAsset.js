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
import {
  Main,
  Section,
  Article,
  SubTitle,
  Ul,
  Li,
  Label,
  TextArea,
  Checkbox,
  Input,
  ImageSection,
  Figure,
  DelImgBtn,
  ListSection,
  List,
  InputList,
  MinusPlusBtn,
  SubmitBtn
} from './StyledCreateAsset'

const Icons = ({title}) =>
  title === "Name and Location" ? <Location size={30}/> :
    title === "Company" ? <Store size={30}/> :
      <Money size={30}/>;

const styleDrop = {
  width: 150, height: 150,
  borderStyle: 'outset',
  borderWidth: 1,
  cursor: 'pointer',
  margin: '0 auto'
}


// inputs
const CreateAsset = (props) => {

  return (
    <Main>
      {Object.keys(formInput).map((title, idx) =>
        <Section key={title}>
          <Article>

            <SubTitle
              id={title}
              href={'#' + title}
              onClick={() => {
                showAccordion(idx)
              }}
            >
              <Icons title={title}/> {title}
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

      <ImageSection>
        <Article>

          <SubTitle
            id="add-img"
            href="#add-img"
            onClick={() => showAccordion(3)}
          >
            <Images size={30}/> Images
          </SubTitle>
          <Ul>
            <Li>
              <Dropzone
                style={styleDrop}
                accept="image/jpeg, image/png"
                onDrop={(images) => props.setImages(images)}
              >
                <AddPhoto size={70}/>
                <p className="tc">*.jpeg and *.png only</p>
              </Dropzone>
            </Li>
            {props.images && props.images.map(image =>
              <List
                key={image.preview}
              >
                <Figure>
                  <img width="150" height="150" className="" src={image.preview} alt="" id={image.preview}/>
                  <DelImgBtn
                    onClick={() => props.removeImage(document.getElementById(image.preview))}
                  >
                    <DeleteForever size={50} className="pointer"/>
                  </DelImgBtn>
                </Figure>
              </List>
            )}
          </Ul>
        </Article>
      </ImageSection>
      <ListSection>
        <Article>

          <SubTitle
            id="add-equipment"
            href="#add-equipment"
              onClick={() => showAccordion(4)}
          >
            <Tools size={30}/> Equipment
          </SubTitle>
          <Ul>

            {props.equipment && props.equipment.map((equipment, idx) => (
              <List
                key={idx}
              >
                <InputList
                  placeholder={`Item #${idx + 1}`}
                  value={equipment.name}
                  onChange={props.onChangeElement('equipment', idx)}
                  autoFocus={true}
                  onKeyUp={(e) => e.key === 'Enter' ? props.addElement('equipment') : ''}
                  type="text"/>
                <MinusPlusBtn
                  onClick={() => props.removeElement('equipment', idx)}>
                  -
                </MinusPlusBtn>
              </List>
            ))}
            <List>
              <MinusPlusBtn
                onClick={() => props.addElement('equipment')}
              >
                +
              </MinusPlusBtn>
            </List>

          </Ul>
        </Article>
      </ListSection>
      <ListSection>
        <Article>

          <SubTitle
            id="add-social"
            href="#add-social"
              onClick={() => showAccordion(5)}
          >
            <Facebook size={30}/><Twitter size={30}/><Instagram size={30}/><Google size={30}/>
          </SubTitle>
          <Ul>

            {props.socialMedia && props.socialMedia.map((socialMedia, idx) => (
              <List
                key={idx}
              >
                <InputList
                  placeholder={`Item #${idx + 1}`}
                  value={socialMedia.name}
                  onChange={props.onChangeElement('socialMedia', idx)}
                  autoFocus={true}
                  onKeyUp={(e) => e.key === 'Enter' ? props.addElement('socialMedia') : ''}
                  type="text"/>
                <MinusPlusBtn
                  onClick={() => props.removeElement('socialMedia', idx)}
                >
                  -
                </MinusPlusBtn>
              </List>
            ))}
            <List>
              <MinusPlusBtn
                onClick={() => props.addElement('socialMedia')}
              >
                +
              </MinusPlusBtn>
            </List>
          </Ul>
        </Article>
      </ListSection>
      <section>
        <SubmitBtn
          disabled={!props.isEnabled}
          onClick={() => props.submit()}
        >
          Submit
        </SubmitBtn>
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
        panel[i].className = "flex flex-wrap justify-center pl0 bg-silver pv5 white panel";
        panel[i].style.cssText = "opacity: 1; transition: opacity .5s ease-in;"
      } else {
        panel[i].className = "overflow-hidden ph1 db bg-silver pv3 panel";
        panel[i].style.cssText = "opacity: 1; transition: opacity .5s ease-in;"
      }
    } else {
      // on click hide the other elements
      panel[i].className = "o-0 overflow-hidden ph1 panel";
      panel[i].style.cssText = "height: 0;";
      title[i].className = "pointer w-100 tc db mv3 black no-underline f3 dim accordion";
    }
  }
}

export default CreateAsset