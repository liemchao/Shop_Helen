import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Modal from "react-modal"; // Giả sử bạn đang sử dụng Modal từ react-modal

const UpdateProduct = ({
  modalIsOpen,
  setModalIsOpen,
  idProduct,
  loadProduct,
}) => {
  const notifySuccess = () => toast.success("Cập nhật sản phẩm thành công");
  const notifyFail = () => toast.error("Cập nhật sản phẩm thất bại");

  const [newProduct, setNewProduct] = useState({
    ClotheName: "",
    Price: "",
    Description: "",
    Rent: "",
    Image: null,
    ShopID: "12004561-01da-44af-a9ed-3dbf35217cb1",
  });

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const response = await axios.get(
          `https://clotheshop-fnc4d6h6e8hcbqev.eastus-01.azurewebsites.net/api/Clothes/GetClotheByID/${idProduct}`
        );
        setNewProduct({
          ClotheName: response.data.clotheName,
          Price: response.data.price,
          Description: response.data.description,
          Rent: response.data.rent,
          Image: null, // Không lấy hình ảnh từ API
          ShopID: response.data.shopID,
        });
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
      }
    };

    if (idProduct) {
      fetchProductById();
    }
  }, [idProduct]);

  const handleUpdate = async () => {
    const formData = new FormData();
    formData.append("ClotheName", newProduct.ClotheName);
    formData.append("Price", newProduct.Price);
    formData.append("Description", newProduct.Description);
    formData.append("Rent", newProduct.Rent);
    if (newProduct.Image) {
      formData.append("Image", newProduct.Image); // Chỉ thêm hình ảnh nếu có
    }
    formData.append("ShopID", newProduct.ShopID);

    try {
      await axios.put(
        `https://clotheshop-fnc4d6h6e8hcbqev.eastus-01.azurewebsites.net/api/Clothes/${idProduct}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      notifySuccess();
      loadProduct(); // Gọi lại hàm loadProduct để cập nhật danh sách
      setModalIsOpen(false);
    } catch (error) {
      notifyFail();
      setModalIsOpen(false);
    }
  };

  const handleInputChange = (event) => {
    const { name, value, type, files } = event.target;
    if (type === "file") {
      setNewProduct({ ...newProduct, [name]: files[0] }); // Lưu file hình ảnh
    } else {
      setNewProduct({ ...newProduct, [name]: value });
    }
  };

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
      <div>
        <h2 style={{ textAlign: "center" }}>Cập nhật sản phẩm</h2>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdate();
        }}
      >
        <label>
          Tên:
          <input
            type="text"
            name="ClotheName"
            value={newProduct.ClotheName}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Ảnh
          <input type="file" name="Image" onChange={handleInputChange} />
        </label>
        <label>
          Giá bán:
          <input
            type="number"
            name="Price"
            value={newProduct.Price}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Giá thuê:
          <input
            type="number"
            name="Rent"
            value={newProduct.Rent}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Mô tả:
          <textarea
            name="Description"
            value={newProduct.Description}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Lưu</button>
        <button type="button" onClick={() => setModalIsOpen(false)}>
          Hủy
        </button>
      </form>
    </Modal>
  );
};

export default UpdateProduct;
