import React from "react"
export function User({ name, username, imageURL }) {
  return (
    <main className="center w-50 sans-serif">
      <article className="w-100 bb b--black-05 pb2 mt2 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={imageURL}
            className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns mr2"
            alt="user"
          />
          <div className="">
            <h1 className="f6 f5-ns fw6 lh-title black mv0">{name}</h1>
            <h2 className="f6 fw4 mt0 mb0 black-60">{username}</h2>
          </div>
        </div>
        <form>
          <button
            className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60"
            type="submit"
          >
            + Follow
          </button>
        </form>
      </article>
    </main>
  )
}
User.defaultProps = {
  name: "Alena Sanders",
  username: "@alenasanders",
  imageURL: "https://randomuser.me/api/portraits/women/58.jpg",
}

export default User