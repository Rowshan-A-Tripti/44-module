import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    
    const subMarksData = [
          {id: 1, name: "Alice", physics:67, chemistry:77, math: 85 },
          {id: 2, name: "Bob", physics:43, chemistry:98, math: 78},
          {id: 3, name: "Charlie", physics:57, chemistry:56, math: 92 },
          {id: 4, name: "David", physics:63, chemistry:48, math: 88 },
          {id: 5, name: "Eve", physics:65, chemistry:64, math: 76 },
          {id: 6, name: "Frank", physics:69, chemistry:97, math: 94 },
          {id: 7, name: "Sha", physics:83, chemistry:37, math: 67 },
          {id: 8, name:"Ayesha", physics:97, chemistry:83, math: 98 },
          {id: 9, name:"Shu", physics:39, chemistry:97, math: 57},
          {id:10, name:"Leo", physics:49, chemistry:73, math: 99}
            
        ];
      
      

    return (
        <div>
            <LChart width={800} height={400} data={subMarksData}>
                <XAxis dataKey="name" />
                <YAxis dataKey="" />
                <Line dataKey="math" stroke="red"></Line>
                <Line dataKey="physics" stroke="blue"></Line>
                <Line dataKey="chemistry" stroke="yellow"></Line>
            </LChart>
        </div>
    );
};

export default LineChart;