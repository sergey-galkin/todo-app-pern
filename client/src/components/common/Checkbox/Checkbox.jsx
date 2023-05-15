import React from 'react'
import css from './Checkbox.module.css'

const Checkbox = ({ id, checked, onChange}) => {
  return (
    <label className={css.label}>
      <input type="checkbox" checked={checked} className={css.checkbox} id={id} onChange={onChange} />
      <div className={css.customCheckbox}></div>
      <div className={css.caption}>{id}</div>
    </label>
  )
}

export default Checkbox