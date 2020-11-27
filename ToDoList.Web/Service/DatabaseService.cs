using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;
using ToDoList.Web.Entities;
using ToDoList.Web.Models;

namespace ToDoList.Web.Service
{
    public interface IDatabaseService
    {
        Task<List<User>> GetUserCredentials();
    }

    public class DatabaseService
    {
        private readonly IMongoCollection<User> _users;

        public DatabaseService(IToDoListDatabaseSettings settings)
        {
            var client =  new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _users = database.GetCollection<User>("user_credentials");
        }

        public async Task<List<User>> GetUserCredentials()
        {
            return await _users.Find(Builders<User>.Filter.Empty).ToListAsync();
        }
    }
}
