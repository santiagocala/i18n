import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from './locales/es';
import localeEnMessages from './locales/en';
import JobsList from "./components/jobslist";

function getMessages(){
	let messages = localeEnMessages;
	if(navigator.language === 'es-ES'){
		messages = localeEsMessages;  
	}
	return messages; 
}


ReactDOM.render(
	<IntlProvider locale={navigator.language} messages={getMessages()}>
		<JobsList/>
	</IntlProvider>, document.getElementById("root")
);