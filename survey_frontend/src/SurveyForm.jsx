import React, { Component } from 'react';
import SurveyService from './SurveyService';
import './SurveyForm.css'
const initialState = {
    username: '',
    address: '',
    zipcode: '',
    city: '',
    state: '',
    phone: '',
    email: '',
    surveyDate: '',
    liked: {
      Students: false,
      Location: false,
      Campus: false,
      Atmosphere: false,
      DormRooms: false,
      Sports: false
    },
    interest: '',
    recommendation: '',
    comments: ''
  };

class SurveyForm extends Component {
    constructor(props){
        super(props)
        this.state=initialState;
        this.changeUserNameHandler=this.changeUserNameHandler.bind(this);
        this.changeAddressHandler=this.changeAddressHandler.bind(this);
        this.changeZipcodeHandler=this.changeZipcodeHandler.bind(this);
        this.changeCityHandler=this.changeCityHandler.bind(this);
        this.changeStateHandler=this.changeStateHandler.bind(this);
        this.changePhoneHandler=this.changePhoneHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.changeDateHandler = this.changeDateHandler.bind(this);
        this.changeLikedOptionHandler = this.changeLikedOptionHandler.bind(this);
        this.changeInterestHandler = this.changeInterestHandler.bind(this);
        this.changeRecommendationHandler = this.changeRecommendationHandler.bind(this);
        this.changeCommentsHandler = this.changeCommentsHandler.bind(this); 
        this.saveSurvey=this.saveSurvey.bind(this);
    }
    cancel()
    {
        this.resetForm();
    }
    saveSurvey=(s)=>{
        s.preventDefault();
        const selectedLikedOptions = Object.keys(this.state.liked).filter(
            (option) => this.state.liked[option]
        );
        let survey={username:this.state.username,
            address:this.state.address,
            zipcode:this.state.zipcode,
        city:this.state.city,
        state:this.state.state,
        phone:this.state.phone,
        email:this.state.email,
        surveyDate:this.state.surveyDate,
        interest:this.state.interest,
        liked: selectedLikedOptions,
    recommendation:this.state.recommendation,
    comments:this.state.comments
};

        console.log('survey =>'+JSON.stringify(survey)); 

        SurveyService.createSurvey(survey).then(res=>
            {
                console.log('success');
                this.resetForm();

            });
    }
    resetForm = () => {
        this.setState(initialState);
      }
    changeUserNameHandler=(event)=>{
        this.setState({username:event.target.value});
    }
    changeAddressHandler=(event)=>{
        this.setState({address:event.target.value});
    }
    changeZipcodeHandler=(event)=>{
        this.setState({zipcode:event.target.value});
    }
    changeCityHandler=(event)=>{
        this.setState({city:event.target.value});
    }
    changeStateHandler=(event)=>{
        this.setState({state:event.target.value});
    }
    changePhoneHandler=(event)=>{
        this.setState({phone:event.target.value});
    }
    changeEmailHandler=(event)=>{
        this.setState({email:event.target.value});
    }
    changeDateHandler(event) {
        this.setState({ surveyDate: event.target.value });
    }
    changeInterestHandler(event) {
        this.setState({ interest: event.target.value });
    }
    changeLikedOptionHandler(event) {
        const optionName = event.target.name;
        const isChecked = event.target.checked;

        this.setState(prevState => ({
            liked: {
                ...prevState.liked,
                [optionName]: isChecked
            }
        }));
    }
    changeRecommendationHandler(event) {
        this.setState({ recommendation: event.target.value });
    }
    changeCommentsHandler(event) {
        this.setState({ comments: event.target.value });
    }
    render() {
        const interestOptions = ["Friends", "Television", "Internet", "Other"];
        const recommendationOptions = ['', 'Very Likely', 'Likely', 'Unlikely'];
        return (
            
            <div class="form-box">
                <h1 class="heading">SURVEY FORM</h1>
            <div className='container'>
                <form>
                    <div className="form-group">
                        <label>USERNAME:<span class="required">*</span></label>
                        <input placeholder='name' name="username" className='form-control' value={this.state.username} onChange={this.changeUserNameHandler} required></input>
                    </div>
                    <h3 class="address-header">Address Information</h3>
                    <div className="form-group">
                        <label>STREET ADDRESS:<span class="required">*</span></label>
                        <input placeholder='4400 university dr' name="address" className='form-control' value={this.state.address} onChange={this.changeAddressHandler} required></input>
                    </div>
                    <div className="form-group">
                        <label>ZIPCODE:<span class="required">*</span></label>
                        <input placeholder='22030' name="zipcode" className='form-control' value={this.state.zipcode} onChange={this.changeZipcodeHandler} required></input>
                    </div>
                    <div className="form-group">
                        <label>CITY:<span class="required">*</span></label>
                        <input placeholder='fairfax' name="city" className='form-control' value={this.state.city} onChange={this.changeCityHandler} required></input>
                    </div>
                    <div className="form-group">
                        <label>STATE:<span class="required">*</span></label>
                        <input placeholder='VA' name="state" className='form-control' value={this.state.state} onChange={this.changeStateHandler} required></input>
                    </div>
                    <h3 class="address-header">Contact Information</h3>
                    <div className="form-group">
                        <label>PHONE NUMBER:<span class="required">*</span></label>
                        <input placeholder='4435421234' name="phone" className='form-control' value={this.state.phone} onChange={this.changePhoneHandler} type='phone' required></input>
                    </div>
                    <div className="form-group">
                        <label>EMAIL:<span class="required">*</span></label>
                        <input placeholder='example@example.com' name="email" className='form-control' type="email" value={this.state.email} onChange={this.changeEmailHandler} required></input>
                    </div>
                    <div className="form-group">
                    <label>SURVEY DATE:<span class="required">*</span></label>
                    <input 
                        type="date" 
                        placeholder='Enter date' 
                        name="surveyDate" 
                        className='form-control' 
                        value={this.state.surveyDate} 
                        onChange={this.changeDateHandler}
                    /></div>
                    <h3 class="address-header">Your Preferences</h3>
                    <div className="form-group">
                        <label>WHAT DID YOU LIKE MOST ABOUT THE CAMPUS?</label>
                        {Object.keys(this.state.liked).map(option => (
                            <div key={option} className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id={option}
                                    name={option}
                                    checked={this.state.liked[option]}
                                    onChange={this.changeLikedOptionHandler}
                                />
                                <label className="form-check-label" htmlFor={option}>{option}</label>
                            </div>
                        ))}
                    </div>
                     <div className="form-group">
                    <label>HOW DID YOU BECOME INTERESTED IN THE UNIVERSITY?</label>
                    {interestOptions.map((option, index) => (
                        <div key={index} className="form-check">
                            <input 
                                type="radio" 
                                className="form-check-input" 
                                id={option} 
                                value={option} 
                                checked={this.state.interest === option} 
                                onChange={this.changeInterestHandler} 
                                name="interest"
                            />
                            <label className="form-check-label" htmlFor={option}>{option}</label>
                        </div>
                    ))}
                </div>
                <div className="form-group">
                        <label>LIKELIHOOD OF RECOMMENDATION</label>
                        <select
                            className="custom-select"
                            id="recommendation"
                            value={this.state.recommendation}
                            onChange={this.changeRecommendationHandler}
                            name="recommendation"
                            style={{ height: '50px' }}
                        >
                            {recommendationOptions.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>ADDITIONAL COMMENTS</label>
                        <textarea
                            className="form-control"
                            id="comments"
                            value={this.state.comments}
                            onChange={this.changeCommentsHandler}
                            name="comments"
                        ></textarea>
                    </div>
                    <div class="form-button-group">
                    <button className='btn btn-success' onClick={this.saveSurvey}>SUBMIT</button>
                    <button className='btn btn-danger' onClick={this.changeZipcodeHandler.bind(this)}>CANCEL</button>
                    </div>
                </form>
                </div>
                
            </div>
        );
    }
}

export default SurveyForm;