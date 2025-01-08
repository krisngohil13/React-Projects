import {useState} from 'react';  
import TabButton from './TabButton';
import {EXAMPLES} from '../data';
import Section from './Section';
import Tabs from './Tabs';




export default function Examples(){
    const [selectedTab, setSelectedTab] = useState();

  function handleSelect(tab){
    setSelectedTab(tab);
    console.log(`You selected ${tab}`);
  }
    return(
        <Section title="Examples" id="examples">
            <Tabs 
            buttonsContainer="menu"
            buttons={
                <>
                <TabButton isSelected={selectedTab === 'components'} onClick={()=>handleSelect('components')}>Components</TabButton>
                <TabButton isSelected={selectedTab === 'props'} onClick={()=>handleSelect('props')}>Props</TabButton>  
                <TabButton isSelected={selectedTab === 'state'} onClick={()=>handleSelect('state')}>State</TabButton>
                <TabButton isSelected={selectedTab === 'jsx'} onClick={()=>handleSelect('jsx')}>JSX</TabButton>
                </>
            }/>
          {!selectedTab ? <p>Select Tab </p> :  <div id="tab-content"> <h3>{EXAMPLES[selectedTab].title}</h3>
            <p>{EXAMPLES[selectedTab].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTab].code}
              </code>
            </pre></div>}
          
           
        </Section>
    );
}