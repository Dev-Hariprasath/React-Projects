

const Input = ({
    colorValue, setColorValue, setHexvalue, isDarkText, setIsDarkText
}) => {
  return (
    <form onSubmit={(e)=> e.preventDefault}>
        <label>Add a Color Name</label>
        <input 
          autoFocus
          type='text'
          placeholder='Add color name'
          required 
          value={colorValue}
          onChange={(e) =>{
            setColorValue(e.target.value);
            setHexvalue(colorNames(e.target.value));
          }}
        />
        <button
           type="button"
           onClick={()=> setIsDarkText(!isDarkText)}
        >
            Toggle Text Color    
        </button>
      
    </form>
  )
}

export default Input
