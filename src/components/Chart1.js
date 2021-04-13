import { Chart, Line, Point, Tooltip } from 'bizcharts';

const Chart1 = ({ aips }) => {

    return ( 
        <Chart 
            height={400} 
            autoFit 
            data={aips}             
            appendPadding={[10, 0, 0, 10]} >
            <Line position="date*files" />
            <Point position="date*files" />
            <Tooltip showCrosshairs />
        </Chart>
     );
}
 
export default Chart1;