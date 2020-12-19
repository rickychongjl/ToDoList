using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ToDoList.Web.Models;
using ToDoList.Web.Service;

namespace ToDoList.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly IUserService _userService;
        public HomeController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("login")]
        public async Task<ActionResult> Authenticate([FromBody] AuthenticateRequest model)
        {
            var response = await _userService.Authenticate(model);

            return Ok(response);
        }

        [HttpPost("sign-up")]
        public async Task<ActionResult> Register([FromBody] RegisterRequest model)
        {
            var response = await _userService.Register(model);
            return Ok(response);
        }
        [Authorize]
        [HttpGet]
        public ActionResult GetTest()
        {
            var response = _userService.GetTest();

            return Ok(response);
        }
    }
}
