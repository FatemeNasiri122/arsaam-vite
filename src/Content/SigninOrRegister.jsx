import classes from '../styles/Content/SigninOrRegister.module.scss';
import containerClass from '../styles/Content/Container.module.scss';
import cross from '../assets/img/cross.svg'
import SigninContainer from "./SignInContainer";

export default function SigninOrRegister() {
    return (
        <div className={containerClass.widerContainer}>
            <div className={classes.closeContainer}>
                <div className={classes.closeWrapper}>
                    <img src={cross} alt=""/>
                </div>
            </div>
            <SigninContainer/>
        </div>
    );
};

