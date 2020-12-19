using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDoList.Web.Entities;
using ToDoList.Web.Helpers;
using ToDoList.Web.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;

namespace ToDoList.Web.Service
{
    public interface IUserService
    {
        Task<AuthenticateResponse> Authenticate(AuthenticateRequest model);
        AuthenticateResponse GetTest();
        Task<bool> Register(RegisterRequest model);
    }
    public class UserService: IUserService
    {
        private List<User> _users;
        private readonly DatabaseService _databaseService;
        private readonly AppSettings _appSettings;
        public UserService (IOptions<AppSettings> appSettings, DatabaseService databaseService)
        {
            _appSettings = appSettings.Value;
            _databaseService = databaseService;
        }

        private async Task<List<User>> GetUserCredentials()
        {

            return await _databaseService.GetUserCredentials();
        }
        public async Task<AuthenticateResponse> Authenticate(AuthenticateRequest model)
        {
             _users = await GetUserCredentials();
            var user =  _users.SingleOrDefault(user => string.Equals(user.Username, model.Username) && string.Equals(user.Password, model.Password));

            if (user == null) return new AuthenticateResponse("Username or password was incorrect, please try again", false);

            var token = GenerateJwtToken(user);
            return new AuthenticateResponse(user, token, $"Welcome back, {user.Username}", true);
        }

        public AuthenticateResponse GetTest()
        {
            return new AuthenticateResponse("Well Hello there", false);
        }

        public async Task<bool> Register(RegisterRequest model)
        {
            var result = await _databaseService.CreateUser(model);
            if (result)
                return true;

            return false;
        }

        private string GenerateJwtToken(User user)
        {
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id),
                new Claim(ClaimTypes.Name, user.Username)
            };
            SymmetricSecurityKey key = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(_appSettings.Secret));
            SigningCredentials credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
            SecurityTokenDescriptor tokenDescriptor = new SecurityTokenDescriptor { Subject = new ClaimsIdentity(claims), Expires = DateTime.Now.AddHours(1), SigningCredentials = credentials };
            JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();
            SecurityToken token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
