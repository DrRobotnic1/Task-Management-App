using issueTrackingSystem.Models;
using Microsoft.EntityFrameworkCore;

namespace issueTrackingSystem.Extensions
{
  public static class ModelBuilderExtensions
  {
    public static void SeedStatuses(this ModelBuilder modelBuilder)
    {
      modelBuilder.Entity<Status>().HasData(
          new Status { Id = 1, Name = "Open" },
          new Status { Id = 2, Name = "In Progress" },
          new Status { Id = 3, Name = "Blocked" },
          new Status { Id = 4, Name = "Resolved" },
          new Status { Id = 5, Name = "Closed" },
          new Status { Id = 6, Name = "Reopened" }
      );
    }
  }
}
