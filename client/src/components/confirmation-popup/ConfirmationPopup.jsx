import { BUTTON_TYPES } from '../button/Button';
import Button from '../button/Button';
import './ConfirmationPopup.scss';

export const POPUP_TYPES = {
    DELETE: 'Delete',
    UPDATE: 'Update'
}

export default function ConfirmationPopup({msg, type, funcs}) {

  return (
    <div className='popup__container'>
        <div className="popup__msg">
            <h1>{msg}</h1>
            <div className="popup__btns">
                <Button 
                    buttonType={
                        type === POPUP_TYPES.DELETE ? BUTTON_TYPES.RED : BUTTON_TYPES.GREEN
                    } 
                    onClick={funcs.confirmFunc}
                >
                    {type === POPUP_TYPES.DELETE && POPUP_TYPES.DELETE}
                    {type === POPUP_TYPES.UPDATE && POPUP_TYPES.UPDATE}
                </Button>
                <Button 
                    buttonType={type === POPUP_TYPES.DELETE ? BUTTON_TYPES.GREEN : BUTTON_TYPES.RED} 
                    onClick={funcs.cancelFunc}
                >
                    Cancel
                </Button>
            </div>
        </div>
    </div>
  )
}
