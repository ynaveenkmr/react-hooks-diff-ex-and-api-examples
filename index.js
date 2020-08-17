import React, { Component } from 'react';
import { render } from 'react-dom';
import SimpleForm from './SimpleForm';
import HooksTodo from './HooksTodo';
import Counter from './Counter/Counter'
import InputFields from './InputFields/InputFields'
import ArrayAddingDynamicValue from './ArrayAddingDynamicValue/ArrayAddingDynamicValue'
import OnloadEveryTImeRendering from './useEffectExample/OnloadEveryTImeRendering'
import UsingClassOnloadEveryTimeRendering from './useEffectExample/UsingClassOnloadEveryTimeRendering'
import UsingClassMouseXYPosition from './RunningEffectOnlyOnce/UsingClassMouseXYPosition'
import UsingHookMouseXYPosition from './RunningEffectOnlyOnce/UsingHookMouseXYPosition'
import MouseContainer from './Toggle/MouseContainer'
import ClassCountBySettingInterval from './CountBySettingInterval/ClassCountBySettingInterval'
import HookCountBySettingInterval from './CountBySettingInterval/HookCountBySettingInterval'
import UseReducer from './UseReducer/UseReducer'
import FetchApi from './FetchAPI/FetchApi'
import HooksTwoWayDataBinding from './TwoDataBinding/HooksTwoWayDataBinding'
import ClassTwoWayDataBinding from './TwoDataBinding/ClassTwoWayDataBinding'



import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
        <div>
        <HooksTwoWayDataBinding />
        <ClassTwoWayDataBinding />
        <br />
        <hr />
        <SimpleForm />
        <HooksTodo />
        <br />
        <Counter />
        <br />
        <InputFields />
        <br />
        <ArrayAddingDynamicValue />
        <br />
        <OnloadEveryTImeRendering />
        <UsingClassOnloadEveryTimeRendering />
        <br />
        <UsingClassMouseXYPosition />
        <UsingHookMouseXYPosition />
        <br />
        <MouseContainer />
        <br/>
        <ClassCountBySettingInterval />
        <HookCountBySettingInterval />
        <br />
        <UseReducer />
        <br />
        <FetchApi />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
