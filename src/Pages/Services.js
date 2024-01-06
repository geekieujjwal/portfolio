import React from "react";
import Lottie from "lottie-react";
import { serviceData } from "../data/data";

const Services = () => {
	return (
		<section className="min-h-[90vh] p-4 pb-6">
			<p
				className="text-3xl text-green-500 md:text-4xl font-bold text-center  py-[50px]"
				data-aos="fade-down"
			>
				What Do I do?
			</p>
			<div className="flex gap-6 flex-wrap justify-center">
				{serviceData.map((item) => (
					<div
						key={item.id}
						className="bg-[#212222] p-2 rounded-md shadow-md shadow-black w-[80%] max-w-[400px] md:max-w-[350px]"
						data-aos="zoom-in"
						data-aos-delay="300"
						data-aos-duration="1500"
					>
						<Lottie
							className="mx-auto"
							animationData={JSON.parse(JSON.stringify(item.animation))}
							style={{ width: "80%", maxWidth: "400px" }}
						/>
						<p className="text-xl font-bold text-center text-green-500 py-5">
							{item.title}
						</p>
						<p className="p-3 font-sans">{item.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Services;
