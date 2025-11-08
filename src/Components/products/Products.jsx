import React, { useEffect, useState } from "react";
import useIntance from "../../Hooks/useAuth";

const Products = () => {
  const intance = useIntance();
  const [data, setData] = useState(null);

  useEffect(() => {
    intance.get("/products").then((data) => {
      console.log(data.data);
      setData(data.data);
    });
  }, [intance]);
  console.log(data);

  return <div></div>;
};

export default Products;
