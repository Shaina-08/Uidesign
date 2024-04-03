import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const CardDarkRow: React.FC = () => {
  return (
    <div>
    <div className="flex flex-wrap justify-center flex-row w-full" style={{margin:"0"}}>
      {[1, 2, 3, 4].map((index) => (
        <Card key={index} className="shadow-md rounded-none m-2 " style={{ width:"230px" ,backgroundColor: '#3B3E47' }}>
          <CardHeader className="p-2">
          <img src={"/" + index + "_"+ index + ".png"} alt={`Image ${index}`} />
            <CardTitle className="text-lg">Sacramento River Cats</CardTitle>
          </CardHeader>
          <CardContent
          style={{ backgroundColor: '#292B32' , margin:"10px" }}
           className="flex flex-col md:flex-row justify-between  p-3 space-y-4 md:space-y-0 md:space-x-4" 
          >
            <div className="md:flex items-center space-y-2 md:space-y-0 md:space-x-4">
              <div className="text-sm">
                <CardDescription>Total Events</CardDescription>
                <CardTitle className="text-sm">48 Events</CardTitle>
              </div>
              <div className="text-sm">
                <CardDescription>Sport</CardDescription>
                <CardTitle className="text-sm">Baseball</CardTitle>
              </div>
            </div>
          </CardContent>
        </Card>

      ))}
      <Card className="shadow-md rounded-none m-2 " style={{ width:"230px",backgroundColor: '#3B3E47' }}>
          <CardHeader className="p-2">
          <img src={"/5.png"} alt={"Group 1996.png"} />
          </CardHeader>
         
        </Card>
      
    </div>
        <button style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: '#2C9CF0', color: 'white', margin: '20px 45%' }}>
     See More
   </button>
    </div>
  );
};

export default CardDarkRow;
