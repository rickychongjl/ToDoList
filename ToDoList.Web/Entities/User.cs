using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace ToDoList.Web.Entities
{
    public class User
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string UserId { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        [JsonIgnore]
        public string Password { get; set; }

        public User(string firstName, string lastName, string username, string email, string password)
        {
            Firstname = firstName;
            Lastname = lastName;
            Username = username;
            Email = email;
            Password = password;
            UserId = string.Empty;
        }
    }
}
