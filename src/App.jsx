import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section>
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://image.cnbcfm.com/api/v1/image/106155519-1569844702744starshipanim2.gif?v=1569844789&w=929&h=523&vtcrop=y)' }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </section>

      <section className='relative min-h-screen bg-[url(https://www.teslarati.com/wp-content/uploads/2019/03/Starship-Saturn-Titan-burn-NASA-SpaceX-1-crop-3.jpg)] bg-no-repeat bg-cover bg-center bg-fixed'>
        <div className='overlay w-full h-full absolute top-0 bottom-0 bg-base-100 opacity-50'></div>
      </section>

      <section className='min-h-screen'>
        <div className="carousel rounded-box">
          <div className="carousel-item">
            <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Burger" />
          </div>
          <div className="carousel-item">
            <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Burger" />
          </div>
          <div className="carousel-item">
            <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Burger" />
          </div>
          <div className="carousel-item">
            <img src="/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Burger" />
          </div>
          <div className="carousel-item">
            <img src="/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Burger" />
          </div>
          <div className="carousel-item">
            <img src="/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Burger" />
          </div>
          <div className="carousel-item">
            <img src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Burger" />
          </div>
        </div>
      </section>

      <div className="diff aspect-[16/9]">
        <div className="diff-item-1">
          <div className="bg-primary text-primary-content text-9xl font-black grid place-content-center">DAISY</div>
        </div>
        <div className="diff-item-2">
          <div className="bg-base-200 text-9xl font-black grid place-content-center">DAISY</div>
        </div>
        <div className="diff-resizer"></div>
      </div>

    </>
  )
}

export default App
