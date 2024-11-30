import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";





const SignIn = () => {

  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Sign In</h2>
        <Form>
          <div className="mb-4">
            <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              className="mt-1 block w-full"
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              className="mt-1 block w-full"
            />
          </div>

          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </Form>
        <div className="text-center">
        <p className="text-blue-800 text-sm my-2">don't have an account ? <span onClick={()=>navigate('/signup')}  className="text-blue-600 cursor-pointer">sign up</span></p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
