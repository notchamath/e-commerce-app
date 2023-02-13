import './Button.scss';

export const BUTTON_TYPES = {
  PRIMARY: 'primary',
  BLUE: 'blue',
  RED: 'red',
  GREEN: 'green'
}

export default function Button({children, buttonType, className, onClick}) {

  const getBtnType = () => {
    switch(buttonType){

      case BUTTON_TYPES.PRIMARY:
        return 'button__primary';

      case BUTTON_TYPES.BLUE:
        return 'button__blue';
      
      case BUTTON_TYPES.RED:
      return 'button__red';

      case BUTTON_TYPES.GREEN:
      return 'button__green';

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
