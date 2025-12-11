import NewsCard from "./NewsCard";

export default function NewsList({ news, setActiveNews }) {
  return (
    <div className="news-grid">
      {news.map((item, index) => (
        <NewsCard key={index} news={item} open={() => setActiveNews(item)} />
      ))}
    </div>
  );
}
