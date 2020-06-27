import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import SurveyTable from './SurveyTable';
import MentalEmotionalHelp from './MentalEmotionalHelp';
import NotFoundPage from '../NotFoundPage';
import UnstableIncomePage from './UnstableIncomePage';
import ResourceInsecurityPage from './ResourceInsecurityPage';
import CollegeHelpPage from './CollegeHelpPage';
import ChildcarePage from './ChildcarePage';
import DIYPage from './DIYPage';

const CovidHome = () => {

    return (<>
        <div className='jumbotron'>
            <h1>Covid-19 Pandemic Resources</h1>
            <h3>Check out the following resources:</h3>
            <Link style={{ margin: '1rem', marginLeft: '0rem' }} to='/covid-19/mental-emotional' className='btn btn-primary'>Mental and Emotional Resources</Link>
            <Link style={{ margin: '1rem', marginLeft: '0rem' }} to='/covid-19/unstable-income' className='btn btn-primary'>Unstable Income</Link>
            <Link style={{ margin: '1rem', marginLeft: '0rem' }} to='/covid-19/resource-insecurity' className='btn btn-primary'>Resource Insecurity</Link>
            <Link style={{ margin: '1rem', marginLeft: '0rem' }} to='/covid-19/college-help' className='btn btn-primary'>College Help</Link>
            <Link style={{ margin: '1rem', marginLeft: '0rem' }} to='/covid-19/childcare' className='btn btn-primary'>Childcare and Homeschooling</Link>
            <Link style={{ margin: '1rem', marginLeft: '0rem' }} to='/covid-19/diy' className='btn btn-primary'>DIY Projects</Link>
        </div>

        {
            // For Covid route handling
        }
        <Switch>
            <Route path='/covid-19/diy' component={DIYPage} />
            <Route path='/covid-19/childcare' component={ChildcarePage} />
            <Route path='/covid-19/college-help' component={CollegeHelpPage} />
            <Route path='/covid-19/resource-insecurity' component={ResourceInsecurityPage} />
            <Route path='/covid-19/mental-emotional' component={MentalEmotionalHelp} />
            <Route path='/covid-19/unstable-income' component={UnstableIncomePage} />
            <Route path='/covid-19' exact component={SurveyTable} />
            <Route component={NotFoundPage} />
        </Switch>
    </>);
}
export default CovidHome;