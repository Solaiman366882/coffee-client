import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import SingleCoffee from "../../Components/SingleCoffe/SingleCoffee";


const Home = () => {

    const coffees = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <div>
                <h1 className="text-center my-8 text-4xl">All Types of Coffee</h1>
                <div className="grid grid-cols-2 gap-5">
                    {
                        coffees?.map(coffee => <SingleCoffee key={coffee._id} coffee={coffee}></SingleCoffee>)
                    }
                </div>
            </div>
        </div>
        
    );
};

export default Home;