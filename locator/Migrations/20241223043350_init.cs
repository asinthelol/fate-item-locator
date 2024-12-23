using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace locator.Migrations
{
    /// <inheritdoc />
    public partial class init : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ItemDropLocations",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    itemId = table.Column<int>(type: "int", nullable: false),
                    questId = table.Column<int>(type: "int", nullable: false),
                    ap_drop = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    drop_rate = table.Column<decimal>(type: "decimal(18,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ItemDropLocations", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Items",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    rarity = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    type = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    image = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Items", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Quests",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    area = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ap = table.Column<int>(type: "int", nullable: false),
                    bp_drop = table.Column<decimal>(type: "decimal(18,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Quests", x => x.id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ItemDropLocations");

            migrationBuilder.DropTable(
                name: "Items");

            migrationBuilder.DropTable(
                name: "Quests");
        }
    }
}
