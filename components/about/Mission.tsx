import Image from 'next/image'
import React from 'react'

const MissionAndVision = () => {
  return (
    <section>
    <div>
        <h4>Mission & Vision</h4>
      <h2>Muslim Helper's Foundation</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolor 
        voluptates quod totam accusamus eligendi quae eius expedita facere,
        .</p>
    </div>

    <div>
        <article>
            <h2>Our Vision</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem voluptatum error illo nam, minima veritatis nihil quaerat quis distinctio voluptate tempora iusto, quae non vero qui enim sit facilis modi.
            </p>
        </article>

        <Image
                src="/images/hands.png"
                alt="Hand Spread"
                width={50}
                height={100}
                className="rounded-lg shadow-lg object-cover w-full h-auto"
        />

        <Image
                src="/images/hands.png"
                alt="Hand Spread"
                width={50}
                height={100}
                className="rounded-lg shadow-lg object-cover w-full h-auto"
        /> 
        
        <article>
            <h2>Our Mission</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem voluptatum error illo nam, minima veritatis nihil quaerat quis distinctio voluptate tempora iusto, quae non vero qui enim sit facilis modi.
            </p>
        </article>
        
        </div>
      
    </section>
  )
}

export default MissionAndVision
