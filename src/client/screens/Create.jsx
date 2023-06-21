import React from 'react'

const Create = () => {



  return (
    <section>
      <h1 className='page-title'>Create a New Post</h1>
      <form action="">
        <input className='title-input' placeholder='Title of Post' />
        <textarea className='description-input' placeholder='Description' />
        <textarea className='code-input' placeholder='Code Block' />
        <div className='button-nav'>
          <button className='button'>Clear</button>
          <button className='button'>Post it</button>
        </div>
      </form>
    </section>
  )
}

export default Create
