function liveTime(){
  const greeting = React.createElement('h1', {}, 'Hello, world!!');
  const clock = React.createElement('h2', {}, `It is ${new Date().toLocaleTimeString()}`);
  const app = React.createElement('div', {}, greeting, clock);

  ReactDOM.render(
    app,
    document.getElementById('react-app-root')
  );
}

setInterval(liveTime, 1000);

