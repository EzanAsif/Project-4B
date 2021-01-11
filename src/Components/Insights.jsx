import React from 'react'

const Insights = () => {
    return (
        <div className = "Insights">
            <h5 className = "insights-prim">What's New</h5>
            <h2 className = "insights-sec">Insights from the Junto team.</h2>
            <div className="insights-container">
                <div className="sign-up">
                    <h5>SIGN UP FOR OUR DIGITAL NEWSLETTER</h5>
                    <h2>Bringing you tips, tricks and digital growth techniques</h2>
                    <div className="form">
                        <input type="text" placeholder = "Email*"/>
                        <h6>*we will never spam you or sell your information.</h6>
                        <button>Subscribe to our newsletter</button>
                    </div>
                </div>
                <div className="insights-container-img">
                    <div className="insights-container-img-heading">
                        <h5>from our blog</h5>
                        <h3>The Purpose of a Blog: How Blogging Drives Sales</h3>
                    </div>
                    <div className="insights-container-img-button">
                        <button>Read this article</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Insights
