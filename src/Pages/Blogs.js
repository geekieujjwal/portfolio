import React from "react";
import { blogData } from "../data/data";

const Blogs = () => {
	return (
		<section className="min-h-[90vh] p-4 pb-6">
			<p
				className="text-3xl text-green-500 md:text-4xl font-bold text-center  py-[40px]"
				data-aos="fade-down"
			>
				Go and Read!
			</p>
			<div className="flex gap-6 flex-wrap justify-center">
				{blogData.map((item) => (
					<div
						key={item.id}
						className="bg-[#212222] p-2 rounded-md shadow-md shadow-black w-[80%] max-w-[400px] md:max-w-[350px]"
						data-aos="fade-up"
						data-aos-anchor-placement="center-bottom"
						data-aos-duration="1500"
					>
						<img src={item.cover} alt="" />
						<p className="text-xl font-bold text-center  py-5">{item.title}</p>
						<p className="font-semibold pl-3 text-green-500">
							By {item.author}
						</p>
						<p className="p-3 font-serif">{item.desc}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Blogs;
