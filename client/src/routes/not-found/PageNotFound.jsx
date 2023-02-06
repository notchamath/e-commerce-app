import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <>
      <div>Page Not Found</div>
      <button onClick={goBack}>Go Back</button>
    </>
  )
}
