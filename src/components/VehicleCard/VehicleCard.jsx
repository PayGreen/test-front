import style from "./VehicleCard.module.scss";

let VehicleCard = (props) => {
  return (
    <div className={style.container}>
      <div>
        #{props.vehicle.id} - {props.vehicle.make_and_model} (
        {props.vehicle.color})
      </div>
      {props.vehicle.doors < 2 && <div>{props.vehicle.doors} door</div>}
      {props.vehicle.doors >= 2 && <div>{props.vehicle.doors} doors</div>}
      <div>{props.vehicle.mileage} miles</div>
    </div>
  );
};

export default VehicleCard;
