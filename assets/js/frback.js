var firebaseConfig = {
    apiKey: "AIzaSyBg7swaHUhNi8nv9OqkF3rZmUZ4IKYEpFk",
    authDomain: "cupproject-a8ece.firebaseapp.com",
    projectId: "cupproject-a8ece",
    storageBucket: "cupproject-a8ece.appspot.com",
    messagingSenderId: "466062198651",
    appId: "1:466062198651:web:8fa8e13932696507b59fde"
  };

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

var cups_ref = firebase.database().ref('cups');

cups_ref.on('value', function(snapshot){
    $('.products-div').empty();
    var data = snapshot.val();
    addItem(1,data.cup1.name,data.cup1.price);
    addItem(2,data.cup2.name,data.cup2.price);
    addItem(3,data.cup3.name,data.cup3.price);
    addItem(4,data.cup4.name,data.cup4.price);
    addItem(5,data.cup5.name,data.cup5.price);
    addItem(6,data.cup6.name,data.cup6.price);
    addItem(7,data.cup7.name,data.cup7.price);
  });

function addItem(count,name,price){
      $('.products-div').append(`
      <div class="col-10 col-lg-4 col-sm-6 mx-auto my-3">
                <div class="product-item product-item-${count}">
                    <div class="container-products">
                        <div class="top product-${count}"></div>
                        <div class="bottom">
                            <div class="left">
                                <div class="details">
                                    <h1>${name}</h1>
                                    <p>${price}₽</p>
                                </div>
                                <div class="buy"><i class="material-icons">add_shopping_cart</i></div>
                            </div>
                            <div class="right">
                                <div class="done"><i class="material-icons">done</i></div>
                                <div class="details">
                                    <h1>${name}</h1>
                                    <p>Added to your cart</p>
                                </div>
                                <div class="remove"><i class="material-icons">clear</i></div>
                            </div>
                        </div>
                    </div>
                    <div class="inside">
                        <div class="icon"><i class="material-icons">info_outline</i></div>
                        <div class="contents">
                            <table>
                                <tr>
                                    <th>Имя</th>
                                    <th>Цена</th>
                                </tr>
                                <tr>
                                    <td>${name}</td>
                                    <td>${price}₽</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
      `);
}