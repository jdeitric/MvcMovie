﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MvcMovie.Models
{
    public class Review
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Comment { get; set; }

        public int MovieId { get; set; }
    }
}
