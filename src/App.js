import logo from './logo.svg';
import img1 from './images/main-logo.png'
import img2 from './images/head-logo.png'
import './App.css';

function App() {
  return (

      <>
        <header class="">
             <img src={img2} className='img2' alt=""/>
            <ul class="nav-list">
                <li><a href="#home">HOME</a></li>
                <li><a href="#multipurpose" class="active">MULTIPURPOSE</a></li>
                <li><a href="#stylish">STYLISH</a></li>
                <li><a href="#onepage">ONE PAGE</a></li>
                <li><a href="#feature">FEATURES</a></li>
                <li><a href="#generate">GENERATE COLOR</a></li>
            </ul>
            <div class="bx bx-menu" id="menu-icon"></div>
        </header>
      
         <section class="home" id="home">
             <div class="home-text">
                 <img src={img1} className='img1' alt=""/>
                 <div class="text-wrapper">
                     <h1 class=" box b1">WELCOME TO MAGESTY</h1>
                     <h1 class="box b2">THE LARGE OF MULTIPURPOSE & ONE PAGE TEMPLATE</h1>
                     <h1 class="box b3">FOR MANY FOODS AND DRINKS</h1>
                 </div>
                 <h2>THE LARGEST TEMPLATE FOR <br></br>
                     FOOD & DRINKS RESTAURANT BUSINESS</h2>
                 <i class="bx bx-chevrons-down box b4"></i>
             </div>
 
         </section>
        </>

  
  );
}

export default App;
