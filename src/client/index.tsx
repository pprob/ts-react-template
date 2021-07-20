import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';

const App: FunctionComponent<any> = () => <div>hello</div>;

ReactDOM.render(<App />, document.getElementById('app'));

module.hot?.accept();
