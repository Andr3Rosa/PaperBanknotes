using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace PaperbanknotesServer.Database
{
    public class CarDatabaseContext : DbContext
    {
        public CarDatabaseContext(DbContextOptions<CarDatabaseContext> options) : base(options)
        {
        }

        public DbSet<model.Car> CarDbItems { get; set; }
    }
}
