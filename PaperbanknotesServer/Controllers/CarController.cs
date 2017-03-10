using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PaperbanknotesServer.Database;
using PaperbanknotesServer.model;

namespace PaperbanknotesServer.Controllers
{
    [Route("api/[controller]")]
    public class CarController : Controller
    {
        public ICarRepository CarItems { get; set; }
        public CarController(ICarRepository carItems)
        {
            CarItems = carItems;
        }

        // GET api/car
        [HttpGet]
        public IEnumerable<Car> GetAll()
        {
            return CarItems.GetAll();
        }

        // GET api/car/5
        [HttpGet("{id}")]
        public IActionResult GetById(long id)
        {
            var item = CarItems.Find(id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }

        // POST api/car
        [HttpPost]
        public IActionResult Create([FromBody] Car car)
        {
            if (car == null)
            {
                return BadRequest();
            }

            CarItems.Add(car);

            return CreatedAtRoute("GetCar", new { id = car.id, car }, car);
        }

        // PUT api/car/5
        [HttpPut("{id}")]
        public IActionResult Update(long id, [FromBody] Car car)
        {
            if (car == null || car.id != id)
            {
                return BadRequest();
            }

            var foundCar = CarItems.Find(id);
            if (foundCar == null)
            {
                return NotFound();
            }

            foundCar.naam = car.naam;
            foundCar.merk= car.merk;
            foundCar.bouwjaar= car.bouwjaar;
            foundCar.aantal_deuren = car.aantal_deuren;
            foundCar.originele_waarde = car.originele_waarde;
            foundCar.prijs = car.prijs;

            CarItems.Update(foundCar);
            return new NoContentResult();
        }

        // DELETE api/car/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            var car = CarItems.Find(id);
            if (car == null)
            {
                return NotFound();
            }

            CarItems.Remove(id);

            return new NoContentResult();
        }
    }
}
