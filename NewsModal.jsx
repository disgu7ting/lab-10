export default function NewsModal({ news, close }) {
  return (
    <div className="modal-bg" onClick={close}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <img src={news.urlToImage} />
        <h2>{news.title}</h2>
        <p>{news.content}</p>
        <a href={news.url} target="_blank">Читать полностью</a>
        <button onClick={close}>Закрыть</button>
      </div>
    </div>
  );
}
