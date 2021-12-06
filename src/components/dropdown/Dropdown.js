function Dropdown(props){
  const options = [];
  for(const key in props.options){
    const option = 
    {
      value: key,
      text: props.options[key]["text"]
    }
    options.push(option);
  }
  return <div>
      <label>{props.header}: </label>
      <select>
          {options.map(
            (option)=><option value={option.value}>{option.text}</option>
          )}
      </select>
  </div>
}
export default Dropdown;