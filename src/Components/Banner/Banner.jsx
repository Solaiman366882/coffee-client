import icon1 from '../../assets/images/icons/1.png'
import icon2 from '../../assets/images/icons/2.png'
import icon3 from '../../assets/images/icons/3.png'
import icon4 from '../../assets/images/icons/4.png'

const Banner = () => {
    return (
        <section className="w-full bg-rose-50 bg-banner bg-cover bg-no-repeat ">
            <div className=" max-w-screen-xl mx-auto ">
                <div className="banner-area flex justify-end items-center min-h-[90vh]">
                    <div className="flex-1"></div>
                    <div className="banner-left flex-1">
                        <h2 className=" text-5xl text-white ">Would you like a Cup of Delicious Coffee?</h2>
                        <p className="text-white my-5">Its coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>

                        <button className="c-btn">Learn More</button>
                    </div>
                </div>

            </div>
            <div className="bg-[#ECEAE3] w-full py-12" >
                <div className=" max-w-screen-xl mx-auto">
                    <div className='grid grid-cols-4 gap-5'>
                       <div>
                            <img className='w-[70px]' src={icon1} alt="" />
                            <h3 className=' text-4xl text-[#1B1A1A] my-2'>Awesome Aroma</h3>
                            <p className='text-[#1B1A1A]'>You will definitely be a fan of the design & aroma of your coffee</p>
                       </div>
                       <div>
                            <img className='w-[70px]' src={icon2} alt="" />
                            <h3 className=' text-4xl text-[#1B1A1A] my-2'>High Quality</h3>
                            <p className='text-[#1B1A1A]'>We served the coffee to you maintaining the best quality</p>
                       </div>
                       <div>
                            <img className='w-[70px]' src={icon3} alt="" />
                            <h3 className=' text-4xl text-[#1B1A1A] my-2'>Pure Grades</h3>
                            <p className='text-[#1B1A1A]'>The coffee is made of the green coffee beans which you will love</p>
                       </div>
                       <div>
                            <img className='w-[70px]' src={icon4} alt="" />
                            <h3 className=' text-4xl text-[#1B1A1A] my-2'>Proper Roasting</h3>
                            <p className='text-[#1B1A1A]'>Your coffee is brewed by first roasting the green coffee beans</p>
                       </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;