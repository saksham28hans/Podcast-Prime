import React from 'react'
import Header from '../HeaderF/Header'
import SearchListItem from './searchListItem'

function SearchList(props) {
  return (
   <>
     <Header/>
        <div>
            <div className="container">
            <div className="row">
                {
                props.podcasts.map((element, idx) => {
                    return <div className="col-md-4">
                    <SearchListItem movie={element}  id={idx} />
                    </div>
                })}
            </div>
            </div>
        </div>
   </>
  )
}

export default SearchList