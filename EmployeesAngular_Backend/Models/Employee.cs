using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Angular_Employees_Final.Models
{
    public class Employee
    {
        [Key]
        public int EmpId { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string EmpName { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string EmpSurname { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string EmpJob { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(20)")]
        public float EmpSalary { get; set; }
    }
}
