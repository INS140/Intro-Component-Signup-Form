import Form from "./components/form";

function SignupForm() {
  return (
    <div className="card">
      <div className="text-container">
        <h1>Learn to code by watching others</h1>
        <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
          but understanding how developers think is invaluable.</p>
      </div>
      <div className="signup-container">
        <div className="free-trial-container">
          <p><span className="try-free">Try it free 7 days</span> then $20/mo. thereafter</p>
        </div>
        <div className="form-container">
          <Form />
          <p className="fine-print">By clicking the button, you are agreeing to our 
            <span className="terms"> Terms and Services</span></p>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
