export default function Sort({ value, onChange }) {
  return (
    <label>
        Сортировка:{" "}
        <select name="sort" value={value} onChange={(e) => onChange(e.target.value)}>
            <option value="">По умолчанию</option>
            <option value="asc">По цене: дешевле</option>
            <option value="desc">По цене: дороже</option>
        </select>
    </label>
  );
}
