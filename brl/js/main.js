const data = [
  {
    id: 1,
    title: "Property1",
    location: "Link Road, Near Shaktinath",
    type: "1BHK, 2BHK",
    status: "Under Construction",
    img:
      "https://cdn.staticmb.com/property/microsite/new-banners/project-spotlights/sobhacity-sobhaltd-gurgaon/img.jpg",
  },
  {
    id: 2,
    title: "Property2",
    location: "Zadeshwar, Near Inox",
    type: "2BHK",
    status: "Ready To Move",
    img:
      "https://cdn.staticmb.com/property/microsite/new-banners/project-spotlights/theromano-supertech-noida/img.jpg",
  },
  {
    id: 3,
    title: "Property3",
    location: "Bharuch Railway Station",
    type: "1BHK, 2BHK, 3BHK",
    status: "Under Construction",
    img:
      "https://cdn.staticmb.com/property/microsite/new-banners/project-showcase/jmflorence-fortunepropmart-noida/img.jpg",
  },
  {
    id: 4,
    title: "Property4",
    location: "Sherpura",
    type: "4BHK, 5BHK",
    status: "Under Construction",
    img:
      "https://cdn.staticmb.com/property/microsite/new-banners/project-showcase/acedivino-paramhomes-noida/img.jpg",
  },
  {
    id: 5,
    title: "Property5",
    location: "Zadeshwar, Near Inox",
    type: "Commercial",
    status: "Ready To Move",
    img:
      "https://cdn.staticmb.com/property/microsite/new-banners/project-spotlights/birlanavya-jll-gurgaon/spotlight-birlanavya1.jpg",
  },
  {
    id: 6,
    title: "Property6",
    location: "Link Road, Near Shaktinath",
    type: "Commercial",
    status: "Under Construction",
    img:
      "https://cdn.staticmb.com/property/microsite/new-banners/project-spotlights/mikasaplots-centralpark-gurugram/img.jpg",
  },
];

function getQueryStringValue(key) {
  return decodeURIComponent(
    window.location.search.replace(
      new RegExp(
        "^(?:.*[&\\?]" +
          encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") +
          "(?:\\=([^&]*))?)?.*$",
        "i"
      ),
      "$1"
    )
  );
}

function loadProperties() {
  const container = document.querySelector(".featured-content");
  data.forEach((item) => {
    const propertyCard = document.createElement("div");
    propertyCard.onclick = function () {
      window.location.href = `propertypage.html?id=${item.id}`;
    };
    propertyCard.className = "card";
    propertyCard.classList.add("rounded");
    const propertyImage = document.createElement("img");
    propertyImage.src = item.img;
    const propertyContent = document.createElement("div");

    const propertyTitle = document.createElement("h3");
    propertyTitle.innerHTML = item.title;
    const propertyLocation = document.createElement("p");
    propertyLocation.innerHTML = "Location: " + item.location;
    const propertyType = document.createElement("p");
    propertyType.className = "text-blue";
    propertyType.classList.add("text-bold");
    propertyType.innerHTML = item.type;
    const propertyStatus = document.createElement("p");
    propertyStatus.innerHTML = "Status: " + item.status;

    propertyContent.appendChild(propertyTitle);
    propertyContent.appendChild(propertyLocation);
    propertyContent.appendChild(propertyType);
    propertyContent.appendChild(propertyStatus);

    propertyCard.appendChild(propertyImage);
    propertyCard.appendChild(propertyContent);
    container.appendChild(propertyCard);
  });
}
