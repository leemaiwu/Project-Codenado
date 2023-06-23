import React, { useRef, useContext } from 'react'
import axios from 'axios'
import GlobalState from '../state/GlobalState'

const Create = () => {

  const {state: {userId}} = useContext(GlobalState)
  const titleRef = useRef()
  const descRef = useRef()
  const codeRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    let newPost = {
      title: titleRef.current.value,
      description: descRef.current.value,
      codeBlock: codeRef.current.value,
      userId
    }
    console.log('POST', newPost)
    axios
      .post('/api/addPost', newPost)
      .then((res) => {
        console.log(res.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <section>
      <h1 className='page-title'>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <input ref={titleRef} className='title-input' placeholder='Title of Post' />
        <textarea ref={descRef} className='description-input' placeholder='Description' />
        <textarea ref={codeRef} className='code-input' placeholder='Code Block' />
        <div className='button-nav'>
          <button className='button'>Post it</button>
        </div>
      </form>
    </section>
  )
}

export default Create
