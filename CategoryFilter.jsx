const categories = ["Все", "Бизнес", "Технологии", "Спорт", "Здоровье", "Наука"];

export default function CategoryFilter({ setCategory }) {
  return (
    <div className="categories">
      {categories.map(cat => (
        <button key={cat} onClick={() => setCategory(cat)}>
          {cat}
        </button>
      ))}
    </div>
  );
}
