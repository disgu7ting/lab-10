import { useEffect, useState } from "react";
import Header from "./components/Header";
import NewsList from "./components/NewsList";
import CategoryFilter from "./components/CategoryFilter";
import LoadMoreButton from "./components/LoadMoreButton";
import NewsModal from "./components/NewsModal";

const API_KEY = "20307102abfb4987a7fdc20686658289";

const categoryMap = {
  Все: "news",
  Бизнес: "business",
  Технологии: "technology",
  Спорт: "sport",
  Здоровье: "health",
  Наука: "science",
};

export default function App() {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState(() => {
    const saved = localStorage.getItem("category");
    return saved ? saved : "Все";
  });
  const [page, setPage] = useState(1);
  const [activeNews, setActiveNews] = useState(null);
  const [loading, setLoading] = useState(false);

  // ✅ сохраняем категорию
  useEffect(() => {
    localStorage.setItem("category", category);
  }, [category]);

  // ✅ загружаем новости при первом запуске и при смене категории
  useEffect(() => {
    loadNews(1, true);
  }, [category]);

  const loadNews = async (pageNumber = 1, reset = false) => {
    setLoading(true);

    const query = categoryMap[category];

    try {
      const res = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&pageSize=6&page=${pageNumber}&apiKey=${API_KEY}`
      );

      const data = await res.json();

      if (reset) {
        setNews(data.articles);
      } else {
        setNews(prev => [...prev, ...data.articles]);
      }

      setPage(pageNumber + 1);
    } catch (error) {
      console.error("Ошибка загрузки:", error);
    }

    setLoading(false);
  };

  return (
    <div>
      <Header />
      <CategoryFilter setCategory={setCategory} />
      <NewsList news={news} setActiveNews={setActiveNews} />
      <LoadMoreButton loadMore={() => loadNews(page)} loading={loading} />
      {activeNews && (
        <NewsModal news={activeNews} close={() => setActiveNews(null)} />
      )}
    </div>
  );
}
