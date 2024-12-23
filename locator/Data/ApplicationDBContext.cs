using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace locator.Data
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        {
        }
        public DbSet<Models.Items> Items { get; set; }
        public DbSet<Models.Quests> Quests { get; set; }
        public DbSet<Models.ItemDropLocations> ItemDropLocations { get; set; }
    }
}