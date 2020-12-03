
namespace ToDoList.Web.Models
{
    public class ToDoListDatabaseSettings: IToDoListDatabaseSettings
    {
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
    public interface IToDoListDatabaseSettings
    {
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
