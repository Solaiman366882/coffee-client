import './NewCoffee.css'
const NewCoffee = () => {
    return (
    <div>
            
        <section className="contact-section py-10">
            <div className=" max-w-screen-xl mx-auto">
            <div className="table-heading">
            <h4>Add New Coffee</h4>
            <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at <br /> its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed <br /> to using Content here.</p>
            </div>
                <form action="">
                    <div className="grid grid-cols-2 gap-5">
                        <div className="col-6">
                            <label htmlFor="Name">Name</label>
                            <input type="text" id="Name" placeholder="enter coffee name" />
                            <label htmlFor="Supplier">Supplier</label>
                            <input type="text" id="Supplier" placeholder="enter coffee Supplier" />
                            <label htmlFor="Category">Category</label>
                            <input type="text" id="Category" placeholder="enter coffee Category" />
                        </div>
                        <div className="col-6">
                            <label htmlFor="Chef">Chef</label>
                            <input type="text" id="Chef" placeholder="enter coffee Chef" />
                            <label htmlFor="test">Taste</label>
                            <input type="text" id="test" placeholder="Enter coffee taste" />  
                            <label htmlFor="test2">Details</label>
                            <input type="text" id="test2" placeholder="Enter coffee details" />
                        </div>
                        <div className=' col-span-2'>
                            <label htmlFor="test2">Photo</label>
                            <input type="text" id="test3" placeholder="Enter photo URL" />
                            <input type="submit" value="Add Coffee" className='c-btn mt-5 border border-black' />
                        </div>
                        
                    </div>
                </form>
            </div>
        </section>


     </div>
    );
};

export default NewCoffee;