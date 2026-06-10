fetch("data/academies.json")
.then(response => response.json())
.then(data => {

    const academyList =
        document.getElementById("academyList");

    const search =
        document.getElementById("search");

    function render(items) {

        academyList.innerHTML = "";

        items.forEach(academy => {

            academyList.innerHTML += `
            <div class="academy-card">

                <h3>${academy.name}</h3>

                <p>
                    ${academy.category}
                </p>

                <p>
                    ${academy.area}
                </p>

                <a
                class="btn"
                href="https://wa.me/91YOURNUMBER?text=Interested%20in%20${academy.name}">
                WhatsApp
                </a>

            </div>`;
        });
    }

    render(data);

    search.addEventListener("keyup", () => {

        const value =
            search.value.toLowerCase();

        const filtered =
            data.filter(item =>
                item.name
                    .toLowerCase()
                    .includes(value)
            );

        render(filtered);
    });

});
