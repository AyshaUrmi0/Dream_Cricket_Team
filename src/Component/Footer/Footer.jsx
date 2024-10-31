
import './Footer.css';
import footerlogo from '../../assets/logo-footer.png';

function Footer() {
    return (
        <div className="relative m-4">
           
            <div className="mb-3 border newsletter-container border-white-200">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold">Subscribe to our Newsletter</h2>
                    <p className="mt-2 opacity-70">Get the latest updates and news right in your inbox!</p>

                   
                    <div className="flex justify-center mt-6">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="w-full max-w-xs mr-3 input input-bordered" 
                        />
                        <button className="text-white btn bg-gradient-to-r from-pink-500 to-yellow-500">Subscribe</button>
                    </div>
                </div>
            </div>

           
            <footer className="footer-section">
                <div>
                <img src={footerlogo} alt="" className='mx-auto mt-7 h-200px w-300px'/>

                </div>
                <div className="container grid grid-cols-3 gap-8 px-6 py-10 mx-auto">
                    
                  
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">About Us</h3>
                        <p className="text-sm opacity-70">
                            We are a passionate team dedicated to providing the best services to our customers.
                        </p>
                    </div>

                   
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
                        <ul>
                            <li className="mb-2"><a href="#" className="hover:text-gray-300">Home</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-gray-300">Services</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-gray-300">About</a></li>
                            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
                        </ul>
                    </div>

                  
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Subscribe</h3>
                        <p className="mb-4 text-sm opacity-70">
                            Subscribe to our newsletter for the latest updates.
                        </p>
                        
                       
                        <div className="flex flex-wrap justify-center md:justify-start">
  <input 
    type="email" 
    placeholder="Enter your email" 
    className="w-full mb-3 md:w-1/2 lg:w-1/3 xl:w-1/4 md:mb-0 md:mr-3 input input-bordered"
  />
  <button className="text-white btn bg-gradient-to-r from-pink-500 to-yellow-500">
    Subscribe
  </button>
</div>
                    </div>
                </div>

               
                <div className="footer-bottom">
                    ©2024 Your Company. All Rights Reserved.
                </div>
            </footer>
        </div>
    );
}

export default Footer;
