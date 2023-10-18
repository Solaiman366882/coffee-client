// import { data } from 'autoprefixer';
import Swal from 'sweetalert2';
import './NewCoffee.css'

const NewCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const chef = form.chef.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name,supplier,category,chef,taste,details,photo};

        console.log(newCoffee);

        //send new coffee to server
        fetch('http://localhost:5000/coffee',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success !',
                        text: 'Coffee added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
                console.log(data);
            })
    }

    return (
    <div>
            
        <section className="contact-section py-10">
            <div className=" max-w-screen-xl mx-auto">
            <div className="table-heading">
            <h4>Add New Coffee</h4>
            <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at <br /> its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed <br /> to using Content here.</p>
            </div>
                <form onSubmit={handleAddCoffee}>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="col-6">
                            <label htmlFor="Name">Name</label>
                            <input type="text" id="Name" name='name' placeholder="enter coffee name" />
                            <label htmlFor="Supplier">Supplier</label>
                            <input type="text" id="Supplier" name='supplier' placeholder="enter coffee Supplier" />
                            <label htmlFor="Category">Category</label>
                            <input type="text" id="Category" name='category' placeholder="enter coffee Category" />
                        </div>
                        <div className="col-6">
                            <label htmlFor="Chef">Chef</label>
                            <input type="text" id="Chef" name='chef' placeholder="enter coffee Chef" />
                            <label htmlFor="test">Taste</label>
                            <input type="text" id="test" name='taste' placeholder="Enter coffee taste" />  
                            <label htmlFor="test2">Details</label>
                            <input type="text" id="test2" name='details' placeholder="Enter coffee details" />
                        </div>
                        <div className=' col-span-2'>
                            <label htmlFor="test2">Photo</label>
                            <input type="text" id="test3" name='photo' placeholder="Enter photo URL" />
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