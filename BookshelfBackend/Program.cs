using Microsoft.EntityFrameworkCore;

namespace BookshelfBackend
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Dodaj DbContext
            builder.Services.AddDbContext<AppDbContext>(options =>
                options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

            builder.Services.AddControllers();

            var app = builder.Build();

            app.MapControllers();

            app.UseStaticFiles(); // Do ok³adek - styatycznych plików DB

            app.Run();

        }
    }
}
