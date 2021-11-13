

export default function getAll() {
  fetch("http://apifindhome.seyhanakifov.com/api/Home/Get")
      .then((res) => res.json())
}
