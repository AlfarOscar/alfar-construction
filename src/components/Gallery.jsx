import React,{useState} from 'react'
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'
import {Link} from 'react-scroll'
function Gallery()  {

const slides = [

{url: 'https://theoscarino.files.wordpress.com/2023/03/img1.jpg?w=1024'

},
{ url: 'https://theoscarino.files.wordpress.com/2023/03/img2.jpg?w=1024'

},
 {url: 'https://theoscarino.files.wordpress.com/2023/03/img3.jpg?w=768'
},
{ url: 'https://theoscarino.files.wordpress.com/2023/03/img4.jpg?w=1024'

},
{ url: 'https://theoscarino.files.wordpress.com/2023/03/img5.jpg?w=1024'

},
{ url: 'https://theoscarino.files.wordpress.com/2023/03/img6.jpg?w=1024'
},
{ url: 'https://theoscarino.files.wordpress.com/2023/03/img7.jpg?w=1024'

},
{ url: 'https://theoscarino.files.wordpress.com/2023/03/img8.jpg?w=1024'

},
{ url: 'https://theoscarino.files.wordpress.com/2023/03/img9.jpg'},
{ url: 'https://theoscarino.files.wordpress.com/2023/03/img10.jpg?w=768'},

];
const [currentIndex, setCurrentIndex] = useState(0)
const prevSlide = () => {
  const isFirstSlide = currentIndex === 0;
  const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1;
  setCurrentIndex(newIndex);
}
const nextSlide = () => {
  const isLastSlide = currentIndex ===slides.length -1;
  const newIndex= isLastSlide ? 0 :currentIndex +1;
  setCurrentIndex(newIndex);
}
const goToSlide=(slideIndex) =>{
  setCurrentIndex(slideIndex);
}


  return (
    <div name='Gallery' className='w-full h-screen bg-[#272727]'>
    <div className='max-w-[1024px] h-[768px] w-full m-auto py-16 px-4 relative group group-hover bg-[#272727] margin-0 padding:0'>
      <div style={{backgroundImage:`url(${slides[currentIndex].url})` }} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>
    {/*Left Arrow*/}
    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
      <BsChevronCompactLeft onClick={prevSlide}  size={30}/>
    </div>
    {/*Right Arrow*/}
    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
      <BsChevronCompactRight onClick={nextSlide} size={30} />
    </div>
    <div className='flex top-4 justify-center py-2'>
      {slides.map((slide,slideIndex) =>(
        <div  key={slideIndex} onClick={() => goToSlide(slideIndex)} 
        className='text-2xl cursor-pointer'>
          <RxDotFilled />
        </div>
      ))}

    </div>
    <div className='text-[#8c8c8c] mx-auto flex flex-col justify-center items-center bg-[#272727]'>
        <h1>Have Any Questions?</h1>
        <Link to='contact' smooth={true} duration={500}>
        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#fca03d] hover:border-[#fca03d]'>Contact Me</button>
        </Link>
    </div>

          </div>
          </div>
  );
}

export default Gallery;