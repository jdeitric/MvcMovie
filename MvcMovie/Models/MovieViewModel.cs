using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MvcMovie.Models
{
    public class MovieViewModel
    {
        public Movie Movie { get; set; }  
        
        public List<Review> Reviews { get; set; }

    }
}
