import './Button.scss';

export const BUTTON_TYPES = {
  PRIMARY: 'primary',
  BLUE: 'blue'
}

export default function Button({children, buttonType, className, onClick}) {

  const getBtnType = () => {
    switch(buttonType){

      case BUTTON_TYPES.PRIMARY:
        return 'button__primary';

      case BUTTON_TYPES.BLUE:
        return 'button__blue';

      default:
        return '';
    }
  }

  return (
    <button className={`button ${className} ${getBtnType()}`} onClick={onClick}>
      {children}
    </button>
  )
}
