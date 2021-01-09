import React from 'react';
import classNames from 'classnames';
function Button({onClick, className, outline, children}) {
    return(
        // return <button  className={`button ${this.props.outline ?'button--outline' : ''}`}>{this.props.children}</button>
         <button 
         onClick = {onClick} 
         className={classNames('button', className, {'button--outline' : outline})}>{children}
         </button>
    )
}

export default Button