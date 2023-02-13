import './FormInput.scss'

export default function FormInput({label, ...otherProps}) {

  return (
    <div className='form-input__group'>
      <input className="form-input__input" {...otherProps} />
      {
        label && 
        <label className={`${otherProps.value.length ? 'shrink' : ''} form-input__label`}>
          {label}
        </label>
      }
      
    </div>
  )
}
