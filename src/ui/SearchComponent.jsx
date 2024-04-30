

export const SearchComponent = () => {
  return (
<div className="input-group m-4 rounded-5">
  <span className="input-group-text rounded-start-pill" 
  id="basic-addon1"
  style={{backgroundColor: 'white'}}
  >
    @
</span>
  <input type="text" 
  className="form-control rounded-end-pill" 
  placeholder="Buscar un farmaco..." 
  aria-label="Username" 
  aria-describedby="basic-addon1"
  style={{borderLeft: 'transparent'}}
  
  />
</div>
  )

}
