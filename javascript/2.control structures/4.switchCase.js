const trafficLight = 'green';
switch (trafficLight) {
  case 'red':
    console.log('stop immediately.');
    break;
  case 'yellow':
    console.log('prepare to stop.');
    break;
  case 'green':
    console.log('proceed or continue driving.');
    break;
  default:
    console.log('invalid traffic light');
}
