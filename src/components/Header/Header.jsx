import cart from '../../assets/cart.svg'
import './header.css'
import hero from '../../assets/hero.png'

function Header( ) {

    return (
   <>
    <div className='bg-header fixed-top '>
      <div className="container ">
      <header className='d-flex justify-content-between p-3 align-items-center bg-header'>
                <h1 className='h4'>PhoneWave Shop</h1>
               <div className='openModal'>
               <img src={cart} alt="Carrinho" height={28}  data-bs-toggle="modal" data-bs-target="#exampleModal"/>
               </div>
            </header>
      </div>
      </div>
      <div className='hero d-sm-none d-md-block fw-bold position-relative mt-5'>
         <img src={hero} alt="man listening to music" className='w-100'/>
         <div className='image-content'>
         <h2 className='h1'>Ouça o <span>incrível</span> som da música</h2>
         <p>
          experimente músicas como nunca antes
          </p>
         </div>
      </div>

    </>
    )
  }

  export default Header;