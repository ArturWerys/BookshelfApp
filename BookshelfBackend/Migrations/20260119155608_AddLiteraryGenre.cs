using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BookshelfBackend.Migrations
{
    /// <inheritdoc />
    public partial class AddLiteraryGenre : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "LiteraryGenre",
                table: "Books",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LiteraryGenre",
                table: "Books");
        }
    }
}
