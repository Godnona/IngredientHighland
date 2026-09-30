# IngredientHighland

Game pha chế đồ uống chạy local bằng HTML, CSS và JavaScript thuần.

## Cách chạy

Mở trực tiếp `index.html` trong trình duyệt, hoặc chạy server local:

```powershell
python -m http.server 5173 --bind 127.0.0.1
```

Sau đó vào `http://127.0.0.1:5173`.

## Nội dung

- Main menu với nút Start.
- Menu chọn 6 màn chơi theo công thức trong `img/NguyênLiệu.txt`.
- Màn pha chế từng món: chọn size S/M/L, chọn nguyên liệu, nhập tỉ lệ và đổ vào ly.
- Khi đúng công thức sẽ hiện ảnh thành phẩm từ `img/Res`.
- Màn Thực chiến: khách gọi món ngẫu nhiên, 5 phút mỗi cốc, kéo dài đến khi thoát ca.
