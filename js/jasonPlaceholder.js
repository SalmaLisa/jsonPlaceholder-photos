const fetchData = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos`);
  const data = await res.json();
  displayData(data);
};

const displayData = (data) => {
  // data = data.slice(0, 10);
  // console.log(data)
  const albumsContainer = document.getElementById("album-container");
  data.forEach((album) => {
    const albumDiv = document.createElement("div");
    albumDiv.classList.add("col");
    albumDiv.innerHTML = `
    <div class="card">
      <img src="${album.url}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${album.title.slice(0,20)}</h5>
        <p>Id : ${album.id}</p>
        <button onclick="showMoreInfo(${album.id})" class = "btn btn-success fw-semibold " data-bs-toggle="modal" data-bs-target="#albumModal">More Info</button>
        </div>
    </div>
    `;
    albumsContainer.appendChild(albumDiv);
  });
};
const showMoreInfo = id => {
  const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
  fetch(url)
    .then(res => res.json())
  .then(data => displayMoreInfo(data))
}

const displayMoreInfo = data => {
  const modalTitle = document.getElementById('title');
  modalTitle.innerText = `${data.title}`
  const modalBody = document.getElementById('body');
  modalBody.innerHTML = `
  <div class="card">
  <img src="${data.thumbnailUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.title.slice(0,20)}</h5>
    <p>Album Id : ${data.albumId}</p>
    </div>
</div>
  `;
}

fetchData();
