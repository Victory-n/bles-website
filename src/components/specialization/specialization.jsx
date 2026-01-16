import React from "react";

const Specialization = ({image, altImage, headingText, paragraphText}) => {
    return (
        <div className={"bg-button-primary w-full h-[202px] lg:w-[200px] lg:h-[302px] rounded-[10px] flex items-end"}>
            <div className={"bg-white w-full h-[200px] lg:w-[200px] lg:h-[300px] float-end rounded-[10px] shadow-2xl px-2.5 pt-2.5 space-y-2.5 lg:space-y-5"}>
                <img src={image} alt={altImage} />
                <h2 className={"font-sunFlower font-bold text-xl lg:text-2xl"}>{headingText}</h2>
                <p className={"font-poppins text-xs"}>{paragraphText}</p>
            </div>
        </div>
    );
};

export default Specialization;