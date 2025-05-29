from fastapi import FastAPI, HTTPException, Body, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from datetime import datetime

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.mount("/img", StaticFiles(directory="img"), name="img")

products = [
    {
        "_id": "60afb2c76ef5b902180aacba",
        "images": [
            "http://127.0.0.1:8000/img/tải xuống (8).jpg",
            "http://127.0.0.1:8000/img/tải xuống (7).jpg",
            "http://127.0.0.1:8000/img/gd.jpg",
            "http://127.0.0.1:8000/img/mo-hinh-lap-rap-hg-bandai-gundam.webp"
        ],
        "price": 69000,
        "rating": 4.6,
        "price_before_discount": 75000,
        "quantity": 794,
        "sold": 254,
        "view": 9572,
        "name": "[Ready] Mô hình Gundam HG1/144 - hàng chính hãng",
        "category": {
            "_id": "60afafe76ef5b902180aacb5",
            "name": "Đồ chơi",
            "__v": 0
        },
        "image": "http://127.0.0.1:8000/img/gundamm.jpg",
        "createdAt": "2021-05-27T14:55:03.113Z",
        "updatedAt": "2025-05-28T13:34:44.898Z"
    },
      {
        "_id": "60afb2426ef5b902180aacb9",
        "images": [
          "http://127.0.0.1:8000/img/images (2).jpg",
          "http://127.0.0.1:8000/img/tải xuống (13).jpg",
          "http://127.0.0.1:8000/img/tải xuống (14).jpg"
        ],
        "price": 175000,
        "rating": 4.2,
        "price_before_discount": 142200,
        "quantity": 373,
        "sold": 2400,
        "view": 56803,
        "name": "Quần baggy - jeans phù hợp với mọi lứa tuổi",
        "category": {
          "_id": "60afafe76ef5b902180aacb5",
          "name": "Thời trang",
          "__v": 0
        },
        "image": "http://127.0.0.1:8000/img/baggy.jpg",
        "createdAt": "2021-05-27T14:52:50.392Z",
        "updatedAt": "2025-05-28T14:03:02.899Z"
      },
      {
        "_id": "60afb1c56ef5b902180aacb8",
        "images": [

          "http://127.0.0.1:8000/img/shopping.webp",
          "http://127.0.0.1:8000/img/tải xuống (19).jpg",
          "http://127.0.0.1:8000/img/tải xuống (20).jpg"
        ],
        "price": 23000000,
        "rating": 5,
        "price_before_discount": 29800000,
        "quantity": 207,
        "sold": 142,
        "view": 40777,
        "name": "Điện thoại Apple Iphone 16 Pro 512GB- Hàng chính hãng VNA",
        "category": {
          "_id": "60afafe76ef5b902180aacb5",
          "name": "Điện thoại",
          "__v": 0
        },
        "image": "http://127.0.0.1:8000/img/iphone.jpg",
        "createdAt": "2021-05-27T14:50:45.708Z",
        "updatedAt": "2025-05-28T14:11:45.292Z"
      },
      {
        "_id": "60afb14d6ef5b902180aacb7",
        "images": [
          "http://127.0.0.1:8000/img/tải xuống (15).jpg",
          "http://127.0.0.1:8000/img/tải xuống (16).jpg",
          "http://127.0.0.1:8000/img/tải xuống (17).jpg",
          "http://127.0.0.1:8000/img/tải xuống (18).jpg"
        ],
        "price": 269000,
        "rating": 5,
        "price_before_discount": 299000,
        "quantity": 269,
        "sold": 892,
        "view": 17295,
        "name": "Áo khoác trùm đầu DSW cổ điển - Nhiều màu",
        "category": {
          "_id": "60afafe76ef5b902180aacb5",
          "name": "Thời trang",
          "__v": 0
        },
        "image": "http://127.0.0.1:8000/img/wbr.jpg",
        "createdAt": "2021-05-27T14:48:45.577Z",
        "updatedAt": "2025-05-28T08:28:39.051Z"
      }
]

cart = []

users = []

def find_product_by_id(product_id):
    for product in products:
        if product["_id"] == product_id:
            return product
    return None

@app.get("/products")
def get_products():
    return {
        "message": "Lấy các sản phẩm thành công",
        "data": {
            "products": products,
            "pagination": {
                "page": 1,
                "limit": 30,
                "page_size": len(products)
            }
        }
    }

