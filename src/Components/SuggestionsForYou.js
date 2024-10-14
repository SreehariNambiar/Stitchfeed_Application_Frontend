import React from 'react'
import './Styles/SuggestionsForYou.css'
import PopularUserCard from './PopularUserCard'

const popularUsers = [1,1,1,1]
const SuggestionsForYou = () => {
  return (
    <div className='SuggestionsForYou'>
    <div className='sug-1'>
        <p>Suggestions for you</p>
        <p>View all</p>
    </div>
    <div className='popular-users'>
        {popularUsers.map((item) => {
            return(
                <PopularUserCard username={"adam"}/>
            )
        })}
    </div>

        </div>
  )
}

export default SuggestionsForYou