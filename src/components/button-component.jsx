import React from "react";

const ButtonComponent = ({buttonType,className, onClick, children}) => (
    <button type={buttonType} className={className} onClick={onClick}>{children}</button>
)

export default ButtonComponent;