import React from 'react'
import "./Aboutus.css"

const Aboutus = () => {
  return (
    <div>
        <div class="container about-section">
    <div class="row align-items-center">
        {/* <!-- Left Side Image --> */}
        <div class="col-md-6 about-image position-relative">
    <div class="green-box"></div>
    <img src="/images/Hero-section-4.webp" alt="Farmer" class="img-fluid farmer-image"/>
</div>

        {/* <!-- Right Side Content --> */}
        <div class="col-md-6 about-content">
            <h2 className='common-heading'>  Empowering Farmers & Businesses</h2>
            <div class="row mt-4">
                <div class="col-md-6">
                    <div class="feature-box">
                        <img src="https://via.placeholder.com/50" alt="Organic Food"/>
                        <h5>Organic Food</h5>
                        <p>Providing fresh, organic food for a healthy lifestyle.</p>
                        <a href="#">READ MORE</a>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="feature-box">
                        <img src="https://via.placeholder.com/50" alt="Green World"/>
                        <h5>Green World</h5>
                        <p>Promoting sustainable and eco-friendly agriculture.</p>
                        <a href="#">READ MORE</a>
                    </div>
                </div>
                <div class="col-md-6 mt-3">
                    <div class="feature-box">
                        <img src="https://via.placeholder.com/50" alt="Healthy Food"/>
                        <h5>Healthy Food</h5>
                        <p>Ensuring nutritious food options for everyone.</p>
                        <a href="#">READ MORE</a>
                    </div>
                </div>
                <div class="col-md-6 mt-3">
                    <div class="feature-box">
                        <img src="https://via.placeholder.com/50" alt="Healthy Food"/>
                        <h5>Healthy Food</h5>
                        <p>Ensuring nutritious food options for everyone.</p>
                        <a href="#">READ MORE</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

      
    </div>
  )
}

export default Aboutus
