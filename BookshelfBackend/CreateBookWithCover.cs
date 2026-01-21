namespace BookshelfBackend
{
    public class CreateBookWithCover
    {
        public string Title { get; set; }
        public string Author { get; set; }
        public string? Review { get; set; }
        public int Rating { get; set; }
        public bool IsRead { get; set; }
        public DateTime? ReadDate { get; set; }
        public string LiteraryGenre { get; set; }


    }
}
