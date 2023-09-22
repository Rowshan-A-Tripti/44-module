import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
    
        const priceOptions = [
          {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
              "Access to cardio and strength training equipment",
              "Locker room and shower facilities",
              "Basic fitness assessment"
            ]
          },
          {
            "id": 2,
            "name": "Silver Membership",
            "price": 49.99,
            "features": [
              "Access to all equipment, including group fitness classes",
              "Personal training session (1 per month)",
              "Nutritional consultation",
              "Locker and towel service"
            ]
          },
          {
            "id": 3,
            "name": "Gold Membership",
            "price": 79.99,
            "features": [
              "Unlimited access to all equipment and classes",
              "Two personal training sessions per month",
              "Monthly fitness assessment and progress tracking",
              "Nutritional plan and supplement discounts",
              "Sauna and spa access"
            ]
          }
        ]
      
      
    return (
        <div>
            <h2 className="text-5xl">Best Prices in the town</h2>
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;