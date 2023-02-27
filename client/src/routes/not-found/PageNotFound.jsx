import { useNavigate } from "react-router-dom";
import { BUTTON_TYPES } from '../../components/button/Button';

import Button from '../../components/button/Button';

import './PageNotFound.scss';

export default function PageNotFound() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <section className="page-not-found__container">
      <h1>Page Not Found :( </h1>
      <Button buttonType={BUTTON_TYPES.PRIMARY} onClick={goBack}>Go Back</Button>
    </section>
  )
}
