import { Chart, Interval, Tooltip } from 'bizcharts';

const Chart2 = ({ aips }) => {

    return ( 
        <Chart 
            height={400} 
            autoFit data={aips} 
            interactions={['active-region']} 
            padding={[30, 30, 30, 50]} >
            <Interval position="date*files" />
            <Tooltip shared />
        </Chart>
     );
}
 
export default Chart2;