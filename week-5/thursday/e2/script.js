function getNumberOfShopsByName(name) {
    return Shops.filter((x) => x.owner === name).length;
}

function howManyItemsHaveSoldFromThisOwnersShops(name) {
    let ownedShops = Shops.filter((x) => x.owner === name);
    let ownedShopsIDS = ownedShops.map((x) => x.id);
    let purchasesFromShopIDS = Purchases.filter((x) => ownedShopsIDS.includes(x.shopId));
    let purchasedItemsIDS = purchasesFromShopIDS.map((x) => x.itemIds);
    let totalPurchasedItems = 0;
    purchasedItemsIDS.forEach((item) => {
        totalPurchasedItems += item.length;
    });
    
    return totalPurchasedItems;
}

function heaviestPurchase() {
    let heaviest = {total: 0, purchase: {}};
    Purchases.forEach((item) => {
        let weightsOfItems = Items.filter((x) => item.itemIds.includes(x.id));
        weightsOfItems = weightsOfItems.map((x) => x.weight);
        weightsOfItems = weightsOfItems.reduce((sum, weight) => sum + weight, 0);
        
        if (weightsOfItems > heaviest.total) {
            heaviest.total = weightsOfItems, 
            heaviest.purchase = item;
        };
    });
    return heaviest;
}

function heaviestBangkokPurchase() {
    let heaviest = {total: 0, purchase: {}};
    let shopsInBangkok = Shops.filter((x) => x.city === "Bangkok");
    let bangkokShopIDS = shopsInBangkok.map((x) => x.id);
    let purchasesInBangkok = Purchases.filter((x) => bangkokShopIDS.includes(x.shopId));

    purchasesInBangkok.forEach((item) => {
        let weightOfItems = Items.filter((x) => item.itemIds.includes(x.id));
        weightOfItems = weightOfItems.map((x) => x.weight);
        weightOfItems = weightOfItems.reduce((sum, weight) => sum + weight, 0);
        
        if (weightOfItems > heaviest.total) {
            heaviest.total = weightOfItems;
            heaviest.purchase = item;
        }
    });
    
    return heaviest;
}

function whoPaidTheMost() {
    let mostExpensivePurchase = {total: 0, purchase: {}};

    Purchases.forEach((purchase) => {
        let priceOfPurchase = Items.filter((x) => purchase.itemIds.includes(x.id));
        priceOfPurchase = priceOfPurchase.map((x) => x.price);
        priceOfPurchase = priceOfPurchase.reduce((sum, price) => sum + price, 0);
        
        if (priceOfPurchase > mostExpensivePurchase.total) {
            mostExpensivePurchase.total = priceOfPurchase;
            mostExpensivePurchase.purchase = purchase;
        }
    });
    
    let nameOfCustomer = Customers.filter((x) => x.id === mostExpensivePurchase.purchase.customerId);
    return nameOfCustomer[0].name;
}

function mostExpensiveBangkokPurchase() {
    let expensive = {total: 0, purchase: {}};
    let shopsInBangkok = Shops.filter((x) => x.city === "Bangkok");
    let bangkokShopsIDS = shopsInBangkok.map((x) => x.id);
    let purchasesInBangkok = Purchases.filter((x) => bangkokShopsIDS.includes(x.shopId));

    purchasesInBangkok.forEach((purchase) => {
        let priceOfPurchase = Items.filter((x) => purchase.itemIds.includes(x.id));
        priceOfPurchase = priceOfPurchase.map((x) => x.price);
        priceOfPurchase = priceOfPurchase.reduce((sum, price) => sum + price, 0);
        
        if (priceOfPurchase > expensive.total) {
            expensive.total = priceOfPurchase;
            expensive.purchase = purchase;
        }
    });
        
    switch (expensive.purchase.date.month) {
        case 9:
            return "September";
        //etc...
    }
}