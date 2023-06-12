namespace QuizProjectBackend.Models
{
    public class CountryDatabaseSettings
    {
        public string ConnectionString { get; set; } = null!;

        public string DatabaseName { get; set; } = null!;

        public string CountryCollectionName { get; set; } = null!;
    }
}
