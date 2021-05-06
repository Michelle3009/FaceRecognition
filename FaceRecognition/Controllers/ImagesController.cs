using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Diagnostics;
namespace FaceRecognition.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImagesController : ControllerBase
    {
        [HttpPost, Route("")]  
        public object SendImage([FromBody] Data data) {
            Debug.WriteLine(data.Url);

            return Ok();
        }
    }
    public class Data { public string Url { get; set; } }
}
