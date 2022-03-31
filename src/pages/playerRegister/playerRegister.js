import styles from './playerRegister.module.css';
import UserSvg from '../svg/user';
import Email from '../svg/email';
import Secure from '../svg/secure';
import TopBar from '../../components/topBar/topBar';
/* import React from 'react'; */
import React, { useRef } from "react";
import { useForm } from "react-hook-form";



const PlayerRegister = () => {
 
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const password = useRef({});
    password.current = watch("password", "");
    const onSubmit = data => console.log(data);

    return (
        
        <React.Fragment>  

        <TopBar />
        <div className={styles.playerRegister}>

    
            <form  method="POST" action="http://127.0.0.1:5000/register"  onSubmit={handleSubmit(onSubmit)}  >
            
                <p>Register (Player)</p>
                <div className={styles.inputContainer}>
                    <UserSvg/>
                    <input {...register("username", { required: true })} type="text" name="username" placeholder='Username' />
                     {/* errors will return when field validation fails  */}
                     {errors?.username?.type === "required" && <p className={styles.error}>This field is required</p>}
                </div>
                <div className={styles.inputContainer}>
                     <Email/>
                    <input {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} type="text" name="email" placeholder='Email'   />
                     {/* errors will return when field validation fails  */}
                     {errors?.email?.type === "required" &&  <p className={styles.error}>This field is required</p>}
                     {errors?.email?.type === "pattern" &&  <p className={styles.error} >Invalid email address</p>} 
                </div>
                <div className={styles.inputContainer}>
                      <Secure/>
                    <input {...register("password", { required: true,  minLength: 8,  pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ })} type="text" name="password" placeholder='Password' />
                     {/* errors will return when field validation fails  */}
                     {errors?.password?.type === "required" &&  <p className={styles.error}>This field is required</p>}
                     {errors?.password?.type === "minLength" &&  <p className={styles.error} >Password must have atleast 8 characters</p>} 
                     {errors?.password?.type === "pattern" &&  <p className={styles.error} >Password must contain 1 number and 1 alphabet</p>} 
                </div>
              
                <div className={styles.inputContainer}>
                <Secure/>
                    <input {...register("repeatPassword", { required: true,  minLength: 8, validate: value =>
                      value === password.current || "The passwords do not match"})}  type="text" name="repeatPassword" placeholder='Repeat password' />
                     {errors.repeatPassword && <p className={styles.error}>{errors.repeatPassword.message}</p>}
                     {/* errors will return when field validation fails  */}
                     {errors?.repeatPassword?.type === "required" &&  <p className={styles.error} >This field is required</p>} 
                     {errors?.repeatPassword?.type === "minLength" &&  <p className={styles.error} >Password must have atleast 8 characters</p>} 
    
                </div>
           
                <input type="submit" value="Register" />
            </form>

            
        </div>

        </React.Fragment>  
    )

}

export default PlayerRegister;