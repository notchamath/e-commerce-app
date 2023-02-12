import './Button.scss';

export const BUTTON_TYPES = {
  PRIMARY: 'primary'
}

export default function Button({children, buttonType, onClick}) {

  const getBtnType = () => {
    switch(buttonType){

      case BUTTON_TYPES.PRIMARY:
        return 'button__primary';

      default:
        return '';
    }
  }

  return (
    <div className={`button ${getBtnType()}`} onClick={onClick}>
        {children}
    </div>
  )
}
