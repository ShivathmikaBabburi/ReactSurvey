import React, { Component } from 'react';
import SurveyService from './SurveyService';
import './SurveyLists.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


class SurveyLists extends Component {
    
    

    constructor(props)
    {
        super(props)
        this.state={
            surveyform:[]
        }
        this.deleteSurvey=this.deleteSurvey.bind(this);
        
    }
    deleteSurvey(id)
    {
        SurveyService.deleteSurvey(id).then(res=>{SurveyService.getSurveys().then((res)=>{
            this.setState({surveyform:res.data})
        });
            

        });
    }
   
    
    componentDidMount(){
        SurveyService.getSurveys().then((res)=>{
            this.setState({surveyform:res.data})
        });
    }

    
    render() {
        return (
<div id="myTable">
  <div className="table-responsive">
    <table className="table table-bordered">
            <div className='table'>
                <div className='row'>
                <thead>
        <tr>
          <th>ID</th>
          <th>USERNAME</th>
          <th>ADDRESS</th>
          <th>ZIPCODE</th>
          <th>CITY</th>
          <th>STATE</th>
          <th>PHONE NUMBER</th>
          <th>EMAIL</th>
          <th>SURVEY DATE</th>
          <th>LIKED</th>
          <th>INTEREST</th>
          <th>COMMENTS</th>
          <th>RECOMMENDATION</th>
          <th>OPERATIONS</th>
        </tr>
      </thead>
      <tbody>
        {
            this.state.surveyform.map(
                surveyform=>
                <tr key={surveyform.id}>

        <td>{ surveyform.id}</td>
          <td>{ surveyform.username }</td>
          <td>{surveyform.address }</td>
          <td>{ surveyform.zipcode }</td>
          <td>{ surveyform.city }</td>
          <td>{ surveyform.state }</td>
          <td>{ surveyform.phone }</td>
          <td>{ surveyform.email }</td>
          <td>{ surveyform.surveyDate }</td>
          <td>{surveyform.liked.join(', ')}</td>
          <td>{ surveyform.interest }</td>
          <td>{ surveyform.comments }</td>
          <td>{ surveyform.recommendation }</td>
          <td>
          <div className="button-container">
          <button  className="btn btn-success"><a href={`/UpdateSurvey/${surveyform.id}`}>UPDATE</a></button>
        <button  className="btn btn-danger" onClick={()=>this.deleteSurvey(surveyform.id)}>DELETE</button>
        </div>
        </td>
        </tr>
            )}
        
      </tbody>
                </div>
               
            </div>
            </table></div>?
  </div>
        );
    }
}

export default SurveyLists;