@app.get("/products/{product_id}")
def get_product_detail(product_id: str):
    for product in products:
        if product["_id"] == product_id:
            return {
                "message": "Lấy sản phẩm thành công",
                "data": product
            }
    raise HTTPException(status_code=404, detail="Không tìm thấy sản phẩm")

@app.post("/purchases")
def add_to_cart(purchase: dict = Body(...)):
    cart.append(purchase)
    return {
        "message": "Thêm vào giỏ hàng thành công",
        "data": purchase
    }

@app.post("/purchases/add-to-cart")
def add_to_cart_v2(purchase: dict = Body(...)):
    product = find_product_by_id(purchase.get("product_id"))
    if not product:
        raise HTTPException(status_code=404, detail="Không tìm thấy sản phẩm")
    cart_item = {
        "_id": str(len(cart) + 1),
        "product": product,
        "buy_count": purchase.get("buy_count", 1)
    }
    cart.append(cart_item)
    return {
        "message": "Thêm vào giỏ hàng thành công",
        "data": cart_item
    }

@app.get("/purchases")
def get_cart():
    return {
        "message": "Lấy giỏ hàng thành công",
        "data": cart
    }

@app.post("/purchases/buy-products")
def buy_products(purchases: list = Body(...)):
    result = []
    for purchase in purchases:
        product = find_product_by_id(purchase.get("product_id"))
        if product:
            result.append({
                "_id": str(len(cart) + len(result) + 1),
                "product": product,
                "buy_count": purchase.get("buy_count", 1)
            })
    return {
        "message": "Mua nhiều sản phẩm thành công",
        "data": result
    }

@app.put("/purchases/update-purchase")
def update_purchase(purchase: dict = Body(...)):
    for item in cart:
        if item["product"]["_id"] == purchase.get("product_id"):
            item["buy_count"] = purchase.get("buy_count", item["buy_count"])
            return {
                "message": "Cập nhật giỏ hàng thành công",
                "data": item
            }
    raise HTTPException(status_code=404, detail="Không tìm thấy sản phẩm trong giỏ hàng")

@app.delete("/purchases")
async def delete_purchase(request: Request):
    purchase_ids = await request.json()
    deleted_count = 0
    global cart
    cart = [item for item in cart if not (item["_id"] in purchase_ids or item["product"]["_id"] in purchase_ids)]
    deleted_count = len(purchase_ids)
    return {
        "message": "Xóa sản phẩm thành công",
        "data": {"deleted_count": deleted_count}
    }

@app.post("/login")
def login(data: dict = Body(...)):
    for user in users:
        if user["email"] == data.get("email") and user["password"] == data.get("password"):
            return {
                "message": "Đăng nhập thành công",
                "data": {
                    "access_token": "fake_token",
                    "user": user
                }
            }
    raise HTTPException(status_code=401, detail="Sai email hoặc mật khẩu")

@app.post("/register")
def register(data: dict = Body(...)):
    user = {
        "_id": str(len(users) + 1),
        "email": data.get("email"),
        "password": data.get("password"),
        "name": data.get("name", "Demo User"),
        "avatar": "",
        "roles": ["user"],
        "address": data.get("address", ""),
        "phone": data.get("phone", ""),
        "date_of_birth": data.get("date_of_birth", "")  # Định dạng: "YYYY-MM-DD"
    }
    users.append(user)
    return {
        "message": "Đăng ký thành công",
        "data": {
            "user": user
        }
    }

@app.get("/me")
def get_profile():
    if users:
        return {
            "message": "Lấy profile thành công",
            "data": users[0]
        }
    raise HTTPException(status_code=404, detail="Không tìm thấy user")

@app.post("/logout")
def logout():
    return {
        "message": "Đăng xuất thành công"
    }

@app.put("/user")
def update_user(data: dict = Body(...)):
    if users:
        user = users[0]
        # Cập nhật các trường cho phép
        for field in ["name", "avatar", "address", "phone", "date_of_birth"]:
            if field in data:
                user[field] = data[field]
        return {
            "message": "Cập nhật user thành công",
            "data": user
        }
    raise HTTPException(status_code=404, detail="Không tìm thấy user")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
