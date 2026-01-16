import React from "react";

const ServiceComponent = ({image, altText, headingText, paragraphText}) => {
    return (
        <>
            <img src={image} alt={altText} className={"w-10 h-10 lg:w-[55px] lg:h-[55px] justify-self-center"} />
            <div className={"col-span-5"}>
                <h2 className={"font-sunFlower text-lg lg:text-2xl font-bold"}>{headingText}</h2>
                <p className={"font-poppins text-[10px] lg:text-xs"}>{paragraphText}</p>
            </div>
        </>
    );
};

export default ServiceComponent;