using System;
using ToDoList.Web.Entities;

namespace ToDoList.Web.Models
{
    public class AuthenticateResponse
    {
        public string UserId { get; set; }
        public string Token { get; set; }
        public string ResponseMessage { get; set; }
        public bool IsAuthentic { get; set; }
        public AuthenticateResponse(User user, string token, string responseMessage, bool isAuthentic)
        {
            UserId = user.UserId;
            Token = token;
            ResponseMessage = responseMessage;
            IsAuthentic = isAuthentic;
        }
        public AuthenticateResponse(string responseMessage, bool isAuthentic)
        {
            ResponseMessage = responseMessage;
            IsAuthentic = isAuthentic;
        }
    }
}
