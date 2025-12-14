using Microsoft.EntityFrameworkCore;

// Dzięki temu Entity Framework Core potrafi automatycznie tłumaczyć operacje C# na SQL
public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }
    // Tworzenie tabeli books
    public DbSet<Book> Books { get; set; } 
}
