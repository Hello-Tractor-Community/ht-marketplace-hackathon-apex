import LoginForm from "../../components/authentication/forms/LoginForm"
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

const Login = () => {
  return (
    <div>
      <Navbar />
      <LoginForm />
      <Footer />
    </div>
  )
}

export default Login