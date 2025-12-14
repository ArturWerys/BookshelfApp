using Microsoft.EntityFrameworkCore;

namespace BookshelfBackend
{
    public class Program
    {
        // Konfiguracja i uruchomienie serwera

        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            
            builder.Services.AddDbContext<AppDbContext>(options =>
                options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

            builder.Services.AddControllers();

            var app = builder.Build();

            app.MapControllers();

            // Pozwala pobieraæ ok³adki jako statyczne obrazki

            app.UseStaticFiles(); 

            app.Run();

        }
    }
}
