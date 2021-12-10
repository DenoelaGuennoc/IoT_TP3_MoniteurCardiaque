function Heartrate(props) {
    const {data}=props;
    console.log(data);

    var pbBpm = "";
    var description = " ";

    if (data<50 || data>150) {
        pbBpm = "pbBpm";
    }
    else {
        pbBpm ="bpmOk";  
    }
    description = data + " bpm";
    return <div className={pbBpm}> {description} </div>;
}

export default Heartrate;