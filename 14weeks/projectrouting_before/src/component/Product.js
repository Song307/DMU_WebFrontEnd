import { useParams } from "react-router-dom";

function Product() {
  const { productId } = useParams();
    return (
      <div>
            <h3> { productId }번 상품 페이지입니다.</h3>
      </div>
    );
  }
  
  export default Product;