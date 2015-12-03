#UberWear

# Dev Notes

Alternate way to start app

    REDIS_URL=redis://h:pf75le81a4kjeo9h53tbsulj9mc@ec2-54-235-152-160.compute-1.amazonaws.com:15149 MONGOLAB_URI=mongo://heroku_0vpwfkv8:fhft7pkci5lv8bbpb5pcq6ssmp@ds037272.mongolab.com:37272/heroku_0vpwfkv8 node ./bin/www

or

    REDIS_URL=redis://h:pf75le81a4kjeo9h53tbsulj9mc@ec2-54-235-152-160.compute-1.amazonaws.com:15149 MONGOLAB_URI=mongo://heroku_0vpwfkv8:fhft7pkci5lv8bbpb5pcq6ssmp@ds037272.mongolab.com:37272/heroku_0vpwfkv8 nodemon ./bin/www
You need to install node, mongodb, redis

    npm install

    npm start


To connect to Production Mongo

URL is mongodb://heroku_0vpwfkv8:fhft7pkci5lv8bbpb5pcq6ssmp@ds037272.mongolab.com:37272/heroku_0vpwfkv8

    mongo ds037272.mongolab.com:37272/heroku_0vpwfkv8 -u heroku_0vpwfkv8 -p fhft7pkci5lv8bbpb5pcq6ssmp

### Todo

* Admin should be able to add SKUs
* User should be able to add Product product to cart
* User should be able to rent a product


#### To check Mongo console

> For some Rapid Mongo checks

    mongo

    use uberwear
    show collections
    db.users.find()

    db.users.find().pretty()

    db.users.update({"local.email" : "chandan@liftoffllc.com"},
    {
      $set: {"role": "admin"}
    })

# Models

  * user{
    email, password, role
  }
  * sku {
    name,
    dressBy,
    detail,
    rentals: [byDay: 10, byWeek],
    sizes [2,3,4,5],
    stylistNote,
    sizeAndFitNote,
    images: [urls],
    relatedSku: [sku],
    tags : [String]
    sku_size: [skuId_2]
    }

  * shoppingCart {
    user
    sku
    quantity
    price
    createdAt
    updatedAt
  }

  * RentedSkus {
    sku
    user
    duration{
      from
      to
    }
  }

  * skuSchedule {
    inventory_id
    user
    booking_date : {start, end}
  }

  * Inventory {
   sku_size
   quantity
   size
   }



[{
  "name": "Steffi's"
  , "dressBy" : "David Koma"
  , "imgUrlList" : "https://pc-ap.renttherunway.com/productimages/front/1080x/ab/KO12.jpg"
  , "tagList" : "Bridal, Women"
  , "rental" : 100
  , "mrp" : 1000
  , "detail" : "Some Detail"
},
{
  "name": "Steffi's"
  , "dressBy" : "David Koma"
  , "imgUrlList" : "https://pc-ap.renttherunway.com/productimages/front/1080x/ab/KO12.jpg"
  , "tagList" : "Bridal, Women"
  , "rental" : 100
  , "mrp" : 1000
  , "detail" : "Some Detail"
}
]