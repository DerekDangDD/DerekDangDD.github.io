import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let 
        tab1 = "Technical Skills - Current",
        tab2 = "Work Experience",
        tab3 = "Education",
        tab4 = "Courses";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab>
                                        <Tab>{tab4}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    Languages: <span></span>
                                                    Python, Java, SQL, Shell Script
                                                </li>
                                                <li>
                                                    Tools/Technologies:<span></span>
                                                    HANA Studios, Jenkins, Docker, Linux, Vault
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>
                    
                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   iXp Intern Agile Developer<span> - SAP</span> May 2019 - May (2020)
                                               </li>
                                               <li>
                                                   Prodiction Manager<span> - Synergy Semiochemicals Corp.</span> July 2016 – August 2018
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                               Computer Systems Technology Diploma – Co-op Program<span> - British Columbia Institute of Technology</span> September 2018 – Present
                                               </li>
                                               <li>
                                               Bachelor of Applied Science Degree – Chemical Engineering<span> - University of British Columbia</span> September 2011 – May 2015
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>       

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                               Object-Oriented Programming <span>- Java</span>
                                               </li>
                                               <li>
                                               Procedural Programming <span>- C</span>
                                               </li>
                                               <li>
                                               Relational Database <span>- SQL</span>
                                               </li>
                                               <li>
                                               Web Development <span>- JavaScript</span>
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>                             
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;