

export default function getAll() {
  fetch("https://localhost:5001/api/Home/Get")
      .then((res) => res.json())
}
