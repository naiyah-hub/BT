import Reac,{useState} from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css"


const SearchBar =(props)=>{
    const[input, setInput] = useState("")
    return(
        <>
            <div className="input-wrapper">
                {/* <FaSearch id="search-icon"/> */}
                <form onSubmit={props.searchBook} action="">
                    <input placeholder="Search up a book :)" value={input} onChange={props.handleSearch} type='text'/>
                </form>
            </div>
            
        </>
    )
}
export default SearchBar