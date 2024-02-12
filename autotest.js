// autotest for method api.https://pokemonbattle.me
```
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("создание покемона без имени(по тексту в боди)", function () {
    pm.expect(pm.response.text()).to.include("Отсутствует имя покемона");
});


pm.test("Response time is less than 50ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(50);
});


pm.test("Проверяю id=17174", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData[0].id).to.eql("17174");
});


pm.test("Ожидаю статус 200", function () {
    pm.response.to.have.status(200);
});

```
// Pre-requests перед основным запросом:
```
pm.sendRequest("https://api.pokemonbattle.me:9104/pokemons?in_pokeball=1", function (err, response) {
var jsonData = response.json(); // Сохраним весь ответ в переменную jsonData
var enemy_id = jsonData[5].id; // Весь ответ - это из объектов. Возьмём id из шестого объекта чтобы избежать столкновения со своим объектом
pm.collectionVariables.set("enemy_id", enemy_id); // Cохраним id противника в переменные
});

```
// autotest for method api.https://swapi.py4e.com
```
Request for Planet 7

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

pm.test("Planet name is correct", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.eql("Endor");
})

Request for Starship 5

pm.test("Response time is less than 210ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

pm.test("Starship 5", function () {
    pm.response.to.have.starship("5");
});


