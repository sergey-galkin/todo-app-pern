import React from 'react'
import css from './Error.module.css'

const Error = () => {
  return (
    <div className={css.error}>
      Error in server request operation. <br />
      Try again later.
    </div>
  )
}

export default Error