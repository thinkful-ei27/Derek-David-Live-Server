import React from 'react'


export default function SearchForm(props) {
    return (
        <form onSubmit={(e)=> e.preventDefault()}>
            <label>Search 
                <input onChange={(e) => props.handleChange(e)}type="text" placeholder="Dale Cooper"/>
            </label>
        </form>
    )
}