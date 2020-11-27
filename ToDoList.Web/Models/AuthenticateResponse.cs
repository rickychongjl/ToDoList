using System;
using ToDoList.Web.Entities;

namespace ToDoList.Web.Models
{
    public class AuthenticateResponse
    {
        public string UserId { get; set; }
        public string Token { get; set; }

        public AuthenticateResponse(User user, string token)
        {
            UserId = user.UserId;
            Token = token;
        }
    }
}
