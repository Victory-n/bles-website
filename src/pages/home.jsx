import React from "react";
import ButtonComponent from "../components/button-component.jsx";
import {getSpecializationList} from "../components/specialization/specialization-list.jsx";
import Specialization from "../components/specialization/specialization.jsx";
import NursePNG from "../assets/img/nurse.png";
import {getServiceList} from "../components/services/service-list.jsx";
import ServiceComponent from "../components/services/service.jsx";

function HomePage() {
    return (
        <div className={"2xl:w-7xl 2xl:mx-auto"}>
            <section className={"bg-[url(./assets/img/bg-home.png)] bg-no-repeat bg-cover h-[500px] px-6 lg:px-[50px] flex items-center"}>
                <div className={"text-center lg:text-left"}>
                    <h1 className={"font-sunFlower text-4xl lg:text-[64px] font-bold text-white leading-none tracking-normal"}>BrightLife Enhancement Services</h1>
                    <p className={"text-white font-poppins pt-5 text-xs lg:text-xl"}>Expert treatment for depression, anxiety, ADHD, bipolar disorder, substance use, schizophrenia, and insomnia. <br /> Your journey to mental wellness starts here</p>
                    <ButtonComponent className="bg-button-primary mt-[30px] px-2.5 py-[15px] rounded-[10px] font-poppins text-white">
                        {"Book an Appointment"}
                    </ButtonComponent>
                </div>
            </section>
            <section className={"py-6 lg:py-[100px]"}>
                <div>
                    <div className={"text-center space-y-5 px-3"}>
                        <h2 className={"font-sunFlower font-bold text-4xl lg:text-[40px]"}><span className={"hidden lg:inline-block"}>Area of</span> Specialization</h2>
                        <p className={"font-poppins text-sm lg:text-[16px]"}>Providing expert psychiatric care across a comprehensive range of mental health conditions</p>
                    </div>
                    <div className={"py-[30px] px-5 lg:py-[50px] lg:px-[50px] space-y-5 lg:space-y-0 lg:gap-[30px] lg:flex lg:flex-wrap lg:justify-center"}>
                        {getSpecializationList.map((item, index) => (
                            <Specialization
                                key={index}
                                image={item.image}
                                altImage={item.altImage}
                                headingText={item.headingText}
                                paragraphText={item.paragraphText}
                            />
                        ))}
                    </div>
                </div>
                <div className={"mx-5 mt-[100px] lg:mx-[50px] rounded-[10px] w-auto lg:h-[207px] bg-button-primary"}>
                    <div className={"ml-[5px] rounded-[10px] w-auto lg:h-[207px] bg-button-green-opacity lg:flex lg:items-center lg:justify-center"}>
                        <div className={"px-5 py-[30px] lg:py-0 lg:px-[60px] space-y-5"}>
                            <h2 className={"font-bold font-sunFlower text-2xl lg:text-4xl"}>Why Choose Our Practice?</h2>
                            <div className={"font-poppins text-xs lg:text-sm grid gap-6 lg:grid-cols-3 lg:gap-[50px]"}>
                                <p><strong className={"text-button-primary"}>Evidence-Based Care:</strong> Treatment approaches grounded in the latest psychiatric research and best practices.</p>
                                <p><strong className={"text-button-primary"}>Personalised Treatment:</strong> Individualized care plans tailored to your specific needs and goals.</p>
                                <p><strong className={"text-button-primary"}>Compassionate Support:</strong> A warm, non-judgmental environment where you feel heard and understood.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={"py-[50px]"}>
                <div className={"text-center space-y-5 px-3"}>
                    <h2 className={"font-sunFlower font-bold text-4xl lg:text-[40px]"}>Our Services</h2>
                    <p className={"font-poppins text-sm lg:text-[16px]"}>Designed services designed to support your mental health journey</p>
                </div>
                <div className={"grid lg:grid-cols-2 lg:justify-items-stretch p-6 lg:p-[50px] gap-[30px] lg:gap-[50px]"}>
                    <img src={NursePNG} alt={"nurse"} className={"h-full object-cover"} />
                    <div className={"grid grid-cols-6 space-y-5 lg:place-self-center lg:space-y-[30px]"}>
                        {getServiceList.map((item, index) => (
                            <ServiceComponent
                            key={index}
                            image={item.image}
                            altText={item.altText}
                            headingText={item.headingText}
                            paragraphText={item.paragraphText}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;