using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;

namespace ToDoList.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        [HttpGet("atlas")]
        public List<BsonDocument> Get()
        {

            var client = new MongoClient("mongodb+srv://test-user:warcraft5688@cluster0.6sjg7.mongodb.net/sample_airbnb?retryWrites=true&w=majority");
            var database = client.GetDatabase("sample_airbnb");
            var collection = database.GetCollection<BsonDocument>("listingsAndReviews");
            var filter = Builders<BsonDocument>.Filter.Empty;
            var result = collection.Find(filter).ToList();
             return result;
        }
    }
}
