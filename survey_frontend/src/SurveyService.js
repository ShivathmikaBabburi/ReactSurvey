import axios from 'axios';
const SURVEYFORM_API_BASE_URL="http://localhost:8081/api/v1/survey_forms";

class SurveyService{
    getSurveys(){
        return axios.get(SURVEYFORM_API_BASE_URL);
    }
    createSurvey(survey){
        return axios.post(SURVEYFORM_API_BASE_URL,survey);
    }
    getSurveyById(surveyid){
        return axios.get(SURVEYFORM_API_BASE_URL+'/'+surveyid);
    }
    updateSurvey(survey,surveyid){
        return axios.put(SURVEYFORM_API_BASE_URL+'/'+surveyid,survey);
    }
    deleteSurvey(surveyid){
        return axios.delete(SURVEYFORM_API_BASE_URL+'/'+surveyid);
    }

}
export default new SurveyService()
