using Microsoft.EntityFrameworkCore;

namespace Angular_Employees_Final.Models
{
    public class EmployeeContext : DbContext
    {
        public EmployeeContext(DbContextOptions<EmployeeContext> options): base(options)
        {
        }

        public DbSet<Employee> Employees { get; set; }
    }
}
