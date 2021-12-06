

export default function getAll() {
  fetch("https://apifindhome.seyhanakifov.com/api/Home/Get")
      .then((res) => res.json())
}
