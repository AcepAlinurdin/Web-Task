function TampilData() {
    $.ajax({
        url: 'https://www.themealdb.com/api/json/v1/1/categories.php',
        type: 'get',
        dataType: 'json',
        data: {},
        success: function (makanan) {
            console.log(makanan.categories)
            $.each(makanan.categories, function (key, value) {
                $("#card_layout").append(`<h1><div class='card-layout__item'>
                <img class="gambar" src='${value.strCategoryThumb}' width='200rem'>
                <p class="text">${value.strCategory}</p></a>
                <a class="cta" href="item.html?c=${value.strCategory}"><button class='button'>Pilih menu</button></a>
            </div>`);
            });
        }
    });
};


function Items(Params) {
    $.ajax({
        url: `https://www.themealdb.com/api/json/v1/1/filter.php?c=${Params}`,
        type: 'get',
        dataType: 'json',
        data: {},
        success: function (makanan) {
            console.log(makanan)
            $.each(makanan.meals, function (key, value) {
                console.log(value.idMeal)
                $("#card_layout").append(`<h1><div class='card-layout__item'>
            <img class="gambar" src='${value.strMealThumb}' width='200rem'>
            <p class="text">${value.strMeal}</p></a>
            <button class='button' onClick="Dtail(${value.idMeal})">
            Show Dtail
            </button>
        </div>`);
            });
        }
    });
}

function Dtail(idMeal) {
    $.ajax({
        url: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`,
        type: 'get',
        dataType: 'json',
        data: {},
        success: function (makanan) {
            console.log(makanan)
            $.each(makanan.meals, function (key, value) {
                $("#card_layout").append(alert(`Nama Makanan                       :` + value.strMeal +
                    `\nTermasuk Kategori                   :` + value.strCategory +
                    `\nMakanan yang berasal dari     :` + value.strArea +
                    `\nKomposisi                                :` + value.strInstructions));
            });

        }
    });
}