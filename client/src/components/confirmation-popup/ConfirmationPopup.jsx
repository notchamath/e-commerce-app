import { BUTTON_TYPES } from '../button/Button';
import Button from '../button/Button';
import './ConfirmationPopup.scss';

export default function ConfirmationPopup({msg, deleteFunc, cancelFunc}) {
  return (
    <div className='popup__container'>
        <div className="popup__msg">
            <h1>{msg}</h1>
            <div className="popup__btns">
                <Button 
                    buttonType={BUTTON_TYPES.RED} 
                    onClick={deleteFunc}
                >
                    Delete
                </Button>
                <Button 
                    buttonType={BUTTON_TYPES.GREEN} 
                    onClick={cancelFunc}
                >
                    Cancel
                </Button>
            </div>
        </div>
    </div>
  )
}
