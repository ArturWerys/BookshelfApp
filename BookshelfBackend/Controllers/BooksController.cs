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

    [HttpGet]
    public async Task<IActionResult> GetBooks()
    {
        var books = await _context.Books.ToListAsync();
        return Ok(books);
    }

    
    [HttpGet("{id}")]
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


    [HttpPost]
    public async Task<IActionResult> AddBook(Book book)
    {
        _context.Books.Add(book);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetBooks), new { id = book.Id }, book);
    }
}