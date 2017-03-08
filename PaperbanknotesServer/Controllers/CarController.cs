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
        public IActionResult Get(long id)
        {
            var item = CarItems.Find(id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }

        //// POST api/car
        //[HttpPost]
        //public void Post([FromBody]string value)
        //{
        //}

        //// PUT api/car/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE api/car/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
