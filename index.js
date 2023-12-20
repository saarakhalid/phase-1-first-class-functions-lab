// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  const createFareMultiplier = function(integer) {
    return function(fare) {
      return fare * integer;
    };
  };
  
  const fareDoubler = createFareMultiplier(2);

  const fareTripler = createFareMultiplier(3);
  
  const selectDifferentDrivers = function(drivers, selectorFunction) {
    return selectorFunction(drivers);
  };
  
  const driversArray = ["Kamau", "Jane", "Paul", "Jacob"];
  
  console.log(returnFirstTwoDrivers(driversArray)); 
  console.log(returnLastTwoDrivers(driversArray)); 
  console.log(selectDifferentDrivers(driversArray, returnFirstTwoDrivers));
  console.log(selectDifferentDrivers(driversArray, returnLastTwoDrivers)); 
  console.log(fareDoubler(10)); 
  console.log(fareTripler(10)); 
  