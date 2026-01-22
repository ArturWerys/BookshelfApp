using BookshelfBackend;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class BooksController : ControllerBase
{
    private readonly AppDbContext _context;

    public BooksController(AppDbContext context)
    {
        _context = context;
    }

    // Wszystkie książki

    [HttpGet]
    public async Task<IActionResult> GetBooks()
    {
        var books = await _context.Books.ToListAsync();
        return Ok(books);
    }

    // Jedna książka 

    [HttpGet("{id:int}")]
    public async Task<ActionResult<Book>> GetBook(int id)
    {
        var book = await _context.Books.FindAsync(id);
        if (book == null)
        {
            return NotFound();
        }
        return book;
    }


    // Wyszukiwanie książek po nazwie 
    [HttpGet("search")]
    public async Task<ActionResult<IEnumerable<Book>>> SearchBooks([FromQuery] string query)
    {
        var books = await _context.Books
            .Where(b => b.Title.ToLower().Contains(query.ToLower()))
            .ToListAsync();

        return books;
    }

    // Dodawanie książek do bazy
    [HttpPost("with-cover")]
    [Consumes("multipart/form-data")]
    public async Task<IActionResult> AddBookWithCover(
    [FromForm] CreateBookWithCover newBook,
    [FromForm] IFormFile cover)
    {
        if (cover == null || cover.Length == 0)
            return BadRequest("Cover image is required");

        var uploadsPath = Path.Combine("wwwroot", "covers");
        Directory.CreateDirectory(uploadsPath);

        var fileExtension = Path.GetExtension(cover.FileName);
        var fileName = $"{Guid.NewGuid()}{fileExtension}";
        var filePath = Path.Combine(uploadsPath, fileName);

        using (var stream = new FileStream(filePath, FileMode.Create))
        {
            await cover.CopyToAsync(stream);
        }

        var book = new Book
        {
            Title = newBook.Title,
            Author = newBook.Author,
            IsRead = newBook.IsRead,

            ReadDate = newBook.IsRead ? newBook.ReadDate : null,
            Rating = newBook.IsRead ? newBook.Rating : null,
            Review = newBook.IsRead ? newBook.Review : null,

            LiteraryGenre = newBook.LiteraryGenre,
            CoverPath = $"/covers/{fileName}"
        };


        _context.Books.Add(book);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetBook), new { id = book.Id }, book);
    }


}