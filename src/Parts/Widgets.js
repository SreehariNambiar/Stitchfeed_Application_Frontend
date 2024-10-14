import React from 'react'
import LoginSignup from '../Components/LoginSignup'
import './Widgets.css'
import TopTrending from '../Components/TopTrending'
import SuggestionsForYou from '../Components/SuggestionsForYou'
const Widgets = () => {
  return (
    <section className='widgets'>
      {/* <TopTrending/> */}
      <SuggestionsForYou/>

    </section>
  )
}

export default Widgets