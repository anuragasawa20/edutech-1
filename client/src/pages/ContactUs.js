import { useState } from 'react';
import '../styles/ContactUs.css';

const ContactUs = () => {
    const [studentName, setStudentName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [selectedClass, setSelectedClass] = useState('');
    const [areaPinCode, setAreaPinCode] = useState('');
    const [remarks, setRemarks] = useState('');

    const handleMobileChange = (event) => {
        setMobileNumber(event.target.value);
        if (event.target.value === '') {
            document.getElementById('RequiredFieldValidator2').style.display = 'inline';
        } else {
            document.getElementById('RequiredFieldValidator2').style.display = 'none';
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (studentName && mobileNumber && selectedClass && areaPinCode) {
            // Form inputs are valid, proceed with form submission
            console.log('Submitting form:', {
                studentName,
                mobileNumber,
                selectedClass,
                areaPinCode,
                remarks
            });

            // Clear form inputs
            setStudentName('');
            setMobileNumber('');
            setSelectedClass('');
            setAreaPinCode('');
            setRemarks('');
        } else {
            // Display error or validation messages
            console.log('Please fill in all required fields');
            document.getElementById('ValidationSummary2').style.display = 'inline';
        }
    };

    return (
        <div className="contact-us-container" style={{ width: "80%" }}>
            <div className="left-side-ads-and-menu">
                <h3>IPEC LTD.</h3>
                <p>Email: email@example.com</p>
                <p>All India Toll Free No.: <span className="big-font">999999999</span></p>
                <p className="email-style"><a href="email@example.com">email@example.com</a></p>
                <p className="email-style"><a href="email@example.com">email@example.com</a></p>
                <div className="add-right">
                    <h4>General Queries</h4>
                </div>
                <p className="email-style"><a href="email@example.com">email@example.com</a></p>
                <div className="add-right">
                    <h4>Online Support</h4>
                </div>
                
                <p className="email-style"><a href="email@example.com">email@example.com</a></p>
                <div className="add-right">
                    <div className="add-right">
                        <h4>Online Registration Queries</h4>
                    </div>
                    <p className="email-style"><a href="email@example.com">email@example.com</a></p>
                    <div className="all-center"></div>
                </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Seek Our Support</h2>
                <div className="form-group">
                    <label htmlFor="studentName">Student Name</label>
                    <input
                        required
                        type="text"
                        id="studentName"
                        name="studentName"
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        placeholder="Enter Student Name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="mobileNumber">Mobile Number</label>
                    <input
                        required
                        type="text"
                        id="mobileNumber"
                        name="mobileNumber"
                        value={mobileNumber}
                        onChange={handleMobileChange}
                        placeholder="Enter Mobile Number"
                    />
                    <span id="RequiredFieldValidator2" className="validation-error">Please enter a mobile number</span>
                </div>
                <div className="form-group">
                    <label htmlFor="selectedClass">Class</label>
                    <select
                        id="selectedClass"
                        name="selectedClass"
                        value={selectedClass}
                        onChange={(e) => setSelectedClass(e.target.value)}
                    >
                        <option value="">--Select Class--</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12th Pass">12th Pass</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="areaPinCode">Area Pin Code</label>
                    <input
                        type="text"
                        id="areaPinCode"
                        name="areaPinCode"
                        value={areaPinCode}
                        onChange={(e) => setAreaPinCode(e.target.value)}
                        placeholder="Enter Area Pin Code"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="remarks">Remarks</label>
                    <textarea
                        id="remarks"
                        name="remarks"
                        rows="2"
                        value={remarks}
                        onChange={(e) => setRemarks(e.target.value)}
                        placeholder="Enter Remarks"
                    ></textarea>
                </div>
                <button type="submit" className="submit-btn mb-5" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
};

export default ContactUs;
