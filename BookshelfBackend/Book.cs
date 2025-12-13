using System;
using System.ComponentModel.DataAnnotations;

public class Book
{
    [Key] 
    public int Id { get; set; }

    [Required]
    public string Title { get; set; }

    public string Author { get; set; }

    public string Review { get; set; }

    public DateTime ReadDate { get; set; } 

    public int Rating { get; set; } 

    public string CoverPath { get; set; }
}
