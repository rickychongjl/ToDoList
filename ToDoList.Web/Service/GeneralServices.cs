using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDoList.Web.Models;

namespace ToDoList.Web.Service
{
    public class GeneralServices
    {
        public void getAltlasContent()
        {
            var client = new MongoClient("mongodb+srv://test-user:warcraft5688@cluster0.6sjg7.mongodb.net/sample_airbnb?retryWrites=true&w=majority");
            var database = client.GetDatabase("test"); 
        }
    }
}
