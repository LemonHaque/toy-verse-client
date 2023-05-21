import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCard from './CategoryCard/CategoryCard';


const Category = () => {
    const [categories, setCategories] = useState([]);
    const [active, setActive] = useState('Sports')

    useEffect(() => {
        fetch(`https://toy-verse-server-delta.vercel.app/car/${active}`)
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [active])

    const handleSportCar = (event) => {
        event.preventDefault();
        setActive('Sports');
    }

    const handleNormalCar = (event) => {
        event.preventDefault();
        setActive('Normal');
    }

    const handleSuv = (event) => {
        event.preventDefault();
        setActive('SUV');

    }



    return (
        <div className='text-center my-20'>
            <h2 className='text-purple-600 text-5xl font-bold mb-4'>Shop By Category</h2>
            <p className='mb-8'>Here you can find your favorite cars that has arranged by your favourite category</p>

            <Tabs>

                <TabList>
                    <Tab onClick={handleSportCar}>Sports Car</Tab>
                    <Tab onClick={handleNormalCar}>Normal Car</Tab>
                    <Tab onClick={handleSuv}>Suv</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {
                            categories.map(category => <CategoryCard
                                key={category._id}
                                category={category}
                            ></CategoryCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {
                            categories.map(category => <CategoryCard
                                key={category._id}
                                category={category}
                            ></CategoryCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {
                            categories.map(category => <CategoryCard
                                key={category._id}
                                category={category}
                            ></CategoryCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Category;