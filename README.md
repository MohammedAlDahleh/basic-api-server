# basic-api-server

Heroku:<br>
[Heroku]()<br>

Action:<br>
[Action]()<br>

Pull Requist:<br>
[Pull-Requist]()<br>

* Routes:

- Food:
foodRouter.get('/food', getFoods);
foodRouter.get('/food/:id', getOneFood);
foodRouter.post('/food', addFood);
foodRouter.put('/food/:id', updateFood);
foodRouter.delete('/food/:id', deleteFood);

- Clothes:
ClothesRouter.get("/clothes", getClothes);
ClothesRouter.get("/clothes/:id", getOneClothes);
ClothesRouter.post("/clothes", createClothes);
ClothesRouter.put("/clothes/:id", updateClothes);
ClothesRouter.delete("/clothes/:id", deleteClothes)

* tests:
    ✓ Should respond with 404 status on an invalid route (68 ms)
    ✓ Should respond with 404 status on an invalid method (13 ms)
    ✓ can add a food (58 ms)
    ✓ can get all foods (17 ms)
    ✓ can get one food (17 ms)
    ✓ can update a food (17 ms)
    ✓ can delete a food (42 ms)