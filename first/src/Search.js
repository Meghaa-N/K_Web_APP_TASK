import Fetch_url from "./Fetch";

function Search()
{
    return(
        
        <div>
      
      <li className="tabs"><a href="">About</a></li>
      <li className="tabs"><a href="">Contact</a></li>
      <li className="tabs"><a href="">SIGN UP</a></li>
      <input id='city_input' type='text' ></input>
      <i className='fa fa-search icon' onClick={Fetch_url}></i>
      </div>
      )
}

export default Search;