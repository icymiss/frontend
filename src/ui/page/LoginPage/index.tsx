export default function LoginPage(){
    return null
}

// import NavList from "../../component/NavList";
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import TopNavBar from "../../component/TopNavbar";
// import React, {useState} from "react";
// import FirebaseAuthService from "../../../authService/FirebaseAuthSerivce";
// import {useNavigate} from "react-router-dom";
//
// export default function ShoppingCart() {
//     return(
//         <>
//             <div className="shopping-cart-container">
//                 <NavList/>
//                 <h1>Login Page!</h1>
//             </div>
//
//         </>
//     )
// }
//
// export default function LoginPage(){
//     const navigate = useNavigate();
//
//     const [email, setEmail] = useState<string>("");
//     const [password, setPassword] = useState<string>("");
//     const[isLoginFailed, setIsLoginFailed] = useState<boolean>(false);
//
//     const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setEmail(event.currentTarget.value);
//     }
//
//     const handlePaswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setPassword(event.currentTarget.value);
//     }
//
//     const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//         let loginResult = await FirebaseAuthService.handleSignInWithEmailAndPassword(email, password);
//         if(loginResult){
//             navigate(-1);
//         }else{
//             setIsLoginFailed(true);
//
//         }
//     }
//     const formComponent = (
//
//         <Form>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Label>Email address</Form.Label>
//                 <Form.Control type="email" placeholder="Enter email" />
//                 <Form.Text className="text-muted">
//                     We'll never share your email with anyone else.
//                 </Form.Text>
//             </Form.Group>
//
//             <Form.Group className="mb-3" controlId="formBasicPassword">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control type="password" placeholder="Password" />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicCheckbox">
//                 <Form.Check type="checkbox" label="Check me out" />
//             </Form.Group>
//             <Button variant="primary" type="submit">
//                 Submit
//             </Button>
//         </Form>
//     )
//
// }
// return(
//     <div>
//         <TopNavBar/>
//         {FormConponent}
//     </div>
// )
//
// export default LoginPage;