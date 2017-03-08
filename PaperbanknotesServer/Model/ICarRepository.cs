using PaperbanknotesServer.model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PaperbanknotesServer.Database
{
    public interface ICarRepository
    {
        void Add(Car item);
        IEnumerable<Car> GetAll();
        Car Find(long key);
        void Remove(long key);
        void Update(Car item);
    }
}
