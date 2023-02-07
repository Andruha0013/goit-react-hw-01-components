//import { Profile } from "components/Profile/Profile";
//import MyJson from '../../data/user.json';
import css from "./Container.module.css";
//console.log(MyJson);
export const Container=({element,bgWhite})=>{
    return (
        <div className={bgWhite ? (css.container+" "+css.container__white) : css.container}>
            {element}
        </div>
    );
}