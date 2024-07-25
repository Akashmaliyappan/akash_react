import React from 'react'





const Bikes = [
    {
        id: 1,
        bikeimage: './src/assets/r15.jpg',
        name: 'R15',
        color: 'Blue',
        year: '2023',
        Price: '1,85,000',
        des : 'Yamaha R15 V4 is powered by 155 cc engine. This R15 V4 engine generates a power of 18.4 PS @ 10000 rpm and a torque of 14.2 Nm @ 7500 rpm. The claimed mileage of R15 V4 is 60.56 kmpl. Yamaha R15 V4 gets Disc brakes in the front and rear.'
    },

    {
        id: 2,
        bikeimage: './src/assets/duke.jpg',
        name: 'DUKE',
        color: 'Orange',
        year: '2023',
        Price: '2,89,000',
        des : 'Duke is a male title either of a monarch ruling over a duchy, or of a member of royalty, or nobility. As rulers, dukes are ranked below emperors, kings, grand princes, grand dukes, and sovereign princes. As royalty or nobility, they are ranked below princes and grand dukes'
    },
    {
        id: 2,
        bikeimage: './src/assets/duke.jpg',
        name: 'DUKE',
        color: 'Orange',
        year: '2023',
        Price: '2,89,000',
        des : 'Duke is a male title either of a monarch ruling over a duchy, or of a member of royalty, or nobility. As rulers, dukes are ranked below emperors, kings, grand princes, grand dukes, and sovereign princes. As royalty or nobility, they are ranked below princes and grand dukes'
    },
    {
        id: 1,
        bikeimage: './src/assets/r15.jpg',
        name: 'R15',
        color: 'Blue',
        year: '2023',
        Price: '1,85,000',
        des : 'Yamaha R15 V4 is powered by 155 cc engine. This R15 V4 engine generates a power of 18.4 PS @ 10000 rpm and a torque of 14.2 Nm @ 7500 rpm. The claimed mileage of R15 V4 is 60.56 kmpl. Yamaha R15 V4 gets Disc brakes in the front and rear.'
    },
];


const Bike = () => {
    return (
        <div>
            <h2 className='text-white text-5xl my-5'>New Bikes</h2>
            <ul className='grid grid-cols-2 gap-9 mt-9'>
                {Bikes.map((bike) => (
                    <li key={bike.id}>
                        <div className='flex justify-center'>
                        <img src={bike.bikeimage} alt='' className=' flex w-screen-xl h-96 object-cover rounded-2xl mb-1  ' />
                        </div>
                   
                        <div className='flex justify-between mx-6'>
                            <h2 className='text-gray-800'>{bike.color}</h2>
                            <h3 className='text-gray-800'>{bike.year}</h3>
                        </div>
                        <h2 className='text-white text-2xl font-bold'>{bike.name}</h2>
                        <h2 className='text-gray-300 text-xl font-medium'>₹{bike.Price}</h2>
                        <p className='text-slate-700 text-sm px-2'>{bike.des}</p>
                    </li>
                )
                )}
            </ul>
        </div>
    )
}

export default Bike