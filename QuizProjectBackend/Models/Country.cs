using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace QuizProjectBackend.Models
{
    public class Country
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("Name")]
        public string CountryName { get; set; }

        public string? Continent { get; set; }

        public int Population { get; set; }

        public int LandArea { get; set; }

        public string? Landlocked { get; set; }
    }
}
