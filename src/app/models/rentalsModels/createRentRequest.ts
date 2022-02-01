export interface CreateRentRequest{
    rentDate: Date,
    returnDate : Date,
    rentedKilometer: number,
    returnedKilometer: number,
    customerId: number,
    carId: number ,
    pickUpCityId: number,
    returnCityId: number,
    additionalServices: number[]

      
}