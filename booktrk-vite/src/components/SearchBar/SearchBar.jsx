import Reac,{useState} from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css"


const SearchBar =(props)=>{
    // const[input, setInput] = useState("")
    return(
        <>
            <div className="input-wrapper">
                {/* <FaSearch id="search-icon"/> */}
                <form onSubmit={props.searchBook} action="" >
                    <div className="search-container">
                        <input 
                        onChange={props.handleSearch}
                        style={{borderBottomColor: '#000000',
                        borderBottomWidth: 1}}
                        type='search'
                        placeholder="Search up a book :) ..." 
                        /> 
                    </div>
                    <div className="submit-box">
                        <button className="submit" type="submit">Submit</button>
                    </div>
                    
                </form>
            </div>
            
        </>
    )
}
export default SearchBar