import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const CollectionSpotDark: React.FC = () => {  
    return (
        
    <div className="flex flex-wrap justify-center flex-row " style={{ background:'linear-gradient(180deg, #253B3D, #221A2C)', padding: "40px" }}>
      <h1 className="text-5xl font-bold text-center w-full">
        Collection Spotlight</h1>
      <p className="text-sm text-center w-full" style={{ padding: "30px 120px" }}>
        Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!
      </p>

      {[1, 2, 3].map((index) => (
        <Card key={index} className=" shadow-md  m-2" style={{ margin:"15px" ,width:"260px" ,backgroundColor:"#3B3E47" }}>
          <CardHeader className="p-2 relative "    >
          
            <div className="absolute w-fullh-1 bg-gray-400 dark:bg-gray-700 bottom-0 left-0 right-0"></div>
            {/* <img src="`/${index}`" alt={`Image ${index}`} /> */}
            <img src={"/" + index + ".png"} alt={`Image ${index}`} />

            <CardTitle className="text-lg md:flex items-center justify-center"
            style={{ width:"90%", margin:"5%", borderRadius: '5px', border: 'none' , color:"white"}}>

Las Vegas Aviators            
            </CardTitle>

          </CardHeader>
 
          <CardContent
          >
              <div className="text-sm flex flex-col items-center justify-center" style={{ color: "white" }}>
  <CardTitle className="text-sm mb-2">Oct 15 | SUN | 4:30PM </CardTitle>
  <CardDescription className="text-center">Las Vegas Ballpark, Las Vegas, Nevada</CardDescription>
</div>
              
          </CardContent>
          <button 
style={{ width:"90%", margin:"5%" ,backgroundColor: 'black', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none' }}>
  Take Flight Collection
</button>
          
        </Card>
      ))}
    </div>
     
   
  );
};

export default CollectionSpotDark;
