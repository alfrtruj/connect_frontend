import { PieChart } from 'bizcharts';

const Chart3 = ({ aips }) => {
      
    console.log(aips);

    return ( 
        <PieChart
            data={aips}
            title={{
                visible: true,
                text: 'File formats',
            }}
            description={{
                visible: true,
                text: 'Vamos，test',
            }}
            radius={0.8}
            angleField='files'
            colorField='package_name'
            label={{
                visible: true,
                type: 'outer',
                offset: 20,
            }}
        />
     );
}
 
export default Chart3;