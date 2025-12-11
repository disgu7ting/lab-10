export default function LoadMoreButton({ loadMore, loading }) {
  return (
    <div className="load-more">
      <button onClick={loadMore} disabled={loading}>
        {loading ? "Загрузка..." : "Загрузить ещё"}
      </button>
    </div>
  );
}
