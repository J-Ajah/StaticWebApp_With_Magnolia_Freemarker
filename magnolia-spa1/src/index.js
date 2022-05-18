import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  "./Global.css"
import { EditablePage } from '@magnolia/react-editor';
import reportWebVitals from './reportWebVitals';
import Home from "./pages/Home"
import Text from "./components/Text"
import List from "./components/List"
import Item from "./components/Item"
import Header from "./components/Header"
import Banner from "./components/Banner"
import About from "./components/About"
import Offer from "./components/Offer"
import Footer from "./components/Footer"
import Image from "./components/Image"


// These are the component mappings between what magnolia returns as an mgnl:template to the javascript component.
const config = {
  componentMappings: {
    'spa:pages/Home': Home,
    // 'spa:pages/Contact': Contact,
    'spa:components/Text': Text,
    'spa:components/List': List,
    'spa:components/Item': Item,
    'spa:components/header': Header,
    'spa:components/banner': Banner,
    'spa:components/about': About,
    'spa:components/offer': Offer,
    'spa:components/footer': Footer,
    'spa:components/image': Image,
  },
};


class App extends React.Component {
  state = {};
 
  async componentDidMount() {
    const isPagesApp = window.location.search.includes('mgnlPreview');
    let templateAnnotations;
    const languages = ['en','de']; 
    const nodeName = 'spa-home';
    const pathName = window.location.pathname;
     
    // CHECK AND SET THE LANGUAGE THE PAGE WILL USE
    let currentLanguage = languages[0]
    // eslint-disable-next-line array-callback-return
    languages.some((language)=>{
         if(new RegExp('/'+ language + '($|/)').test(pathName)){
           currentLanguage = language;
           return true;
         }
    })
    
    
    let nodePath = nodeName + window.location.pathname.replace(new RegExp('(.*' + nodeName + '|.html)', 'g'), '');
    nodePath = nodePath.replace(new RegExp('/'+ currentLanguage + '($|/)'),'/');
    
    console.log('http://localhost:8080/magnoliaAuthor/.rest/pages/'+ nodePath + '?lang='+ currentLanguage);
    // const pageRes = await fetch('http://localhost:8080/magnoliaAuthor/.rest/pages/'+ nodePath + '?lang='+ currentLanguage);
    const pageRes = await fetch('http://localhost:8080/magnoliaAuthor/.rest/pages/Simple-web-React');
    const page = await pageRes.json();
 
    if (isPagesApp) {
      // const templateAnnotationsRes = await fetch(
      //   'http://localhost:8080/magnoliaAuthor/.rest/template-annotations/v1/'+ nodePath
      // );
      const templateAnnotationsRes = await fetch(
        'http://localhost:8080/magnoliaAuthor/.rest/template-annotations/v1/Simple-web-React'
      );
 
      templateAnnotations = await templateAnnotationsRes.json();
    }
 
    this.setState({ page, templateAnnotations });
  }
 
  render() {
    const { page, templateAnnotations } = this.state;
 
    return (
      <div className='App'>
        {page && config && <EditablePage content={page} config={config} templateAnnotations={templateAnnotations} />}
      </div>
    );
  }
}









 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
