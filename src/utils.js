import {CLOUDINARY_UPLOAD_URL, CLOUDINARY_UPLOAD_PRESET} from './constants'
import {fetchQuery} from "./Environment";

export const uploadImage = (image) => {

  const fd = new FormData()
  fd.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
  fd.append('file', image)


  return fetch(CLOUDINARY_UPLOAD_URL, {
    method: 'POST',
    body: fd
  }).then(res => {
    return res.json()
  }).then(data => {
    return data
  }).catch(error => console.log(error))

}

export const _userInfo = async (userId) => {
  const userQueryText = `
    query GetUserName($userId: ID!) {
      viewer {
        User(id:$userId){
          name
        }
      }
    }
    `
  const userInfoQuery = {text: userQueryText}

  const result = await fetchQuery(userInfoQuery,{userId})
  return result
}