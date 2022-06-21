import React from 'react';
const Footer = (props) => {
	return (
		<div className="text-center text-lg-start text-white sticky-bottom" style={FooterStyle}>
				<div
				className="d-flex justify-content-between p-2">
				<div className="me-5">
					<span>Follow me on Github</span>
				</div>
				<div>
				
					<a href="https://github.com/jorge06br" className="text-white me-4">
						<i className="fab fa-github"></i>
					</a>
				</div>
			</div>
			<div className="">
				<div className="container text-center text-md-start mt-2">
					<div className="row mt-2">
						
						<div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-2">
							<h6 className="text-uppercase fw-bold">Tecnologías</h6>
							<hr
								className="mb-4 mt-0 d-inline-block mx-auto"
								style={FooterStylesColHeader}
							/>
							<p>
								<a href="https://getbootstrap.com/docs/5.1/getting-started/introduction/" className="text-white">Bootstrap 5.1.3</a>
							</p>
							<p>
								<a href="reactjs.org" className="text-white">React JS</a>
							</p>
							<p>
								<a href="https://www.w3schools.com/js/default.asp" className="text-white">Javascript</a>
							</p>
							<p>
								<a href="https://stackoverflow.com/" className="text-white">stackoverflow</a>
							</p>
						</div>
						<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 ">
							<h6 className="text-uppercase fw-bold">Contacto</h6>
							<hr
								className="mb-4 mt-0 d-inline-block mx-auto"
								style={FooterStylesColHeader}
							/>
							<p><i className="fas fa-home mr-2"></i> Managua,Nicaragua</p>
							<p><i className="fas fa-envelope mr-2"></i> jorgebaca06@gmail.com</p>
							<p><i className="fas fa-phone mr-2"></i> +505-86792585</p>
						</div>
					</div>
				</div>
			</div>
			<div className="text-center ">
				<a className="text-white" href="https://mdbootstrap.com/">Copyright®2022</a>
			</div>
		</div>
	)
}

const FooterStylesColHeader={
	width: "60px",
	backgroundColor:"white",
	height:"2px"
}
const  FooterStyle={
	backgroundColor:"#343a40",
    height:"300px"
}

export default Footer