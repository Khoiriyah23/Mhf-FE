import Link from 'next/link';
import Button from '../Button'

const Hero = () => {
  return (
<section className="text-center bg-[rgba(252,255,246,0.97)] py-10 pt-[100px]">
<h1 className="text-4xl font-bold mb-4">
        Serving <span className="text-green-600">Humanity</span> In The Path <br/>
        Of Allah (SWT)
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Neque aut nos
      </p>
      <div className="mb-6">
        <Button 
          type="button" 
          title="Donate" 
          icon="" 
          variant="green"
          className="px-6 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 transition"
        />
      </div>
      <div className="mt-8">
        <img 
          src="/images/hero-img.png" 
          alt="Humanitarian Act" 
          className="rounded-lg mx-auto w-full max-w-4xl"
        />
      </div>
    </section>
  )
}

export default Hero;
