function FormInput(props) {
  return (
    <input 
      name={props.inputParam.name}
      // {props.inputParam.required && (required)}
      required
      minLength={props.inputParam.minLength}
      maxLength={props.inputParam.maxLength}
      placeholder={props.inputParam.placeholder}
      id={props.inputParam.idName}
      type={props.inputParam.type}
      className={props.inputParam.className}
      defaultValue={props.inputParam.value}
    />
  )
}

export default FormInput;