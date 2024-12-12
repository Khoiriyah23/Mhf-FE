import Image from 'next/image'
import React from 'react'
import Button from '../Button'

const OngoingPrograms = () => {
  return (
    <section>
        <article>
            <h1>Our Ongoing Programs</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, 
                autem beatae. Temporibus id natus hic fuga qui animi, voluptas voluptatum 
                porro repellat dolorem praesentium aliquam ad distinctio perspiciatis 
                autem modi.</p>
        </article>

        <div>
            <div>
                <Image src='' alt='' width={100} height={30}/>
                <h6>Support the annual Ramadan Feeding Program </h6>

                {/* {donation progress} */}

                {/* {Amount Raised and donate button} */}
                <span>Raised: #500,000</span>
                <Button 
                    type="button" 
                    title="Donate" 
                    icon="" 
                    variant="green"
                    className="px-6 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 transition"
                />

            </div>
        </div>
      
    </section>
  )
}

export default OngoingPrograms
