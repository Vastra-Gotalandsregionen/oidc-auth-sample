using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace AuthSample.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UnprotectedController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new[] { "Hello", "from", "unprotected!" };
        }
    }
}
