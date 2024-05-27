import React from 'react'
import "../CSS_Files/Success.css"

const Success = () => {
  return (
    <>
      <div className="success">
        <div className="paymentsuccessful">
          <h1>Payment Successfull</h1>
        </div>
        <hr />
        <div className="thankyou">
          <h3>Thank you for your purchase!</h3>
          <p>We hope you love our services! We appreciate your business and look forward to seeing you again soon.</p>
        </div>
      </div>
    </>
  )
}

export default Success