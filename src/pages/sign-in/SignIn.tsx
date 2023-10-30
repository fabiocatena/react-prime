import './SignIn.css'
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import React, {useState} from "react";
import { classNames } from 'primereact/utils';
import { SelectButton } from 'primereact/selectbutton';
import { Button } from 'primereact/button';
const SignIn: React.FC = () => {
  
    const options = ['Off', 'On'];
    const value = false;

    const rememberMe = useState(value);




    const header = (
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
    );
    const footer = (
        <>
 <div className="card flex justify-content-center">
            <div className="flex flex-column align-items-center gap-2">
        
                <label htmlFor="item" className={classNames('flex justify-content-center')}>
                   Remember Me
                </label>
                <SelectButton
                    id="item"
                    name="item"
                    value={rememberMe}
                    options={options}
            
                />
              
                <Button label="Login" type="submit" icon="pi pi-check" />
            </div>
        </div>



        </>
    );

    return <>

        <div className="card flex justify-content-center login-card">
            <Card title="Sign In" footer={footer} header={header} className="md:w-25rem">

                <div className="login">

                    <div className="flex flex-column gap-2 input-login">
                        <label htmlFor="username" className="login-label">Username</label>
                        <InputText id="username" aria-describedby="username-help" />

                    </div>
                    <div className="flex flex-column gap-2  input-login margin-top-input">
                        <label htmlFor="password" className="login-label">Password</label>
                        <InputText id="password" type="password" aria-describedby="password-help" />

                    </div>
                </div>
            </Card>
        </div>


    </>
}

export default SignIn


