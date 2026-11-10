export default function Search({ value, onChange }) {
  return (
    <input type="search" name="search" placeholder="Поиск по товарам" value={value} onChange={(e) => onChange(e.target.value)} />
  );
}
