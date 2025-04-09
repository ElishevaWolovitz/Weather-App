import snowflake from '../../assests/weatherIcons/snowflake.png';
import cloud from '../../assests/weatherIcons/cloud.png';
import sun from '../../assests/weatherIcons/sun.png';
import thermometer from '../../assests/weatherIcons/thermometer.png';


const getTempIcon = (TempProp: number): [string, string] => {
    if (TempProp >= 30) {
        return [thermometer, 'thermometer icon'];
    } else if (TempProp >= 15) {
        return [sun, 'sun icon'];
    } else if (TempProp > 0) {
        return [cloud, 'cloud icon'];
    } else {
        return [snowflake, 'snowflake icon'];
    }
};

export default getTempIcon;