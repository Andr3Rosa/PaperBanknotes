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
            Add(new Car { naam = "S model", merk = "Tesla", bouwjaar = 2014, aantal_deuren = 5, originele_waarde = 81100, prijs = 90000 });
            Add(new Car { naam = "Punto", merk = "Fiat", bouwjaar = 1980, aantal_deuren = 3, originele_waarde = 1100, prijs = 900000 });
        }

        public void Add(Car item)
        {
            carcontext.CarDbItems.Add(item);
            carcontext.SaveChanges();
        }

        public Car Find(long key)
        {
            return carcontext.CarDbItems.FirstOrDefault(car => car.id == key);
        }

        public IEnumerable<Car> GetAll()
        {
            return carcontext.CarDbItems.ToList();
        }

        public void Remove(long key)
        {
            var entity = carcontext.CarDbItems.First(car => car.id == key);
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
