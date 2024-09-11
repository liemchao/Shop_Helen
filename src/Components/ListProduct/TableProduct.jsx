import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TableProduct.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Modal from "react-modal";
import CreateProduct from "../Create/CreateProduct";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpdateProduct from "../Update/UpdateProduct";
const ProductsTable = () => {
  const notifySuccess = () => toast.success("Xóa sản phẩm thành công");
  const notifyFail = () => toast.error("Xóa sản phẩm thất bại");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [IsOpen, setIsOpen] = useState(false);
  const [IsOpenUpdate, setIsOpenUpdate] = useState(false);
  const [idProduct, setIdProduct] = useState(null); // Trạng thái cho ID sản phẩm

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://clotheshop-fnc4d6h6e8hcbqev.eastus-01.azurewebsites.net/api/Clothes"
      );
      setProducts(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (clotheID) => {
    const confirmDelete = window.confirm(
      "Bạn có chắc chắn muốn xóa sản phẩm này?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(
          `https://clotheshop-fnc4d6h6e8hcbqev.eastus-01.azurewebsites.net/api/Clothes/${clotheID}`
        );
        notifySuccess();
        fetchProducts(); // Gọi lại hàm fetchProducts sau khi xóa thành công
      } catch (error) {
        notifyFail();
        console.error("Có lỗi xảy ra khi xóa sản phẩm:", error);
      }
    }
  };

  const handlUpdate = async (clotheID) => {
    setIdProduct(clotheID); // Cập nhật ID sản phẩm
    setIsOpenUpdate(true); //
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Danh sách sản phẩm</h1>
        <button className="create-button" onClick={() => setIsOpen(true)}>
          <i className="fas fa-plus"></i>
          Tạo mới
        </button>
        <CreateProduct
          modalIsOpen={IsOpen}
          setModalIsOpen={setIsOpen}
          loandProduct={fetchProducts}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Rent</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th> {/* Cột mới cho Action */}
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.clotheID}>
              <td>{++index}</td>
              <td>{product.clotheName}</td>
              <td>
                <img height="100px" width="100px" src={product.image}></img>
              </td>
              <td>{product.rent}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td className={product.status ? "available" : "unavailable"}>
                {product.status ? <>Khả dụng</> : <>Không khả dụng</>}
              </td>
              <td data-label="Actions">
                <span
                  onClick={() => handlUpdate(product.clotheID)}
                  style={{ cursor: "pointer", marginRight: "10px" }}
                >
                  <i className="fas fa-edit" title="Edit"></i>
                </span>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => handleDelete(product.clotheID)}
                >
                  <i className="fas fa-trash" title="Delete"></i>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <UpdateProduct
        modalIsOpen={IsOpenUpdate}
        setModalIsOpen={setIsOpenUpdate}
        idProduct={idProduct}
        loadProduct={fetchProducts}
      />
    </div>
  );
};

export default ProductsTable;
