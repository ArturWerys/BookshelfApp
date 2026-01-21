using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BookshelfBackend.Migrations
{
    /// <inheritdoc />
    public partial class AddIsReadToBook : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsRead",
                table: "Books",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsRead",
                table: "Books");
        }
    }
}
