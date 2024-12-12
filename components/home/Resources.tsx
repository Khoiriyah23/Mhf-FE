import React from 'react'
import Button from '../Button'

const Resources = () => {
  return (
    <section>
        <div>
            <article>
                <h1>Our Articles and Islamic Resources</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                     quia, laudantium obcaecati, consectetur beatae unde repellat sint
                </p>

            </article>

            <Button 
                    type="button" 
                    title="View All" 
                    icon="" 
                    variant="green"
                    className="px-6 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 transition"
                />
            
        </div>
      

      <div>
        <div 
            style={{backgroundImage: 'url("/images/dates.png")'}}
        >
            Simple Acts Of Kindness
        </div>

        <div
            style={{backgroundImage: 'url("/images/reading.png")'}}
        >
            <h3>Quranic Verses and Hadiths on Charity 
            In Islam</h3>

            <p>Check out quran verses, hadiths and sunnahs on charity </p>
        </div>

      </div>
    </section>
  )
}

export default Resources
