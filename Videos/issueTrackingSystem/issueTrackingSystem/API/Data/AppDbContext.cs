using issueTrackingSystem.Extensions;
using issueTrackingSystem.Models;
using Microsoft.EntityFrameworkCore;

namespace issueTrackingSystem.Data
{
  public class AppDbContext : DbContext
  {
    public AppDbContext(DbContextOptions<AppDbContext> options):base(options) { }
    public DbSet<Issue> issues { get; set; }
    public DbSet<Status> statuses { get; set; }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      base.OnModelCreating(modelBuilder);

      modelBuilder.SeedStatuses();
    }
  }
  
}
