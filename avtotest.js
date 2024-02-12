```
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Ожидаю статус 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response time is less than 50ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(50);
});
```
// Pre-requests перед основным запросом:
```
pm.sendRequest("https://api.pokemonbattle.me:9104/pokemons?in_pokeball=1", function (err, response) {
var jsonData = response.json(); // Сохраним весь ответ в переменную jsonData
var enemy_id = jsonData[5].id; // Весь ответ - это из объектов. Возьмём id из шестого объекта чтобы избежать битвы со своим покемоном
pm.collectionVariables.set("enemy_id", enemy_id); // Cохраним id противника в переменные
});

```
