import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const CardLightRow: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center flex-row w-full">
      {[1, 2, 3, 4].map((index) => (
        <Card key={index} className="shadow-md rounded-none m-2 " 
        style={{ backgroundColor: '#FFFFFF' }}>
          <CardHeader className="p-2">
          <img src={"/" + index + "_"+ index + ".png"} alt={`Image ${index}`} />
            <CardTitle className="text-lg">Sacramento River Cats</CardTitle>
          </CardHeader>
          <CardContent
          style={{ backgroundColor: '#F7F7F8' , margin:"10px" }}
           className="flex flex-col md:flex-row justify-between  p-3 space-y-4 md:space-y-0 md:space-x-4" 
          >
            <div className="md:flex items-center space-y-2 md:space-y-0 md:space-x-4" >
              <div className="text-sm" >
                <CardDescription >Total Events</CardDescription>
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
       <Card className="shadow-md rounded-none m-2 " 
        style={{ backgroundColor: '#FFFFFF' }}>
          <CardHeader className="p-2">
          <img src={"/Group 1574.png"} alt={"5.png"} />
          </CardHeader>
        
        </Card>
        <button style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: '#2C9CF0', color: 'white', margin: '20px' }}>
        See More
      </button>
    </div>
  );
};

export default CardLightRow;
