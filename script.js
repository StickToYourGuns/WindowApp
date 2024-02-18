let elements = document.querySelectorAll('.workspace__area');
for (let i = 0; i < elements.length; i++) {
    let sortable = Sortable.create(elements[i], {
        group: "workspace",
        draggable: '.window',
        animation: 150
    });
}