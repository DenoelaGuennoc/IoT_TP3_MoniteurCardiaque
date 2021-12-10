function Heartrate(props) {
    const {data}=props;
    console.log(data);

    var pbBpm = "";
    var description = " ";

    if (!data) {
        return <p>Aucune donnée</p>
    }
    else if (data<60 || data>100) {
        pbBpm = "bpmDanger";
    }
    else {
        pbBpm ="bpmOk";  
    }
    description = data + " bpm";
    return <div className={pbBpm}> {description} </div>;
}

export default Heartrate;