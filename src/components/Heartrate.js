function Heartrate() {
    var rythmeCardiaque = 40 + Math.floor(Math.random() * (200 - 40));
    var pbBpm = ""
    var description = " "
    if (rythmeCardiaque<50 || rythmeCardiaque>150) {
        pbBpm = "pbBpm";
    }
    else {
        pbBpm ="bpmOk";  
    }
    description = rythmeCardiaque + " bpm";
    return <div class={pbBpm}> {description} </div>;
}

export default Heartrate;