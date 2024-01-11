import { useLocation } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <div>success page</div>
    </div>
  );
};

export default Success;
