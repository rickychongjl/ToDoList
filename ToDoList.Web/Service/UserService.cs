using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDoList.Web.Entities;
using ToDoList.Web.Helpers;
using ToDoList.Web.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using MongoDB.Bson;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;

namespace ToDoList.Web.Service
{
    public interface IUserService
    {
        Task<AuthenticateResponse> Authenticate(AuthenticateRequest model);
    }
    public class UserService: IUserService
    {
        private List<User> _users;
        private readonly AppSettings _appSettings;
        public UserService (IOptions<AppSettings> appSettings)
        {
            _appSettings = appSettings.Value;
        }

        private async Task<List<User>> GetUserCredentials()
        {
            var client = new MongoClient("mongodb+srv://test-user:warcraft5688@cluster0.6sjg7.mongodb.net/ToDoList?retryWrites=true&w=majority");
            var collection = await client
                .GetDatabase("ToDoList")
                .GetCollection<User>("user_credentials")
                .Find(Builders<User>.Filter.Empty).ToListAsync();
            return collection;
        }
        public async Task<AuthenticateResponse> Authenticate(AuthenticateRequest model)
        {
             _users = await GetUserCredentials();
            var user =  _users.SingleOrDefault(user => string.Equals(user.Username, model.Username) && string.Equals(user.Password, model.Password));

            if (user == null) return null;

            var token = GenerateJwtToken(user);
            return new AuthenticateResponse(user, token);
        }
        private string GenerateJwtToken(User user)
        {
            // generate token that is valid for 7 days
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] { new Claim("id", user.Id.ToString()) }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
