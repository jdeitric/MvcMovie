using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MvcMovie.Models
{
    public class ReviewModel
    {
        [Required]
        public int Id { get; set; }

        public string Name { get; set; }

        public string Comment { get; set; }

        public string MovieTitle { get; set; }
    }
}
