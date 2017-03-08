using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PaperbanknotesServer.model;

namespace PaperbanknotesServer.Database
{
    public class CarRepository : ICarRepository
    {
        private readonly CarDatabaseContext carcontext;

        public CarRepository(CarDatabaseContext context)
        {
            carcontext = context;
            Add(new Car { Brand = "VolksWagen", Model = "Golf", Buildyear = 1990, Price = 5000 });
        }

        public void Add(Car item)
        {
            carcontext.CarDbItems.Add(item);
            carcontext.SaveChanges();
        }

        public Car Find(long key)
        {
            return carcontext.CarDbItems.FirstOrDefault(car => car.Key == key);
        }

        public IEnumerable<Car> GetAll()
        {
            return carcontext.CarDbItems.ToList();
        }

        public void Remove(long key)
        {
            var entity = carcontext.CarDbItems.First(car => car.Key == key);
            carcontext.CarDbItems.Remove(entity);
            carcontext.SaveChanges();
        }

        public void Update(Car item)
        {
            carcontext.CarDbItems.Update(item);
            carcontext.SaveChanges();
        }
    }
}
