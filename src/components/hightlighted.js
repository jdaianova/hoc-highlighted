import New from "./New";
import Popular from "./Popular";

function hightlighted(Component) {
    return function (props) {
        if (props.views >= 1000) {
            return <Popular> <Component {...props} />  </Popular>
        } else if (props.views < 100) {
            return <New> <Component {...props} />  </New>
        }
    }
}

export default hightlighted;