import React from 'react'
import {Avatar, Button, Paper, Grid, Typography, Container, TextField} from '@material-ui/core'
import {GoogleLogin} from 'react-google-login'
import Icon from './icon'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './styles'
import Input from './Input'

 const Auth =()=> {
	const classes = useStyles()
	const [showPassword, setShowPassword] = React.useState(false)
    const [isSignup, setIsSignup] = React.useState(false)
	const handleShowPassword =()=> setShowPassword((prevShowPassword) => !prevShowPassword)
	const handleSubmit =()=>{}
	const handleChange =()=>{}
	const switchMode =()=>{setIsSignup((prevIsSignup)=>!prevIsSignup)
                           handleShowPassword(false)}
    const googleSuccess =async(res)=>{console.log(res)}
    const googleFailure =()=>{console.log('Unsuccessful.')}
	return(
            <Container component="main" maxWidth="xs">
              <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignup?'Sign Up':'Sign In'}</Typography>
               <form className={classes.from} onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                     {
                     	isSignup && (
                              <>
                 <Input 
                        name="firstName" 
                        label='First Name' 
                        handleChange={handleChange}
                        half/>
                 <Input 
                        name="firstName" 
                        label='First Name' 
                        handleChange={handleChange}
                        half/>
                     </>
                      )}
                     <Input 
                           name="email"
                           label="Email Address" 
                           handleChange={handleChange} 
                           type="email"/>
                     <Input
                           name="password"
                           label="Password" 
                           handleChange={handleChange}
                           type={showPassword?"text":"password"}
                           handleShowPassword={handleShowPassword}/>
                        {isSignup && 
                        	<Input 
                        	   name="confirmPassword"
                        	   label="Repeat Password"
                        	   handleChange={handleChange}
                               type="password" />
                        }
                  </Grid>
                  
                  <Button
                         type="submit" 
                         fullWidth
                         variant="contained"
                         color="primary"
                         className={classes.submit}>
                    {isSignup? 'Sign Up': 'Sign In'}
                  </Button>
                  <GoogleLogin 
                               clientId="432974885424-2h18r3bse2rf5q0u8qcrljbaghbdem2j.apps.googleusercontent.com"
                               render={(renderProps)=>(
                                   <Button
                                            className={classes.googleButton}
                                            color='primary'
                                            fullWidth
                                            onClick={renderProps.onClick}
                                            disabled={renderProps.dispabled}
                                            startIcon={<Icon/>}
                                            variant="contained"
                                            >Google Sign In</Button>
                               	)} 
                                onSuccess={googleSuccess}
                                onFailure={googleFailure}
                                cookiePolicy="single_host_origin"
                               	 />
                                
                  <Grid container justifyContent="flex-end">
                           <Grid item>
                              <Button onClick={switchMode}>
                               {isSignup?"Do you have an account?":"Don't have an account?"}
                              </Button>
                           </Grid>
                  </Grid>
               </form>
              </Paper>
            </Container>
		)
}
export default Auth