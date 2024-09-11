import "@fortawesome/fontawesome-free/css/all.min.css"; // Nhập Font Awesome
import Modal from "react-modal";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CreateProduct = ({ modalIsOpen, setModalIsOpen, loandProduct }) => {
  const notifySuccess = () => toast.success("Tạo sản phẩm thành công");
  const notifyFail = () => toast.error("Tạo sản phẩm thất bại");
  const [newProduct, setNewProduct] = useState({
    ClotheName: "",
    Price: "",
    Description: "",
    Rent: "",
    Image: null,
    ShopID: "12004561-01da-44af-a9ed-3dbf35217cb1",
  });

  const handleCreate = async () => {
    const formData = new FormData();
    formData.append("ClotheName", newProduct.ClotheName);
    formData.append("Price", newProduct.Price);
    formData.append("Description", newProduct.Description);
    formData.append("Rent", newProduct.Rent);
    formData.append("Image", newProduct.Image); // Đảm bảo hình ảnh được thêm vào
    formData.append("ShopID", newProduct.ShopID);
    try {
      await axios.post(
        "https://clotheshop-fnc4d6h6e8hcbqev.eastus-01.azurewebsites.net/api/Clothes",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      notifySuccess();
      loandProduct();
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
        <h2 style={{ textAlign: "center" }}>Tạo sản phẩm mới</h2>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreate();
        }}
      >
        <label>
          Tên:
          <input
            type="text"
            name="ClotheName"
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Ảnh
          <input
            type="file"
            name="Image"
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Giá bán:
          <input
            type="number"
            name="Price"
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Giá thuê:
          <input
            type="number"
            name="Rent"
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Mô tả:
          <textarea name="Description" onChange={handleInputChange} required />
        </label>
        <button type="submit">Lưu</button>
        <button type="button" onClick={() => setModalIsOpen(false)}>
          Hủy
        </button>
      </form>
    </Modal>
  );
};
export default CreateProduct;
