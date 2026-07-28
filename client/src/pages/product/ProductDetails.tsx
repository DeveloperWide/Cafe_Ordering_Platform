import { useParams } from "react-router";
import { useProductDetails } from "../../hooks/useProductDetails";

const ProductDetails = () => {
  const { id } = useParams();
  const { loading, product, error, refetch } = useProductDetails(id);

  if (!id) return <div>Invalid Product</div>;

  if (loading) return <div>Loading Product Details...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>{product?.title}</h2>
    </div>
  );
};

export default ProductDetails;
