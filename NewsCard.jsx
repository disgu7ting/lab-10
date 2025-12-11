export default function NewsCard({ news, open }) {
  return (
    <div className="card" onClick={open}>
      <img src={news.urlToImage || "https://via.placeholder.com/300"} alt="" />
      <h3>{news.title}</h3>
      <p>{news.description}</p>
    </div>
  );
}
